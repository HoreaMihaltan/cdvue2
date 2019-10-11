<template>

    <div v-if="user._id ==='Horea'" class="container" style="padding: 10px">
        <h1>Clienti</h1>
        <table class="col-sm-12" style="padding: 10px">
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/clientnou">Adauga Client</router-link></tr>
            <th colspan="12" style="text-align: center"><h2><router-link to="/clienti"> Clienti </router-link></h2></th>
            <tr >
                <th style="text-align: center">IdClient</th>
                <th style="text-align: center">Nume Client</th>
                <th style="text-align: center">Email Client</th>
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
                    {{ clienti.value._id }}
                </router-link></td>
                <td> {{ clienti.value.nume }}</td>
                <td> {{ clienti.value.email }}</td>
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
                clienti: 'clienti',
                user: 'user'
            })
        }
    }

    // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>

</style>