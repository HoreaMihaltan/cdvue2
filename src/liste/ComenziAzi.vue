<template xmlns="http://www.w3.org/1999/html">

    <div class="container" style="padding: 10px">            /*onclick="location.reload()"*/

<!--    <h2>  <input type="text" v-model="aziRef">text</input></h2>-->
        <div v-if="user._id ==='Horea'"><h2>Comenzi Azi: {{aziRef}} ( {{ totalComenziAdmin}} )</h2>
        </div>
        <div v-if="user._id !=='Horea'"><h2>Comenzi Azi: {{aziRef}} ({{ totalComenziUser}})</h2>
        </div>

        <div class="col-sm-12" style="padding: 10px">
            <tr>
                <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link
                             to="/comandanoua">Adauga Comanda
                </router-link>
            </tr>
            <tr>
                <th style="text-align: center">IdComanda</th>
                <th style="text-align: center">Adresa Livrare</th>
                <th style="text-align: center">Adresa ridicare</th>
                <th style="text-align: center">Livrator</th>
                <th style="text-align: center">Ora Comanda</th>
                <th style="text-align: center">Ora Limita</th>
                <th style="text-align: center">Stare Comanda</th>
                <th style="text-align: center">Decontat</th>
                <th style="text-align: center">Ora Livrare</th>
            </tr>

            <tr  v-if="user._id !=='Horea' && comenzi.value !== undefined && comenzi.value.numeClient===user.nume && comenzi.value.dataComanda===aziRef" v-for="(comenzi,index) in comenzi" :key="index">
                <!--                      <tr v-for="comenzi in comenzi">-->
                <td>
                    <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%"
                                 :to="'/comanda/' + comenzi.id">
                        {{ comenzi.value.idComanda }}
                    </router-link>
                </td>
                <td >
                    <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium"
                                 :to="'/modifica_adresa_comanda/' + comenzi.id">
                        {{ comenzi.value.adresaLivrare }}
                    </router-link>
                </td>
                <td style="width: auto"> {{ comenzi.value.adresaRidicare }}</td>
                <td > {{ comenzi.value.livrator }}</router-link></td>
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
                <td> {{ comenzi.value.oraLivrare }}</td>
            </tr>


            <tr v-if="user._id ==='Horea' && comenzi.value.dataComanda===aziRef" v-for="(comenzi,index) in comenzi" :key="index">
                <!--                      <tr v-for="comenzi in comenzi">-->
                <td>
                    <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%"
                                 :to="'/comanda/' + comenzi.id">
                        {{ comenzi.value.idComanda }}
                    </router-link>
                </td>
                <td >
                    <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium"
                                 :to="'/modifica_adresa_comanda/' + comenzi.id">
                        {{ comenzi.value.adresaLivrare }}
                    </router-link>
                </td>
                <td style="width: auto"> {{ comenzi.value.adresaRidicare }}</td>
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
                <td> {{ comenzi.value.oraLivrare }}</td>
            </tr>
        </div>

    </div>

</template>

<script>
        import {mapState} from 'vuex'

        import Listnav from "../components/ListNav";

        setTimeout(function(){ location.reload(); }, 30000);
        export default {
        name: 'comenzi_azi',
        components: {Listnav},
        created () {

            // this.$store.dispatch('get_comenzi', 'byIdComanda')
            this.$store.dispatch('get_comenzi', 'byToday');
            this.$store.dispatch('get_comenzi_byClient');
            this.$store.dispatch('get_comenziAzi_byClient');
            this.$store.dispatch('get_comenziAzi_byClientLuna');
            this.$store.dispatch('get_comenziProgramate');
            this.$store.dispatch('get_comenziAzi');
            this.$store.dispatch('get_comenziInLucru');
            this.$store.dispatch('get_comenziDisponibile');
            this.$store.dispatch('get_comenziGata');
            this.$store.dispatch('get_comenziRidicate');
            this.$store.dispatch('get_comenziInLivrare');
            this.$store.dispatch('get_comenziLivrate');
            this.$store.dispatch('get_comenziNedecontate');


            // this.$store.dispatch('get_comenzi', 'byStareGata')
        },

         methods:{
             // refresh(){
             //     this.$store.dispatch('get_comenzi', 'byToday');
             //     this.$store.dispatch('get_comenzi_byClient');
             // },
         },

        mounted () {
            //const d = new Date()
            // const t = new getTime()
            //const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
            //const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
            //const today = `${d.getFullYear()}-${month}-${day}`;
            //const year = d.getFullYear();
            //this.azi = today;
            //const ora = (d.getHours() < 10 ? '0' : '') + d.getHours();
            //const minute = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            //const secunde = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
            //const nr = +this.comenziData.length + 1;
            //const cod = `${nr}-${month}${day}${ora}${minute}${secunde}`;
            //const acum = ora + ":" + minute + ":" + secunde;
            //const mtranzit = 90;
            //const mt = ((d.getMinutes() + mtranzit) % 60 < 10 ? '0' : '') + (d.getMinutes() + mtranzit) % 60;
            //const ht = ((d.getMinutes() + mtranzit) < 120 ? d.getHours() + 1 : d.getHours() + 2);
            //const tranzit = ht + ":" + mt;
            //this.adresa.cod = cod;
            //this.azi = today;
            //this.comenzi.oraLimita = tranzit
        },
        computed: {
            ...mapState({
                user: 'user',
                comenzi: 'comenzi',
                comenziAzi_byClient: 'comenziAzi_byClient',
                comenziAzi_byClientLuna: 'comenziAzi_byClientLuna'
            }),

            totalComenziAdmin () {
                return this.comenzi.length
            },

            totalComenziUser () {

                return   this.comenziAzi_byClientLuna.length
            },
            aziRef () {
                const d = new Date()
                const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
                const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
                const today = `${d.getFullYear()}-${month}-${day}`;
                return today;
            },


        },
    }

</script>

<style>
</style>