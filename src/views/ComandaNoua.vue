<template>
    <div class="container">
        <table class="col-sm-12" style="padding: 10px" >
<!--            <tr colspan="24" style="text-align:center"><h2>-->
            <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comenzi">Inapoi la Comenzi</router-link>
           <tr  style="padding: 10px">
               <td><input colspan="6" style="padding: 10px; text-align: left" type="text" v-model="IdComanda  " /></td></tr>
            <tr  style="padding: 10px">
               <td>Id Client<input v-validate="'required'" colspan="6" style="padding: 10px; text-align: left; width:20%" type="text" v-model="comenzi.numeClient" required  /></td></tr>
            <!--            </h2></tr>-->
        <table class="col-sm-6" style="padding: 10px" >
            <tr><td><label>Strada</label></td>
                <td><select id="strada"
                            type="text"
                            v-model="adresa.strada">
                    <option value="Rasinari" label="Rasinari" />
                    <option value="Lunii" label="Lunii" />
                    <option value="Eroilor" label="Eroilor" />
                    <option value="Florilor" label="Florilor" />
                    <option value="Motilor" label="Motilor"  />
                        <option value="Floresti" label="Floresti"  />
                </select></td></tr>
            <tr><td><label>Cartier</label></td>
                <td><select id="cartier"
                            type="text"
                            v-model="comenzi.cartier">
                    <option value="Apahida" label="Apahida" />
                    <option value="Gheorgheni" label="Gheorgheni" />
                    <option value="Gruia" label="Gruia" />
                    <option value="Zorilor" label="Zorilor" />
                    <option value="Manastur" label="Manastur"  />
                    <option value="Centru" label="Centru"  />
                </select></td></tr>
            <tr>  <td><label>
                Nr</label><td>
                    <input type="text"
                           v-model="adresa.nr"></td></tr>
            <tr>  <td><label>
                Sc</label><td>
                <input type="text"
                       v-model="adresa.sc"></td></tr>
            <tr>    <td><label>
                Et</label><td>
                <input type="text" v-model="adresa.et"></td></tr>
            <tr>    <td><label>
                Ap</label><td>
                <input type="text"
                       v-model="adresa.ap"></td></tr>
            <tr><td><label>Adresa Livrare</label></td>

                  <td>  <input type="text"
                           v-model="adresaLivrare"  />
                    </td></tr>
<!--            </tr>-->
            <tr><td><label>Telefon</label></td>
            <td><input type="text" v-model="comenzi.telefonDestinatar "/></td></tr>
            </td></tr>
            </tr>
        </table>
<!--            coloana2-->
            <table class="col-sm-6" style="padding: 10px" >
                <tr><td><label>Plata cash</label></td>
                    <td><input type="text" v-model="comenzi.plataCash"/></td></tr>
                <tr><td><label>Plata card</label></td>
                    <td><input type="text" v-model="comenzi.plataCard"/></td></tr>
                <tr><td><label>Valoare comanda</label></td>
                    <td><input type="text" :value="total" disabled/></td></tr>
                <tr><td><label >Decontat</label></td>
                    <td><input style="width: auto" type="radio" name="Decontat" v-model="comenzi.decontat" value="true" checked/> Da <input style="width: auto" type="radio" name="Decontat" v-model="comenzi.decontat" value="false" checked/> Nu </td></tr>
                <tr><td><label>Livrator</label></td>
                    <td><input type="text" v-model="comenzi.livrator"/></td></tr>
                <tr><td><label>Ora Limita</label></td>
                    <td><input type="time" v-model="comenzi.oraLimita"/></td></tr>


                <tr><td><label>Stare Comanda</label></td>
                    <td><select  type="text" v-model="comenzi.stareComanda">
                        <option value="programata" label="Programata" />
                        <option value="in lucru" label="In lucru" />
                        <option value="gata de livrare" label="Gata de livrare" />
                    </select></td></tr>
                <tr><td><label>Detalii Comanda</label></td>
                    <td><input  name="detalii comanda" required="true" type="text" v-model="comenzi.detaliiComanda "/></td></tr>
                </td></tr>

                    </td></tr>
            </table>
        </table>

        <button @click="setStatus('in lucru')">In lucru</button>


        <form v-if="!formIsSent"
              style="text-align: left" @submit.prevent="submit" >
<!--            de aici-->
<!--            <div v-for="(item,key) in comenzi">-->
<!--                <table class="col-sm-6"  >-->
<!--                    <td  style="text-align: left; width:150px "><label :for="key">{{ key }}</label></td>-->
<!--                    <td style="text-align: left; width:auto">-->
<!--                        <input :id="key" :placeholder="key" :type=-->
<!--                                "key === 'idComanda' ? 'text'-->
<!--                               : key === 'decontat' ? 'boolean'-->
<!--                               : 'text'"-->
<!--                               v-model="comenzi[key]"-->

<!--                               /></td>-->
<!--                </table>-->
<!--            </div>-->
<!--            pana aici-->


            <br>
            <h3><router-link to="/comenzi">Cancel</router-link></h3> <br> <br>

            <input class="btn btn-primary dropdown-toggle" formaction=":to/comenzi" style="font-size: xx-large"
                   type="submit" value="Trimite"><router-link to="/comenzi"></router-link></form>


        <h1 v-else>Comanda a fost lansata</h1>
    </div>

</template>

<script>
    // @ is an alias to /src
    import {mapState} from 'vuex'
    import moment from "moment";
    import Vue from 'vue';

    export default {
        name: 'ComandaNoua',
        data: function () {
            return {
                adresa: {
                    strada: '',
                    sc: '',
                    ap: '',
                    et: '',
                    nr: '',
                    cod:''
                },
                comenzi: {
                    idComanda: '',
                    dataComanda: ``,
                    numeClient: '',
                    adresaLivrare: '',
                    telefonDestinatar: '',
                    cartier:'',
                    livrator: 'fara livrator',
                    plataCash: '',
                    plataCard: '',
                    oraComanda: '',
                    oraLimita: '',
                    stareComanda: 'In lucru',
                    decontat: 'false',
                    oraLivrare: '',
                    valoareComanda: '',
                    tarifare: '16',
                    detaliiComanda: ''
                }
            }
        },
        mounted: function () {
            const d = new Date()
            // const t = new getTime()
            const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
            const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
            const today = `${d.getFullYear()}-${month}-${day}`
            this.comenzi.dataComanda = today
            const ora = (d.getHours() < 10 ? '0' : '') + d.getHours()
            const minute = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
            const secunde = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds()
            const cod = ora + minute + secunde
            const acum = ora + ":" + minute + ":" + secunde
            const mtranzit = 90
            const mt = ((d.getMinutes() + mtranzit) % 60 < 10 ? '0' : '') + (d.getMinutes() + mtranzit) % 60
            const ht = ((d.getMinutes() + mtranzit) < 120 ? d.getHours() + 1 : d.getHours() + 2)
            const tranzit = ht + ":" + mt
            this.adresa.cod = cod
            this.comenzi.oraComanda = acum
            this.comenzi.oraLimita = tranzit
            // const text = valueOf(adresaLivrare())
            // this.comenzi.adresaLivrare = text
            //this.comenzi.valoareComanda=total()

        },
        computed: {
            ...mapState({
                formIsSent: 'formIsSent'
            }),
            total () {
              // return   1+1
                return +this.comenzi.plataCash + +this.comenzi.plataCard
            },
            adresaLivrare () {
                return `Str: ${this.adresa.strada} ${this.adresa.nr}, (sc:${this.adresa.sc}, et:${this.adresa.et}, ap:${this.adresa.ap}) Cluj-Napoca`
            },
            IdComanda () {
                return `CD-${this.adresa.cod}/${this.comenzi.numeClient}(${this.adresa.strada}-${this.adresa.nr})`
            }
        },

        methods: {
            submit () {
                this.comenzi.idComanda = this.IdComanda
                this.comenzi.adresaLivrare = this.adresaLivrare
                this.comenzi.valoareComanda = this.total
                this.$store.dispatch('create_comanda', this.comenzi)
                // this.$store.dispatch('create_comanda', this.adresa)
            },
            setStatus (status) {
                this.comenzi.stareComanda = status
            }
        },
     }

</script>

<style >
    /*[class*="col-"] {*/
    /*    float: center;*/
    /*    inline-size: 10px;*/
    /*    padding: 10px;*/
    /*    border: 0px solid blue;*/
    /*}*/
    /*.col-sm-2 {width: 50%; align: center}*/
    /*.col-sm-12 {width: 100%; align: center}*/
</style>
