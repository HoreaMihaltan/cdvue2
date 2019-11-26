<template>

    <div class="container" style="padding: 10px">

        <div v-if="user._id !=='Horea'"><h2>Comenzi Nedecontate:
            ({{ totalNedecontateUser}})
            {{totalValoareNedecontate}}
        </h2>
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
            <tr v-for="(nedecontate_byClient,index) in nedecontate_byClient" :key="index">
                <!--                      <tr v-for="comenzi in comenzi">-->
                <td > <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/comanda/' + nedecontate_byClient.id">
                    {{ nedecontate_byClient.value.idComanda }}
                </router-link></td>
                <td v-if="user._id !=='Horea'"> {{ nedecontate_byClient.value.adresaLivrare }} </td>
                <td v-if="user._id !=='Horea'"> {{ nedecontate_byClient.value.oraComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ nedecontate_byClient.value.oraLimita }} </td>
                <td v-if="user._id !=='Horea'"> {{ nedecontate_byClient.value.stareComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ nedecontate_byClient.value.decontat }} </td>
                <td v-if="user._id !=='Horea'"> {{ nedecontate_byClient.value.plataCash }} </td>
                <td v-if="user._id !=='Horea'"> {{ nedecontate_byClient.value.valoareComanda }} </td>
                <td v-if="user._id !=='Horea'"> {{ nedecontate_byClient.value.tarifare }} </td>
            </tr>

        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Listnav from "../components/ListNav";
    export default {
        name: 'comenzi_nedecontate_user',
        //components: {Listnav},
        created () {

            this.$store.dispatch('get_nedecontate_byUser')

            // this.$store.dispatch('get_comenziProgramate');
            // this.$store.dispatch('get_comenziAzi');
            // this.$store.dispatch('get_comenziInLucru');
            // this.$store.dispatch('get_comenziDisponibile');
            // this.$store.dispatch('get_comenziGata');
            // this.$store.dispatch('get_gata_byClient');
            // this.$store.dispatch('get_ridicate_byClient');
            // this.$store.dispatch('get_inLivrare_byClient');
            // this.$store.dispatch('get_livrate_byClient');
             this.$store.dispatch('get_nedecontate_byClient');
            // this.$store.dispatch('get_comenziRidicate');
            // this.$store.dispatch('get_comenziInLivrare');
            // this.$store.dispatch('get_comenziLivrate');
            // this.$store.dispatch('get_comenziNedecontate');
            // console.log(this.nedecontate_byClient.value.plataCash);

        },
        computed: {
            ...mapState({
                modificaStare: 'modificaStare',
                user: 'user',
                // comenzi: 'comenzi',
                nedecontate_byClient: 'nedecontate_byClient',
                //nedecontate_byClient.data.rows: 'nedecontate_byClient',
            }),
            // totalValoareNedecontate () {
            //     this.nedecontate_byClient.plataCash.forEach(obj => {
            //         totalValoare = 0;
            //         totalValoare += obj.plataCash;
            //         return totalValoare;
            //     })
            //
            // },
            // totalValoareNedecontate () {
            //     this.nedecontate_byClient.plataCash.forEach(){
            //         totalValoare += this.nedecontate_byClient.value.plataCash;
            //     }
             //   return totalValoare;
                // let nedecontateTotalValoare = 0;
                // let i= nedecontate_byClient.value.plataCash[0];
                // nedecontateTotalValoare += i ;
                //nedecontateTotalValoare = this.nedecontate_byClient.plataCash[0];
                //nedecontateTotalValoare = this.nedecontate_byClient.plataCash[i];
                //this.nedecontate_byClient.plataCash.forEach(sum);
                //function sum() {
                    // const i=0;
                    // nedecontateTotalValoare = this.nedecontate_byClient.plataCash[i];
                    //i++;
                //}
                //return nedecontateTotalValoare;
            //},
                // var sum = 0;
                // var numbers = [65, 44, 12, 4];
                // numbers.forEach(myFunction);
                //
                // function myFunction(item) {
                //     sum += item;
                //     document.getElementById("demo").innerHTML = sum;
                // }


            totalNedecontateUser: function () {
                return this.nedecontate_byClient.length;
            }
        }
    }

    // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>

</style>