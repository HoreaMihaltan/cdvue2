const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const useriDb = `http://localhost:5984/user`
const comenziDb = `http://localhost:5984/comenzi`
const clientiDb = `http://localhost:5984/clienti`
const livratoriDb = `http://localhost:5984/livratori`
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use('/create-user', (req, res) => {
    const user = req.body
    save()
    async function save () {
        try {
            const { data } = await axios.post(useriDb, user)
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
    const user = req.body.user
    update()
    async function update () {
        try {
            const { data } = await axios(`${useriDb}/${id}`)
            // console.log(data)
            for (let userKey in user) {
                data[userKey] = user[userKey]
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
        console.log(url)
        try {
          axios(url)
              .then(resp => {
                  //console.log(resp.data)
                  res.send(resp.data.rows)
              })
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
            // console.log(data)
            for (let comenziKey in comenzi) {
                data[comenziKey] = comenzi[comenziKey]
            }
            const resp = await axios.put(`${comenziDb}/${id}`, data)
            console.log(resp.data)
            res.send(resp.data)
        } catch (e) {
            //
        }
    }
})
// app.use('/delete-comanda', (req, res) => {
//     const id = req.body.id
//     const comenzi = req.body.comenzi
//     delete()
//     async function delete () {
//         try {
//             const { data } = await axios(`${comenziDb}/${id}`)
//             // console.log(data)
//             for (let comenziKey in comenzi) {
//                 data[comenziKey] = comenzi[comenziKey]
//             }
//             const resp = await axios.delete(`${comenziDb}/${id}`, data)
//             console.log(resp.data)
//             res.send(resp.data)
//         } catch (e) {
//             //
//         }
//     }
// })
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
                  console.log(resp.data)
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
            // console.log(data)
            for (let clientiKey in clienti) {
                data[clientiKey] = clienti[clientiKey]
            }
            const resp = await axios.put(`${clientiDb}/${id}`, data)
            console.log(resp.data)
            res.send(resp.data)
        } catch (e) {
            //
        }
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))