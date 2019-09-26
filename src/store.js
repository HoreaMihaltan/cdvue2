import Vue from 'vue'
import Vuex from 'vuex'
import * as axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      users: [],
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
      clienti: [],
      formIsSent: false,
      clienti: {
          numeLocatie: '',
          idClient: '',
          clientEmail:  '',
          clientTelefon:  '',
          adresaLocatie:  '',
          clientLocatieGPS:  '',
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
      comenzi: [],
     formIsSent: false,
      comenzi: {
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
          tarifare: ''
      },
      updated: false
  },
  mutations: {

  },
  actions: {
    create_user ({ state }, user) {
      axios.post('/api/create-user', user)
          .then(resp => {
            console.log(resp)
              state.formIsSent = true
          })
          .catch(e => {
            console.log(e.response)
          })
    },
      get_users ({ state }) {
        axios('/api/get-users')
            .then(resp => {
                state.users = resp.data
            })
            .catch(e => {
                console.log(e.response)
            })
      },
      get_user ({ state }, id) {
        axios(`/api/get-user/${id}`)
            .then(resp => {
                state.users = resp.data
            })
            .catch(e => {
                //
            })
      },
      update_user ({ state }, id) {
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
    create_comanda ({ state }, comenzi) {
      axios.post('/api/create-comanda', comenzi)
          .then(resp => {
            console.log(resp)
              state.formIsSent = true
          })
          .catch(e => {
            console.log(e.response)
          })
    },
      get_comenzi ({ state }) {
        axios('/api/get-comenzi')
            .then(resp => {
                state.comenzi = resp.data
            })
            .catch(e => {
                console.log(e.response)
            })
      },
      get_comanda ({ state }, id) {
          axios(`/api/get-comanda/${id}`)
              .then(resp => {
                  state.comenzi = resp.data
              })
              .catch(e => {
                  //
              })
      },
      update_comanda ({ state }, id) {
          axios.post('/api/update-comanda', {
              id,
              comenzi: state.comenzi
          })
              .then(resp => {
                  state.updated = true
                  console.log(resp.data)
              })
      },
      // de aici clienti
    create_client ({ state }, clienti) {
      axios.post('/api/create-client', clienti)
          .then(resp => {
            console.log(resp)
              state.formIsSent = true
          })
          .catch(e => {
            console.log(e.response)
          })
    },
      get_clienti ({ state }) {
        axios('/api/get-clienti')
            .then(resp => {
                state.clienti = resp.data
            })
            .catch(e => {
                console.log(e.response)
            })
      },
      get_client ({ state }, id) {
          axios(`/api/get-client/${id}`)
              .then(resp => {
                  state.clienti = resp.data
              })
              .catch(e => {
                  //
              })
      },
      update_client ({ state }, id) {
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
