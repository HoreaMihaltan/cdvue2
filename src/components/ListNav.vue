<template>

    <div class="container" style="padding: 10px">
               <router-link class="btn btn-primary" style="font-size: medium" router-link to="/comenzi_azi">
                Inapoi la comenzi
            </router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link to="/comenzi_programate">
                Programate
            </router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link to="/comenzi_disponibile">
                Disponibile
            </router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link to="/comenzi_in_lucru">In lucru
            </router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link to="/comenzi_gata">Gata de
                livrare
            </router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link to="/comenzi_ridicate">Ridicate
            </router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link to="/comenzi_in_livrare">In
                livrare
            </router-link>
            <router-link class="btn btn-primary" style="font-size: medium" router-link to="/comenzi_livrate">Livrate
            </router-link>
        </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Comenzi_programate from "../liste/ComenziProgramate";

    export default {
        name: 'listnav',
        // components: {Comenzi_programate},
        // created() {
        //     // this.$store.dispatch('get_comenzi', 'byIdComanda')
        //     this.$store.dispatch('get_comenzi', 'byToday')
        //     // this.$store.dispatch('get_comenzi', 'byStareGata')
        // },
        // computed: {
        //     ...mapState({
        //         comenzi: 'comenzi'
        //     }),
        //     totalComenzi: function () {
        //         return this.comenzi.length;
        //     }
        // },
    }

</script>

<style>


</style>