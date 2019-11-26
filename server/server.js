const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const useriDb = `http://localhost:5984/_users`;
const comenziDb = `http://localhost:5984/comenzi`;
const clientiDb = `http://localhost:5984/clienti`;
const livratoriDb = `http://localhost:5984/livratori`;
const straziclujDb = `http://localhost:5984/strazicluj`;
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
const session = 'http://localhost:5984/_session'
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('a user connected')

    socket.on('comanda-noua-creata', data => {
        io.emit('comanda-noua-response')
    })

})


app.use('/check-login', (req, res) => {
    const config = {
        url: session,
        req,
        res
    }
    getData(config)
    async function getData ({ url, req, res, clbk }) {
        try {
            const { data } = await axios({ url, headers: req.headers })
            if (data.userCtx.name) {
                let db
                switch (data.userCtx.roles[0]) {
                    case 'client':
                        db = 'clienti'
                        break
                    case 'livrator':
                        db = 'livratori'
                        break
                }
                const url = `http://localhost:5984/${db}/${data.userCtx.name}`
                const user = await axios(url)
                clbk ? clbk(user.data) : res.send(user.data)
            } else {
                console.log('no valid token')
                res.sendStatus(401)
            }

        } catch (e) {
            // console.log(e.response.data)
            console.log(req.baseUrl)
            res.sendStatus(e.response && e.response.status)
        }
    }
})
app.use('/login', (req, res) => {
    get_login()
    async function get_login () {
        try {
            const resp = await axios.post('http://localhost:5984/_session', req.body)
            let db
            switch (resp.data.roles[0]) {
                case 'client':
                    db = 'clienti'
                    break
                case 'livrator':
                    db = 'livratori'
                    break
            }
            const url = `http://localhost:5984/${db}/${resp.data.name}`
            const user = await axios(url)
            res.cookie(resp.headers['set-cookie'][0])
            res.send(user.data)
        } catch (e) {
            res.send(e.response)
        }
    }
})
app.use('/logout', (req, res) => {
    logout()
    async function logout() {
        try {
            const resp = await axios.delete(session)
            res.cookie(resp.headers['set-cookie'][0])
            res.send(resp.data)
        } catch (e) {

        }

    }
})
app.use('/create-user', (req, res) => {
    const users = req.body;
    save();
    async function save () {
        try {
            const { data } = await axios.post(useriDb, users);
            res.send('USER CREAT')
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-users', (req, res) => {
    getUsers()
    async function getUsers () {
        const url = `${useriDb}/_design/user_activ/_view/byName`
        try {
            axios(url)
                .then(resp => {
                    console.log(resp.data)
                    res.send(resp.data.rows)
                })
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-user/:id', (req, res) => {
    const id = req.params.id
   getUser()
    async function getUser () {
        const url = `${useriDb}/${id}`
        try {
          axios(url)
              .then(resp => {
                  delete resp.data._id
                  delete resp.data._rev
                  res.send(resp.data)
              })
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/update-user', (req, res) => {
    const id = req.body.id
    const users = req.body.users
    update()
    async function update () {
        try {
            const { data } = await axios(`${useriDb}/${id}`)
            // console.log(data)
            for (let userKey in users) {
                data[userKey] = users[userKey]
            }
            const resp = await axios.put(`${useriDb}/${id}`, data)
            console.log(resp.data)
            res.send(resp.data)
        } catch (e) {

        }
    }
})
// de aici livratori
app.use('/create-livrator', (req, res) => {
    const livratori = req.body
    save()
    async function save () {
        try {
            const { data } = await axios.post(livratoriDb, livratori)
            res.send('LIVRATOR CREEAT')
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-livratori', (req, res) => {
    getLivratori()
    async function getLivratori () {
        const url = `${livratoriDb}/_design/livratori/_view/byNumeLivrator`
        try {
            axios(url)
                .then(resp => {
                    console.log(resp.data)
                    res.send(resp.data.rows)
                })
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-livrator/:id', (req, res) => {
    const id = req.params.id
    getLivrator()
    async function getLivrator () {
        const url = `${livratoriDb}/${id}`
        try {
            axios(url)
                .then(resp => {
                    delete resp.data._id
                    delete resp.data._rev
                    res.send(resp.data)
                })
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/update-livrator', (req, res) => {
    const id = req.body.id
    const livratori = req.body.livratori
    update()
    async function update () {
        try {
            const { data } = await axios(`${livratoriDb}/${id}`)
            // console.log(data)
            for (let livratoriKey in livratori) {
                data[livratoriKey] = livratori[livratoriKey]
            }
            const resp = await axios.put(`${livratoriDb}/${id}`, data)
            console.log(resp.data)
            res.send(resp.data)
        } catch (e) {
            //
        }
    }
})
// de aici straziCluj
app.use('/create-strada', (req, res) => {
    const stradaCluj = req.body
    save()
    async function save () {
        try {
            const { data } = await axios.post(straziclujDb, stradaCluj)
            res.send('STRADA INTRODUSA')
        } catch (e) {
            console.log(e.response)
        }
    }
})

//------pagina nedecontate user
app.use('/get_nedecontate_client', (req, res) => {
    getData()
    async function getData () {
        try {
            const programate = await axios(`${comenziDb}/_design/comenziAzi/_view/byStareProgramata`)
            //const nedecontate_byClient = await axios(`${comenziDb}/_design/comenziAzi/_view/byNedecontate?key="${nume}`)
            const nedecontateClient = await axios(`${comenziDb}/_design/comenziAzi/_view/byNedecontate?key="${nume}`)
            const gata_byClient = await axios(`${comenziDb}/_design/comenziAzi/_view/byStareGata`)
            const data = {
                programate: programate.data.rows,
                nedecontateClient: nedecontateClient.data.rows,
                gata_byClient: gata_byClient.data.rows
            }
            res.send(data)
        } catch (e) {
            console.log(e)
        }
    }
})
//----pagina nedecontate user-----

app.use('/get-straziview', (req, res) => {
    getStraziView()
    async function getStraziView () {
        const url = `${straziclujDb}/_design/straziCluj/_view/byStraziCluj`
        try {
            axios(url)
                .then(resp => {
                    console.log(resp.data)
                    res.send(resp.data.rows)
                })
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get-straziCluj', (req, res) => {
    getStraziCluj()
    async function getStraziCluj () {
        const url = `${straziclujDb}/_design/straziCluj/_view/byStraziCluj`
        try {
            const { data } = await axios(url)
            const response = data.rows.map(obj => {
                delete obj.value._id
                delete obj.value._rev
                return obj.value
            })
            res.send(response)
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get-stradaCluj/:id', (req, res) => {
    const id = req.params.id
    getStraziCluj()
    async function getStraziCluj () {
        const url = `${straziclujDb}/${id}`
        try {
            axios(url)
                .then(resp => {
                    delete resp.data._id
                    delete resp.data._rev
                    res.send(resp.data)
                })
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/update-stradaCluj', (req, res) => {
    const id = req.body.id
    const straziCluj = req.body.straziCluj
    update()
    async function update () {
        try {
            const { data } = await axios(`${straziclujDb}/${id}`)
            // console.log(data)
            for (let straziClujKey in straziCluj) {
                data[straziClujKey] = straziCluj[straziClujKey]
            }
            const resp = await axios.put(`${straziclujDb}/${id}`, data)
            console.log(resp.data)
            res.send(resp.data)
        } catch (e) {
            //
        }
    }
})
//aici ebriza
// app.use('/get-ebrizaShanghai/, (req, res) => {
//     const view = req.params.view
//     getEbrizaShanghai()
//     async function getEbrizaShanghai () {
//
//         const url = `http://167.99.217.127/feed/b66d1304-0565-4cd3-a468-89aaa517945a/xml`
//         console.log(url)
//         try {
//             axios(url)
//                 .then(resp => {
//                     //console.log(resp.data)
//                     res.send(resp.data.rows)
//                 })
//         } catch (e) {
//             console.log(e.response)
//         }
//     },
// })
//-----------
// de aici comenzi
app.use('/create-comanda', (req, res) => {
    const comenzi = req.body
    save()
    async function save () {
        try {
            const { data } = await axios.post(comenziDb, comenzi)
            res.send('COMANDA LANSATA')
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get-comenzi/:view', (req, res) => {
    const view = req.params.view
    getComenzi()
    async function getComenzi () {
        // const url = `${comenziDb}/_design/comenziAzi/_view/byIdComanda`
        const url = `${comenziDb}/_design/comenziAzi/_view/${view}`
        try {
          axios(url)
              .then(resp => {
                  res.send(resp.data.rows)
              })
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-comenzi-by-client/:nume', (req, res) => {
    const nume = req.params.nume
    getComenzibyClient()
    async function getComenzibyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byClient?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-comenziAzi-by-client/:nume', (req, res) => {
    const nume = req.params.nume
    getComenziAzibyClient()
    async function getComenziAzibyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byToday?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get_disponibile_byClient/:nume', (req, res) => {
    const nume = req.params.nume
    getFaraLivratorbyClient()
    async function getFaraLivratorbyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byFaraLivrator?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get_inLucru_byClient/:nume', (req, res) => {
    const nume = req.params.nume
    getInLucrubyClient()
    async function getInLucrubyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byStareInLucru?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get_gata_byClient/:nume', (req, res) => {
    const nume = req.params.nume
    getGatabyClient()
    async function getGatabyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byStareGata?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get_ridicate_byClient/:nume', (req, res) => {
    const nume = req.params.nume
    getRidicatebyClient()
    async function getRidicatebyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byStareRidicata?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get_inLivrare_byClient/:nume', (req, res) => {
    const nume = req.params.nume
    getInLivrarebyClient()
    async function getInLivrarebyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byStareInLivrare?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get_Livrate_byClient/:nume', (req, res) => {
    const nume = req.params.nume
    getLivratebyClient()
    async function getLivratebyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byStareLivrata?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get_nedecontate_byClient/:nume', (req, res) => {
    const nume = req.params.nume
    getNedecontatebyClient()
    async function getNedecontatebyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byNedecontate?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})

app.use('/get_programate_byClient/:nume', (req, res) => {
    const nume = req.params.nume
    getProgramatebyClient()
    async function getProgramatebyClient () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byStareProgramata?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-comenzi-by-clientLuna/:nume', (req, res) => {
    const nume = req.params.nume
    getComenzibyClientLuna()
    async function getComenzibyClientLuna () {
        const url = `${comenziDb}/_design/comenziAzi/_view/byClientLuna?key="${nume}"`
        try {
            const { data } = await axios(url)
            res.send(data.rows)
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-comanda/:id', (req, res) => {
    const id = req.params.id
   getComanda()
    async function getComanda () {
        const url = `${comenziDb}/${id}`
        try {
          axios(url)
              .then(resp => {
                  delete resp.data._id
                  delete resp.data._rev
                  res.send(resp.data)
              })
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/update-comanda', (req, res) => {
    const id = req.body.id
    const comenzi = req.body.comenzi
    update()
    async function update () {
        try {
            const { data } = await axios(`${comenziDb}/${id}`)
            for (let comenziKey in comenzi) {
                data[comenziKey] = comenzi[comenziKey]
            }
            const resp = await axios.put(`${comenziDb}/${id}`, data)
            res.send(resp.data)
        } catch (e) {
            //
        }
    }
})

// de aici clienti
app.use('/create-client', (req, res) => {
    const clienti = req.body
    save()
    async function save () {
        try {
            const { data } = await axios.post(clientiDb, clienti)
            res.send('CLIENT CREAT')
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-clienti', (req, res) => {
    getClienti()
    async function getClienti () {
        const url = `${clientiDb}/_design/clienti/_view/byIdClient`
        try {
          axios(url)
              .then(resp => {
                  res.send(resp.data.rows)
              })
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/get-client/:id', (req, res) => {
    const id = req.params.id
   getClient()
    async function getClient () {
        const url = `${clientiDb}/${id}`
        try {
          axios(url)
              .then(resp => {
                  delete resp.data._id
                  delete resp.data._rev
                  res.send(resp.data)
              })
        } catch (e) {
            console.log(e.response)
        }
    }
})
app.use('/update-client', (req, res) => {
    const id = req.body.id
    const clienti = req.body.clienti
    update()
    async function update () {
        try {
            const { data } = await axios(`${clientiDb}/${id}`)
            for (let clientiKey in clienti) {
                data[clientiKey] = clienti[clientiKey]
            }
            const resp = await axios.put(`${clientiDb}/${id}`, data)
            res.send(resp.data)
        } catch (e) {
            //
        }
    }
})
// app.use('/create_user', (req, res) => {
//     const url = 'http://admin:admin@localhost:5984/_users'
//     const user = {
//         "_id": "org.couchdb.user:cristian",
//         "name": "cristian",
//         "type": "user",
//         "roles": [],
//         "password": "cristian"
//     }
//     axios.put(url, user)
//         .then(resp => {
//             console.log(resp.data)
//             res.send('ok')
//         })
//         .catch(e => {
//             console.log(e.response.data)
//             res.send('failed')
//         })
// })