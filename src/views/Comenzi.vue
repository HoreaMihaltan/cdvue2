<template>

    <div v-if="user._id ==='Horea'" class="container" style="padding: 10px">
        <h1>Comenzi ( {{ totalComenzi}} )</h1

        <table class="col-sm-12" style="padding: 10px">
            <tr> <router-link
                    class="btn btn-primary dropdown-toggle"
                    style="font-size: medium"
                    router-link  to="/comandanoua">
                Adauga Comanda</router-link>
            </tr>
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
                <td> <router-link
                        class="btn btn-primary dropdown-toggle"
                        style="font-size: medium; width: 100%"
                        :to="'/comanda/' + comenzi.id">
                    {{ comenzi.value.idComanda }}
                </router-link></td>
                <td> {{ comenzi.value.numeClient }}</td>
                <td> {{ comenzi.value.adresaLivrare }} </td>
                <td> {{ comenzi.value.livrator }} </td>
                <td> {{ comenzi.value.oraComanda }} </td>
                <td> {{ comenzi.value.oraLimita }} </td>
                <td> {{ comenzi.value.stareComanda }}</td>
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
        name: 'comenzi',
        created () {
            this.$store.dispatch('get_comenzi', 'byIdComanda')
            //  this.$store.dispatch('get_comenzi', 'byToday')

        },
        methods: {
            setStatus (status) {
                this.comenzi.stareComanda = status}
        },
        computed: {
            ...mapState({
                comenzi: 'comenzi',
                user: 'user'
            }),
            totalComenzi: function () {
                return this.comenzi.length;
            }
        }
    }

     //location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>

</style>