<template>

    <div class="container" style="padding: 10px">

        <div v-if="user._id ==='Horea'"><h2>Comenzi Disponibile: ( {{ totalDisponibileAdmin}} )</h2>
        </div>

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
                <th style="text-align: center">Plata Cash</th>
                <th style="text-align: center">Valoare Comanda</th>
                <th style="text-align: center">Tarifare</th>
            </tr>
            <tr v-for="(disponibile_byClient, index) in disponibile_byClient" :key="index">
            <tr v-if="user._id ==='Horea'"  v-for="(comenzi,index) in comenzi" :key="index">
                <!--                      <tr v-for="comenzi in comenzi">-->
            <td v-if="user._id ==='Horea'"> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/comanda/' + comenzi.id">
                    {{ comenzi.value.idComanda }}
                </router-link></td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.numeClient }}</td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.adresaLivrare }} </td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.livrator }} </td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.oraComanda }} </td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.oraLimita }} </td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.stareComanda }} </td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.decontat }} </td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.plataCash }} </td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.valoareComanda }} </td>
                <td v-if="user._id ==='Horea'"> {{ comenzi.value.tarifare }} </td>
            </tr>

        </table>
    </div>
</template>

<script>
    import * as io from 'socket.io-client'
    import { mapState } from 'vuex'
    import Listnav from "../components/ListNav";
    export default {
        name: 'comenzi_disponibile',
        components: {Listnav},
        data () {
            return {
                socket: undefined
            }
        },
        created () {
            // this.$store.dispatch('get_comenzi', 'byIdComanda')
            //  this.$store.dispatch('get_comenzi', 'byToday')
            this.$store.dispatch('get_comenzi', 'byFaraLivrator')
            //this.$store.dispatch('get_disponibile_byClient')


        },
        mounted () {
            console.log('this page')
            const socket = {
                path: '/socketio/socket.io',
                secure: true,
                rejectUnauthorized: false
            }
            this.socket = io(socket)
            this.socket.on('comanda-noua-response', data => {
                this.$store.dispatch('get_comenzi', 'byFaraLivrator')
                //alert('fa update la UI - comenzi. Ruleaza dispatchuri to get the new data')
            })
        },
        computed: {
            ...mapState({
                modificaStare: 'modificaStare',
                user: 'user',
                comenzi: 'comenzi',
                disponibile_byClient: 'disponibile_byClient'
            }),
            totalDisponibileAdmin: function () {
                return this.comenzi.length;
            },
            totalDisponibileUser: function () {
                return this.disponibile_byClient.length;
            }
        }
    }

    // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>

</style>