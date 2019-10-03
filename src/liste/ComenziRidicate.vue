<template>

    <div class="container" style="padding: 10px">

        <navbar><h2>Comenzi Programate ( {{ totalComenzi}} )</h2><router-link class="btn btn-primary" style="font-size: medium" router-link  to="/comenzi_azi">Inapoi la comenzi</router-link></navbar

        <table class="col-sm-12" style="padding: 10px">
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comandanoua">Adauga Comanda</router-link></tr>
            <tr >
                <th style="text-align: center">IdComanda</th>
                <th style="text-align: center">Client</th>
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
                <td> {{ comenzi.value.numeClient }}</td>
                <td> {{ comenzi.value.adresaLivrare }} </td>
                <td> {{ comenzi.value.livrator }} </td>
                <td> {{ comenzi.value.oraComanda }} </td>
                <td> {{ comenzi.value.oraLimita }} </td>
                <td> {{ comenzi.value.stareComanda }} </td>
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
    export default {
        name: 'comenzi_ridicata',
        created () {
            // this.$store.dispatch('get_comenzi', 'byIdComanda')
            //  this.$store.dispatch('get_comenzi', 'byToday')
            this.$store.dispatch('get_comenzi', 'byStareRidicata')
        },
        computed: {
            ...mapState({
                comenzi: 'comenzi'
            }),
            totalComenzi: function () {
                return this.comenzi.length;
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