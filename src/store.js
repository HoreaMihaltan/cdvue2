import Vue from 'vue'
import Vuex from 'vuex'
import * as axios from 'axios'
import router from './router'
import debugInfo from "less/lib/less/tree/debug-info";
import {layerGroup} from "leaflet/dist/leaflet-src.esm";
import ComandaNoua from "./views/ComandaNoua";


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: {},
        modificaStare: {
          inLucru: '',
          gataDeLivrare: '',
          ridicata: '',
          inLivrare: '',
          livrata: ''
        },
        straziCluj: {
            idStrada: '',
            fromCartier: '',
            zona: ''
        },
        user: {},
        users: {
            idUser: '',
            nume: '',
            userEmail: '',
            pin: '',
            tipUser: '',
            userActiv: ''
        },
        clienti: {
            // _id: '',
            id: '',
            nume: '',
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
        comenzi_byClient:[],
        comenziAzi_byClient:[],
        comenziAzi_byClientLuna:[],
        disponibile_byClient: [],
        inLucru_byClient: [],
        gata_byClient: [],
        ridicate_byClient: [],
        inLivrare_byClient: [],
        livrate_byClient: [],
        nedecontate_byClient: [],
        programate_byClient: [],
        comenziAzi: [],
        comenziProgramate: [],
        comenziInLucru: [],
        comenziGata: [],
        comenziRidicate: [],
        comenziInLivrare: [],
        comenziLivrate: [],
        comenziDisponibile: [],
        comenziNedecontate: [],
        comenzi: {
            idComanda: '',
            dataComanda: ``,
            dataRef: '',
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
            detaliiComanda: '',

        }
    },
    mutations: {},
    actions: {
        get_comenzi_nedecontate_user ({ state }) {
            axios.get('/api/get-comenzi-nedecontate-user')
              .then(resp => {
                  state.data = resp.data
              })
              .catch(e => { console.log(e) })
        },
        check_login ({ state }, next) {
            check()
            async function check () {
                try {
                    const { data } = await axios('/api/check-login')
                    state.user = data
                    state.isMenu = true
                    next()
                } catch (e) {
                    router.push({ name: 'login' })
                    state.username = undefined
                }
            }
        },
        login ({ state }, user) {
          get_login()
          async function get_login () {
              try {
                  const { data } = await axios.post('/api/login', user)
                  state.user = data
                  router.push('/comenzi_azi')
              } catch (e) {
                  console.log(e)
              }
          }
        },
        logout ({ state }) {
          axios('/api/logout')
              .then(resp => {
                  router.push({ name: 'login' })
                  state.isMenu = false
              })
        },
        create_user({state}, users) {
            axios.post('/api/create-user', users)
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
        // de aici straziCluj
        create_strada({state}, straziCluj) {
            axios.post('/api/create-strada', straziCluj)
                .then(resp => {
                    console.log(resp)
                    state.formIsSent = true
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_straziCluj({state}) {
            axios('/api/get-straziCluj')
                .then(resp => {
                    state.straziCluj = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_straziview({state}) {
            axios('/api/get-straziview')
                .then(resp => {
                    state.straziCluj = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_stradaCluj({state}, id) {
            axios(`/api/get-stradaCluj/${id}`)
                .then(resp => {
                    state.straziCluj = resp.data
                })
                .catch(e => {
                    //
                })
        },
        update_stradaCluj({state}, id) {
            axios.post('/api/update-stradaCluj', {
                id,
                straziCluj: state.straziCluj
            })
                .then(resp => {
                    state.updated = true
                    console.log(resp.data)
                })
        },
// de aici comenzi
        create_comanda({state}, {comenzi, socket}) {
            axios.post('/api/create-comanda', comenzi)
                .then(resp => {
                    socket.emit('comanda-noua-creata')
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
        get_comenzi_byClient({ state }) {
            axios(`/api/get-comenzi-by-client/${state.user.nume}`)
                .then(resp => {
                    state.comenzi_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziAzi_byClient({ state }) {
            axios(`/api/get-comenziAzi-by-client/${state.user.nume}`)
                .then(resp => {
                    state.comenziAzi_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_disponibile_byClient({ state }) {
            axios(`/api/get_disponibile_byClient/${state.user.nume}`)
                .then(resp => {
                    state.disponibile_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_inLucru_byClient({ state }) {
            axios(`/api/get_inLucru_byClient/${state.user.nume}`)
                .then(resp => {
                    state.inLucru_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_gata_byClient({ state }) {
            axios(`/api/get_gata_byClient/${state.user.nume}`)
                .then(resp => {
                    state.gata_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_ridicate_byClient({ state }) {
            axios(`/api/get_ridicate_byClient/${state.user.nume}`)
                .then(resp => {
                    state.ridicate_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_inLivrare_byClient({ state }) {
            axios(`/api/get_inLivrare_byClient/${state.user.nume}`)
                .then(resp => {
                    state.inLivrare_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_livrate_byClient({ state }) {
            axios(`/api/get_livrate_byClient/${state.user.nume}`)
                .then(resp => {
                    state.livrate_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_nedecontate_byClient({ state }) {
            axios(`/api/get_nedecontate_byClient/${state.user.nume}`)
                .then(resp => {
                    state.nedecontate_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_programate_byClient({ state }) {
            axios(`/api/get_programate_byClient/${state.user.nume}`)
                .then(resp => {
                    state.programate_byClient = resp.data
                })
                .catch(e => {
                    console.log(e.response)
                })
        },
        get_comenziAzi_byClientLuna({ state }) {
            axios(`/api/get-comenzi-by-clientLuna/${state.user.nume}`)
                .then(resp => {
                    state.comenziAzi_byClientLuna = resp.data
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
        // ----utile---
    aziRef () {
        const d = new Date()
        const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
        const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
        const today = `${d.getFullYear()}-${month}-${day}`;
        return today;
    }
    }
})

export default store
