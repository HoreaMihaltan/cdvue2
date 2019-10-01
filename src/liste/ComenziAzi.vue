<template>

    <div class="container" style="padding: 10px">
        <navbar><h2>Comenzi Azi</h2>
            <router-link class="btn btn-primary" style="font-size: medium" router-link  to="/comenzi_programate">Programate</router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link  to="/comenzi_disponibile">Disponibile</router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link  to="/comenzi_in_lucru">In lucru</router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link  to="/comenzi_gata">Gata de livrare</router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link  to="/comenzi_ridicate">Ridicate</router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link  to="/comenzi_in_livrare">In livrare</router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link  to="/comenzi_livrate">Livrate</router-link>
        </navbar

              <table class="col-sm-12" style="padding: 10px">
                 <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comandanoua">Adauga Comanda</router-link></tr>
                      <tr >
                          <th style="text-align: center">IdComanda</th>
                          <th style="text-align: center">Adresa Livrare</th>
                          <th style="text-align: center">Livrator</th>
                          <th style="text-align: center">Ora Comanda</th>
                          <th style="text-align: center">Ora Limita</th>
                          <th style="text-align: center">Stare Comanda</th>
                          <th style="text-align: center">Decontat</th>
                          <th style="text-align: center">Ora Livrare</th>
                          <th style="text-align: center">Plata Cash</th>
                          <th style="text-align: center">Valoare Comanda</th>
                          <th style="text-align: center">Tarifare</th>
                      </tr>
                  <tr v-for="(comenzi,index) in comenzi" :key="index">
<!--                      <tr v-for="comenzi in comenzi">-->
                          <td> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/comanda/' + comenzi.id">
                              {{ comenzi.value.idComanda }}
                          </router-link></td>
                          <td><router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/modifica_adresa_comanda/' + comenzi.id">
                              {{ comenzi.value.adresaLivrare }}
                          </router-link></td>
                          <td> {{ comenzi.value.livrator }} </td>
                          <td> {{ comenzi.value.oraComanda }} </td>
                          <td> {{ comenzi.value.oraLimita }} </td>
                          <td  style="color: honeydew; background-color: red "> {{ comenzi.value.stareComanda }} </td>
                          <td> {{ comenzi.value.decontat }} </td>
                          <td> {{ comenzi.value.oraLivrare }} </td>
                          <td> {{ comenzi.value.plataCash }} </td>
                          <td> {{ comenzi.value.valoareComanda }} </td>
                          <td> {{ comenzi.value.tarifare }} </td>
                      </tr>

              </table>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Comenzi_programate from "./ComenziProgramate";
    export default {
        name: 'comenzi_azi',
        components: {Comenzi_programate},
        created () {
            // this.$store.dispatch('get_comenzi', 'byIdComanda')
             this.$store.dispatch('get_comenzi', 'byToday')
            // this.$store.dispatch('get_comenzi', 'byStareGata')
        },
        computed: {
            ...mapState({
                comenzi: 'comenzi'
            })
        }
    }

   // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>


    </style>