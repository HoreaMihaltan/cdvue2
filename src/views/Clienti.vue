<template>

    <div class="container" style="padding: 10px">
        <h1>Clienti</h1>
        <table class="col-sm-12" style="padding: 10px">
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/clientnou">Adauga Client</router-link></tr>
            <th colspan="12" style="text-align: center"><h2><router-link to="/clienti"> Clienti </router-link></h2></th>
            <tr >
                <th style="text-align: center">IdClient</th>
                <th style="text-align: center">Nume Locatie</th>
                <th style="text-align: center">Nume Firma</th>
                <th style="text-align: center">Tip Contract</th>
                <th style="text-align: center">Curse Incluse</th>
                <th style="text-align: center">Tarif Baza</th>
                <th style="text-align: center">Tarif Zona 2</th>
                <th style="text-align: center">Tarif zona 3</th>
                <th style="text-align: center">Activ</th>


            </tr>
            <tr v-for="(clienti,index) in clienti" :key="index">
                <!--                      <tr v-for="clienti in clienti">-->
                <td> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/client/' + clienti.id">
                    {{ clienti.value.idClient }}
                </router-link></td>
                <td> {{ clienti.value.numeLocatie }}</td>
                <td> {{ clienti.value.clientNumeFirma }} </td>
                <td> {{ clienti.value.clientTipContract }} </td>
                <td> {{ clienti.value.clientCurseIncluse }} </td>
                <td> {{ clienti.value.clientTarifareBaza}} </td>
                <td> {{ clienti.value.clientTarifareZona2 }} </td>
                <td> {{ clienti.value.clientTarifareZona3 }} </td>
                <td> {{ clienti.value.clientActiv }} </td>

            </tr>

        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Comenzi_azi from "../liste/ComenziAzi";
    export default {
        name: 'clienti',
        components: {Comenzi_azi},
        created () {
            this.$store.dispatch('get_clienti')
        },
        computed: {
            ...mapState({
                clienti: 'clienti'
            })
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