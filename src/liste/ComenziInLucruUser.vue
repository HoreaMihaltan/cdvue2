<template>

    <div class="container" style="padding: 10px">

        <div v-if="user._id !=='Horea'"><h2>Comenzi In Lucru: ({{ totalInLucruUser}})</h2>
        </div>

        <table class="col-sm-12" style="padding: 10px">
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comandanoua">Adauga Comanda</router-link></tr>
            <tr >
                <th style="text-align: center">IdComanda</th>
                <th style="text-align: center">Adresa Livrare</th>
                <th style="text-align: center">Ora Comanda</th>
                <th style="text-align: center">Ora Limita</th>
                <th style="text-align: center">Stare Comanda</th>
                <th style="text-align: center">Decontat</th>
                <th style="text-align: center">Plata Cash</th>
                <th style="text-align: center">Valoare Comanda</th>
                <th style="text-align: center">Tarifare</th>
            </tr>
            <tr v-for="(inLucru_byClient,index) in inLucru_byClient" :key="index">
                <!--                      <tr v-for="comenzi in comenzi">-->
                <td > <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/comanda/' + inLucru_byClient.id">
                    {{ inLucru_byClient.value.idComanda }}
                </router-link></td>
                <td v-if="user._id !=='Horea'"> {{ inLucru_byClient.value.adresaLivrare }} </td>
                <td v-if="user._id !=='Horea'"> {{ inLucru_byClient.value.oraComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ inLucru_byClient.value.oraLimita }} </td>
                <td v-if="user._id !=='Horea'"> {{ inLucru_byClient.value.stareComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ inLucru_byClient.value.decontat }} </td>
                <td v-if="user._id !=='Horea'"> {{ inLucru_byClient.value.plataCash }} </td>
                <td v-if="user._id !=='Horea'"> {{ inLucru_byClient.value.valoareComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ inLucru_byClient.value.tarifare }} </td>
            </tr>

        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Listnav from "../components/ListNav";
    export default {
        name: 'comenzi_inLucru',
        //components: {Listnav},
        created () {
            // this.$store.dispatch('get_comenzi', 'byIdComanda')
            //  this.$store.dispatch('get_comenzi', 'byToday')
            // this.$store.dispatch('get_comenzi', 'byFaraLivrator')
            this.$store.dispatch('get_inLucru_byClient')

        },
        computed: {
            ...mapState({
                modificaStare: 'modificaStare',
                user: 'user',
                // comenzi: 'comenzi',
                inLucru_byClient: 'inLucru_byClient'
            }),
            totalInLucruAdmin: function () {
                return this.comenzi.length;
            },
            totalInLucruUser: function () {
                return this.inLucru_byClient.length;
            }
        }
    }

    // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>

</style>