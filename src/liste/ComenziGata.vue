<template>

    <div class="container" style="padding: 10px">

        <div><h2>Comenzi Gata de livrare ( {{ totalComenzi}} )</h2>
        </div>

        <table class="col-sm-12" style="padding: 10px">
            <tr>
                <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link
                             to="/comandanoua">Adauga Comanda
                </router-link>
            </tr>
            <tr>
                <th style="text-align: center">IdComanda</th>
                <th style="text-align: center">Adresa Livrare</th>
                <th style="text-align: center">Livrator</th>
                <th style="text-align: center">Ora Comanda</th>
                <th style="text-align: center">Ora Limita</th>
                <th style="text-align: center">Stare Comanda</th>
                <th style="text-align: center">Decontat</th>
                <th style="text-align: center">Cartier</th>
                <th style="text-align: center">Plata Cash</th>
                <th style="text-align: center">Valoare Comanda</th>
                <th style="text-align: center">Tarifare</th>
            </tr>
            <tr v-for="(comenzi,index) in comenzi" :key="index">
                <!--                      <tr v-for="comenzi in comenzi">-->
                <td>
                    <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%"
                                 :to="'/comanda/' + comenzi.id">
                        {{ comenzi.value.idComanda }}
                    </router-link>
                </td>
                <td>
                    <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%"
                                 :to="'/modifica_adresa_comanda/' + comenzi.id">
                        {{ comenzi.value.adresaLivrare }}
                    </router-link>
                </td>
                <td> {{ comenzi.value.livrator }}</td>
                <td> {{ comenzi.value.oraComanda }}</td>
                <td> {{ comenzi.value.oraLimita }}</td>
                <td v-if="comenzi.value.stareComanda === 'in lucru'" style="color: honeydew; background-color: green ">
                    {{ comenzi.value.stareComanda }}
                </td>
                <td v-if="comenzi.value.stareComanda === 'programata'" style="color: black; background-color: yellow ">
                    {{ comenzi.value.stareComanda }}
                </td>
                <td v-if="comenzi.value.stareComanda === 'gata de livrare'"
                    style="color: honeydew; background-color: #000976 "> {{ comenzi.value.stareComanda }}
                </td>
                <td v-if="comenzi.value.stareComanda === 'ridicata'"
                    style="color: honeydew; background-color: brown "> {{ comenzi.value.stareComanda }}
                </td>
                <td v-if="comenzi.value.stareComanda === 'in livrare'"
                    style="color: honeydew; background-color: blue "> {{ comenzi.value.stareComanda }}
                </td>
                <td v-if="comenzi.value.stareComanda === 'livrata'"
                    style="color: honeydew; background-color: gray "> {{ comenzi.value.stareComanda }}
                </td>
                <td> {{ comenzi.value.decontat }}</td>
                <td> {{ comenzi.value.cartier }}</td>
                <td> {{ comenzi.value.plataCash }}</td>
                <td> {{ comenzi.value.valoareComanda }}</td>
                <td> {{ comenzi.value.tarifare }}</td>
            </tr>

        </table>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Comenzi_programate from "./ComenziProgramate";
    import Listnav from "../components/ListNav";

    export default {
        name: 'comenzi_gata',
        components: {Listnav},
        created() {
            // this.$store.dispatch('get_comenzi', 'byIdComanda')
            // this.$store.dispatch('get_comenzi', 'byToday')
            this.$store.dispatch('get_comenzi', 'byStareGata')
            // this.$store.dispatch('get_comenziProgramate')
            // this.$store.dispatch('get_comenziAzi')
            // this.$store.dispatch('get_comenziInLucru')
            // this.$store.dispatch('get_comenziDisponibile')
            this.$store.dispatch('get_comenziGata')
            // this.$store.dispatch('get_comenziRidicate')
            // this.$store.dispatch('get_comenziInLivrare')
            // this.$store.dispatch('get_comenziLivrate')
            // this.$store.dispatch('get_comenziNedecontate')
        },
        computed: {
            ...mapState({
                comenzi: 'comenzi'
            }),
            totalComenzi: function () {
                return this.comenzi.length;
            }
        },




    }

    // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>


</style>