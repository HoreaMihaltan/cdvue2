<template>

    <div class="container" style="padding: 10px">

        <div v-if="user._id ==='Horea'"><h2>Comenzi Disponibile: ( {{ totalDisponibileAdmin}} )</h2>
        </div>
        <div v-if="user._id !=='Horea'"><h2>Comenzi Disponibile: ({{ totalDisponibileUser}})</h2>
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
            <tr v-for="(disponibile_byClient,index) in disponibile_byClient" :key="index">
                <!--                      <tr v-for="comenzi in comenzi">-->
                <td > <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/comanda/' + disponibile_byClient.id">
                    {{ disponibile_byClient.value.idComanda }}
                </router-link></td>
                <td v-if="user._id !=='Horea'"> {{ disponibile_byClient.value.adresaLivrare }} </td>
                <td v-if="user._id !=='Horea'"> {{ disponibile_byClient.value.oraComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ disponibile_byClient.value.oraLimita }} </td>
                <td v-if="user._id !=='Horea'"> {{ disponibile_byClient.value.stareComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ disponibile_byClient.value.decontat }} </td>
                <td v-if="user._id !=='Horea'"> {{ disponibile_byClient.value.plataCash }} </td>
                <td v-if="user._id !=='Horea'"> {{ disponibile_byClient.value.valoareComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ disponibile_byClient.value.tarifare }} </td>
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
            // this.$store.dispatch('get_comenzi', 'byFaraLivrator')
            this.$store.dispatch('get_disponibile_byClient')

        },
        computed: {
            ...mapState({
                modificaStare: 'modificaStare',
                user: 'user',
                // comenzi: 'comenzi',
                disponibile_byClient: 'disponibile_byClient'
            }),
            totalDisponibileAdmin: function () {
                return this.comenzi.length;
            },
            totalDisponibileUser: function () {
                return this.disponibile_byClient.length;
            }
        },
        mounted () {
            console.log('comenzi disponibile user')
            const socket = {
                path: '/socketio/socket.io',
                secure: true,
                rejectUnauthorized: false
            }
            this.socket = io(socket)
            this.socket.on('comanda-noua-response', data => {
                this.$store.dispatch('get_disponibile_byClient')
            })
        }
    }

    // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>

</style>