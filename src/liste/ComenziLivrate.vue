<template>

    <div class="container" style="padding: 10px">

        <div><h2>Comenzi Livrate ( {{ totalComenzi}} )</h2>
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
    import Listnav from "../components/ListNav";
    export default {
        name: 'comenzi_livrate',
        components: {Listnav},
        created () {
            // this.$store.dispatch('get_comenzi', 'byIdComanda')
            //  this.$store.dispatch('get_comenzi', 'byToday')
            this.$store.dispatch('get_comenzi', 'byStareLivrata')
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
                comenzi: 'comenzi'
            }),
            totalComenzi: function () {
                return this.comenzi.length;
            }
        }
    }

</script>

<style>

</style>