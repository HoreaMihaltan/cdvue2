<template>

    <div class="container" style="padding: 10px">

        <div><h2>Comenzi Programate ( {{ totalComenzi}} )</h2>
        </div>

              <i-card class="col-sm-12" style="padding: 10px">
                 <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comandanoua">Adauga Comanda</router-link></tr>
                      <tr >

                          <th style="text-align: center"></th>
                          <th style="text-align: center; width: auto">Comanda</th>
                          <th style="text-align: center">Data programata</th>
                          <th style="text-align: center">Ora Limita</th>
                          <th style="text-align: center">Decontat</th>
                          <th style="text-align: center">Plata Cash</th>
                          <th style="text-align: center">Valoare Comanda</th>
                          <th style="text-align: center">Tarifare</th>
                      </tr>
                  <tr v-for="(comenzi,index) in comenzi" :key="index">
<!--                      <tr v-for="comenzi in comenzi">-->
                      <td> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/comanda/' + comenzi.id">Modifica Comanda</router-link><router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/modifica_adresa_comanda/' + comenzi.id">
                          Modifica Adresa
                      </router-link> </td>
                          <td style="width: auto; alignment: center">
                              {{ comenzi.value.idComanda }}
                          </td>
<!--                          <td>-->
<!--                              {{ comenzi.value.adresaLivrare }}-->
<!--                          </td>-->
                      <td> {{ comenzi.value.dataComanda }} </td>
                          <td style="color: honeydew; background-color: red"> {{ comenzi.value.oraLimita }} </td>
                          <td > {{ comenzi.value.decontat }} </td>
                          <td> {{ comenzi.value.plataCash }} </td>
                          <td> {{ comenzi.value.valoareComanda }} </td>
                          <td> {{ comenzi.value.tarifare }} </td>

                      </tr>

              </i-card>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Listnav from "../components/ListNav";
    export default {
        name: 'comenzi_programate',
        components: {Listnav},
        created () {
            // this.$store.dispatch('get_comenzi', 'byIdComanda')
             this.$store.dispatch('get_comenzi', 'byStareProgramata')
            this.$store.dispatch('get_comenziProgramate')
            this.$store.dispatch('get_comenziAzi')
            this.$store.dispatch('get_comenziInLucru')
            this.$store.dispatch('get_comenziDisponibile')
            this.$store.dispatch('get_comenziGata')
            this.$store.dispatch('get_comenziRidicate')
            this.$store.dispatch('get_comenziInLivrare')
            this.$store.dispatch('get_comenziLivrate')
            this.$store.dispatch('get_comenziNedecontate')
        },
        computed: {
            ...mapState({
                comenzi: "comenzi",
                comenziProgramate: 'comenziProgramate'
            }),
            totalComenzi: function () {
                return this.comenziProgramate.length;
            }
        }
    }

   // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>
    /** {*/
    /*    box-sizing: border-box;*/
    /*}*/

    /*.header {*/
    /*    border: 1px solid red;*/
    /*    padding: 15px;*/
    /*}*/

    /*.row::after {*/
    /*    content: "";*/
    /*    clear: both;*/
    /*    display: table;*/
    /*}*/


    /*[class*="col-"] {*/
    /*    float: right;*/
    /*    inline-size: 10px;*/
    /*    padding: 10px;*/
    /*    border: 0px solid red;*/
    /*}*/

    /*.col-1 {width: 8.33%;}*/
    /*.col-sm-2 {width: 50%;}*/
    /*.col-3 {width: 20%;}*/
    /*.col-4 {width: 33.33%;}*/
    /*.col-5 {width: 41.66%;}*/
    /*.col-6 {width: 50%;}*/
    /*.col-7 {width: 58.33%;}*/
    /*.col-8 {width: 66.66%;}*/
    /*.col-9 {width: 80%;}*/
    /*.col-10 {width: 83.33%;}*/
    /*.col-11 {width: 91.66%;}*/
    /*.col-sm-12 {width: 100%;}*/
    </style>