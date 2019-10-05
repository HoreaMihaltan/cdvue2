import Vue from 'vue'
import Vuex from 'vuex'
import * as axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //users: [],
        formIsSent: false,
        users: {
            idUser: '',
            nume: '',
            userEmail: '',
            pin: '',
            tipUser: '',
            userActiv: ``
        },
        updated: false,
        //clienti: [],
        formIsSent: false,
        clienti: {
            numeLocatie: '',
            idClient: '',
            clientEmail: '',
            clientTelefon: '',
            adresaLocatie: '',
            clientLocatieGPS: '',
            clientNumeFirma: '',
            clientCUI: '',
            clientNIRC: '',
            clientAdresaFirma: '',
            clientTelefonFirma: '',
            clientEmailFirma: '',
            clientReprezentantFirma: '',
            clientIBANFirma: '',
            clientTipContract: '',
            clientCurseIncluse: '',
            clientTarifareBaza: '',
            clientTarifareZona2: '',
            clientTarifareZona3: '',
            clientSigla: '',
            clientProfil: '',
            clientSiteRedirect: '',
            clientActiv: ''
        },
        updated: false,

        //livratori: [],
        formIsSent: false,
        livratori: {
            dataAdaugare: '',
            numeLivrator: '',
            livratorEmail: '',
            livratorTelefon: '',
            livratorNumeFirma: '',
            livratorCUI: '',
            livratorNIRC: '',
            livratorAdresaFirma: '',
            livratorTelefonFirma: '',
            livratorEmailFirma: '',
            livratorReprezentantFirma: '',
            livratorIBANFirma: '',
            livratorActiv: ''
        },
        updated: false,
        comenziAzi: [],
        comenziProgramate: [],
        comenziInLucru: [],
        comenziGata: [],
        comenziRidicate: [],
        comenziInLivrare: [],
        comenziLivrate: [],
        comenziDisponibile: [],
        comenziNedecontate: [],
        formIsSent: false,
        comenzi: {
            total_rows: '',
            idComanda: '',
            dataComanda: ``,
            numeClient: '',
            adresaLivrare: '',
            cartier: '',
            livrator: '',
            oraComanda: '',
            oraLimita: '',
            stareComanda: '',
            decontat: '',
            oraLivrare: '',
            plataCash: '',
            plataCard: '',
            valoareComanda: '',
            tarifare: '',
            detaliiComanda: ''
        },
        updated: false
    },
    mutations: {},
    actions: {
        create_user({state}, user) {
            axios.post('/api/create-user', user)
                .then(resp => {
                    console.log(resp)
                    state.formIsSent = true
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_users({state}) {
            axios('/api/get-users')
                .then(resp => {
                    state.users = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_user({state}, id) {
            axios(`/api/get-user/${id}`)
                .then(resp => {
                    state.users = resp.data
                })
                .catch(e => {
                    //
                })
        },
        update_user({state}, id) {
            axios.post('/api/update-user', {
                id,
                user: state.users
            })
                .then(resp => {
                    state.updated = true
                    console.log(resp.data)
                })
        },
// de aici comenzi
        create_comanda({state}, comenzi) {
            axios.post('/api/create-comanda', comenzi)
                .then(resp => {
                    console.log(resp)
                    state.formIsSent = true
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenzi({state}, view) {
            axios(`/api/get-comenzi/${view}`)
                .then(resp => {
                    state.comenzi = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziProgramate({state}) {
            axios(`/api/get-comenzi/byStareProgramata`)
                .then(resp => {
                    state.comenziProgramate = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziAzi({state}) {
            axios(`/api/get-comenzi/byToday`)
                .then(resp => {
                    state.comenziAzi = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziInLucru({state}) {
            axios(`/api/get-comenzi/byStareInLucru`)
                .then(resp => {
                    state.comenziInLucru = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziDisponibile({state}) {
            axios(`/api/get-comenzi/byFaraLivrator`)
                .then(resp => {
                    state.comenziDisponibile = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziGata({state}) {
            axios(`/api/get-comenzi/byStareGata`)
                .then(resp => {
                    state.comenziGata = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziRidicate({state}) {
            axios(`/api/get-comenzi/byStareRidicata`)
                .then(resp => {
                    state.comenziRidicate = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziInLivrare({state}) {
            axios(`/api/get-comenzi/byStareInLivrare`)
                .then(resp => {
                    state.comenziInLivrare = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziLivrate({state}) {
            axios(`/api/get-comenzi/byStareLivrata`)
                .then(resp => {
                    state.comenziLivrate = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziNedecontate({state}) {
            axios(`/api/get-comenzi/byNedecontate`)
                .then(resp => {
                    state.comenziNedecontate = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comanda({state}, id) {
            axios(`/api/get-comanda/${id}`)
                .then(resp => {
                    state.comenzi = resp.data
                })
                .catch(e => {
                    //
                })
        },
        update_comanda({state}, id) {
            axios.post('/api/update-comanda', {
                id,
                comenzi: state.comenzi
            })
                .then(resp => {
                    state.updated = true
                    console.log(resp.data)
                })
        },
        // delete_comanda: function ({state}, id) {
        //     axios.post('/api/update-comanda', {
        //         id,
        //         comenzi: state.comenzi
        //     })
        //         .then(resp => {
        //             state.deleted = true
        //             console.log(resp.data)
        //         })
        // },
        // de aici livratori
        create_livrator({state}, livratori) {
            axios.post('/api/create-livrator', livratori)
                .then(resp => {
                    console.log(resp)
                    state.formIsSent = true
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_livratori({state}) {
            axios('/api/get-livratori')
                .then(resp => {
                    state.livratori = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_livrator({state}, id) {
            axios(`/api/get-livrator/${id}`)
                .then(resp => {
                    state.livratori = resp.data
                })
                .catch(e => {
                    //
                })
        },
        update_livrator({state}, id) {
            axios.post('/api/update-livrator', {
                id,
                livratori: state.livratori
            })
                .then(resp => {
                    state.updated = true
                    console.log(resp.data)
                })
        },
        // de aici clienti
        create_client({state}, clienti) {
            axios.post('/api/create-client', clienti)
                .then(resp => {
                    console.log(resp)
                    state.formIsSent = true
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_clienti({state}) {
            axios('/api/get-clienti')
                .then(resp => {
                    state.clienti = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_client({state}, id) {
            axios(`/api/get-client/${id}`)
                .then(resp => {
                    state.clienti = resp.data
                })
                .catch(e => {
                    //
                })
        },
        update_client({state}, id) {
            axios.post('/api/update-client', {
                id,
                clienti: state.clienti
            })
                .then(resp => {
                    state.updated = true
                    console.log(resp.data)
                })
        },

    }
})
