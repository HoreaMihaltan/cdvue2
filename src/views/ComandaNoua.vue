<template>
    <div class="container">

<!--            style="text-align: left" @submit.prevent="submitValidation ">-->
<!--            <input type="text"-->
<!--                   name="nume"-->
<!--                   v-model="nume"-->
<!--                   required="true"-->
<!--                   v-validate="'required'"-->
<!--                   placeholder="nume">-->
<!--            <span style="color: red;" v-show="errors.has('nume')">{{ errors.first('nume')}}</span>-->
        <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link
                     to="/comenzi_azi">Inapoi la Comenzi
        </router-link>
        <h2>Comanda Noua ( {{ totalComenzi}} )</h2>

        <form v-if="!formIsSent"
              style="text-align: left" @submit.prevent="submitValidation ">
        <table class="col-sm-12" style="padding: 10px">
            <!--            <tr colspan="24" style="text-align:center"><h2>-->



            <tr style="padding: 10px">
                <td><input colspan="6" style="padding: 10px; text-align: left" type="text" v-model="IdComanda"
                           disabled/></td>
            </tr>
            <tr style="padding: 10px">
                 <td>
                           <input type="text"
                           name="CodClient"
                           v-model="comenzi.numeClient"
                           required="true"
                           v-validate="'required|min:3'"
                           placeholder="Nu esti inregistrat!"
                           colspan="6" style="padding: 10px; text-align: left; width:20%"/>
                    <span style="color: red;" v-show="errors.has('CodClient')">{{ errors.first('CodClient')}}</span>

                </td>
            </tr>
            <!--            </h2></tr>-->
            <table class="col-sm-6" style="padding: 10px">
                <tr>
                    <td><label>Strada</label></td>
                    <td><select
                            v-if="comenzi.numeClient"
                            id="strada"
                            type="text"
                            v-model="adresa.strada">
                        <option value="Rasinari" label="Rasinari"/>
                        <option value="Lunii" label="Lunii"/>
                        <option value="Eroilor" label="Eroilor"/>
                        <option value="Florilor" label="Florilor"/>
                        <option value="Motilor" label="Motilor"/>
                        <option value="Floresti" label="Floresti"/>
                    </select></td>
                </tr>
                <tr>
                    <td><label>Cartier</label></td>
                    <td><select
                            id="cartier"
                            name="Cartier"
                            v-if="adresa.strada"
                            required="true"
                            v-validate="'required'"
                            placeholder="Alege cartier"
                            v-model="comenzi.cartier">
                        <span style="color: red;" v-show="errors.has('Cartier')">{{ errors.first('Cartier')}}</span>

                        <option value="Apahida" label="Apahida"/>
                        <option value="Gheorgheni" label="Gheorgheni"/>
                        <option value="Gruia" label="Gruia"/>
                        <option value="Zorilor" label="Zorilor"/>
                        <option value="Manastur" label="Manastur"/>
                        <option value="Centru" label="Centru"/>
                    </select></td>
                </tr>
                <tr>
                    <td><label>
                        Nr</label>
                    <td>
                        <input
                                v-if="adresa.strada"
                                type="text"
                                v-model="adresa.nr"></td>
                </tr>
                <tr>
                    <td><label>
                        Sc</label>
                    <td>
                        <input
                                v-if="adresa.nr"
                                type="text"
                                v-model="adresa.sc"></td>
                </tr>
                <tr>
                    <td><label>
                        Et</label>
                    <td>
                        <input
                                v-if="adresa.nr"
                                type="text" v-model="adresa.et"></td>
                </tr>
                <tr>
                    <td><label>
                        Ap</label>
                    <td>
                        <input
                                v-if="adresa.nr"
                                type="text"
                                v-model="adresa.ap"></td>
                </tr>
                <tr>
                    <td><label>Adresa Livrare</label></td>

                    <td><input
                            type="text"
                            v-model="adresaLivrare" disabled/>

                    </td>
                </tr>
                <!--            </tr>-->
                <tr>
                    <td><label>Telefon</label></td>
                    <td><input type="text"
                            name="TelefonDestinatar"
                            v-if="adresa.nr"
                            required="true"
                            v-validate="'required|min:10'"
                            placeholder="Telefon destinatar"
                            v-model="comenzi.telefonDestinatar "/>
                        <span style="color: red;" v-show="errors.has('TelefonDestinatar')">{{ errors.first('TelefonDestinatar')}}</span>
                    </td>
                </tr>
                </td></tr>
                </tr>
            </table>
            <!--            coloana2-->
            <table class="col-sm-6" style="padding: 10px">
                <tr>
                    <td><label>Plata cash</label></td>
                    <td><input
                            v-if="comenzi.telefonDestinatar"
                            type="text" v-model="comenzi.plataCash"/></td>
                </tr>
                <tr>
                    <td><label>Plata card</label></td>
                    <td><input
                            v-if="comenzi.plataCash"
                            type="text" v-model="comenzi.plataCard"/></td>
                </tr>
                <tr>
                    <td><label>Valoare comanda</label></td>
                    <td><input type="text" :value="total" disabled/></td>
                </tr>
                <tr>
                    <td><label>Decontat</label></td>
                    <td><input
                            v-if="comenzi.plataCash"
                            style="width: auto" type="radio" name="Decontat" v-model="comenzi.decontat" value="true"
                            checked/> Da <input style="width: auto" type="radio" name="Decontat"
                                                v-model="comenzi.decontat" value="false" checked/> Nu
                    </td>
                </tr>
                <tr>
                    <td><label>Livrator</label></td>
                    <td><input type="text" v-model="comenzi.livrator" disabled/></td>
                </tr>
                <tr>
                    <td><label>Stare Comanda</label></td>
                    <td><select type="text" v-model="comenzi.stareComanda">
                        <option value="in lucru" label="In lucru"/>
                        <option value="programata" label="Programata"/>

                    </select></td>
                </tr>
                <tr>
                    <td><label>Ora Limita</label></td>
                    <td><input v-if="comenzi.stareComanda === 'in lucru'"
                               type="time" v-model="comenzi.oraLimita" disabled/> <input
                            v-else="comenzi.stareComanda === 'programata'"
                            type="time" v-model="comenzi.oraLimita"/></td>
                </tr>

                <tr>
                    <td><label>Detalii Comanda</label></td>
                    <td><input name="detalii comanda"  type="text" v-model="comenzi.detaliiComanda "/>
                    </td>
                </tr>
                </td></tr>

                </td></tr>
            </table>
        </table>

        <!--        <button @click="setStatus('in lucru')">In lucru</button>-->


<!--        <form v-if="!formIsSent"-->
<!--              style="text-align: left" @submit.prevent="submit, submitValidation ">-->
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

            <input v-if="comenzi.numeClient && comenzi.cartier && (comenzi.plataCash >0 || comenzi.plataCard>0)"
                   class="btn btn-primary dropdown-toggle" formaction=":to/comenzi" style="font-size: xx-large"
                   type="submit" value="Trimite Comanda"/>

            </form>
        <h1 v-else>Comanda a fost lansata</h1>
    </div>

</template>

<script>
    // @ is an alias to /src
    import {mapState} from 'vuex'
    import moment from "moment";
    import Vue from 'vue';
    import Comenzi_azi from "../liste/ComenziAzi";

    export default {
        name: 'ComandaNoua',
        created() {
            this.$store.dispatch('get_comenzi', 'byIdComanda')
            //this.$store.dispatch('get_comenzi', 'byToday')
            // this.$store.dispatch('get_comenzi', 'byStareGata')
        },
        data() {
            return {
                nume: '',
                CodClient:'',
                adresa: {
                    strada: '',
                    sc: '',
                    ap: '',
                    et: '',
                    nr: '',
                    cod: ''
                },
                // getTotalLength:{
                //   lengthComenzi: [get_comenzi, byIdComanda]
                // },
                comenzi: {

                    idComanda: '',
                    dataComanda: ``,
                    numeClient: '',
                    adresaLivrare: '',
                    telefonDestinatar: '',
                    cartier: '',
                    livrator: 'fara livrator',
                    plataCash: '',
                    plataCard: '',
                    oraComanda: '',
                    oraLimita: '',
                    stareComanda: 'in lucru',
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
            const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
            const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
            const today = `${d.getFullYear()}-${month}-${day}`;
            const year = d.getFullYear();
            this.comenzi.dataComanda = today;
            const ora = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minute = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const secunde = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
            const cod = `${d.getFullYear()}${month}${day}${ora}${minute}${secunde}`;
            const acum = ora + ":" + minute + ":" + secunde;
            const mtranzit = 90;
            const mt = ((d.getMinutes() + mtranzit) % 60 < 10 ? '0' : '') + (d.getMinutes() + mtranzit) % 60;
            const ht = ((d.getMinutes() + mtranzit) < 120 ? d.getHours() + 1 : d.getHours() + 2);
            const tranzit = ht + ":" + mt;
            this.adresa.cod = cod;
            this.comenzi.oraComanda = acum;
            this.comenzi.oraLimita = tranzit
            // const length = this.comenzi.length();
            // this.comenzi.tarifare = length;
            // const text = valueOf(adresaLivrare())
            // this.comenzi.adresaLivrare = text
            //this.comenzi.valoareComanda=total()

        },
        computed: {
            ...mapState({
                formIsSent: 'formIsSent',
                // comenziData: 'comenzi'
                comenziData: 'comenzi'
            }),
            total() {
                // return   1+1
                return +this.comenzi.plataCash + +this.comenzi.plataCard
            },
            adresaLivrare() {
                return `Str: ${this.adresa.strada} ${this.adresa.nr}, Cluj-Napoca (sc:${this.adresa.sc}, et:${this.adresa.et}, ap:${this.adresa.ap})`
            },
            IdComanda() {
                return `${this.comenzi.numeClient}/CD-${this.adresa.cod}/(${this.adresa.strada}-${this.adresa.nr})`
            },
            refresh() {
                return
            },
            totalComenzi: function () {
                return this.comenzi.length;
            }
        },

        methods: {
            submitValidation() {
                this.$validator.validateAll()
                    .then(resp => {
                        console.log(resp)
                        if (resp) {
                            this.comenzi.idComanda = this.IdComanda
                            this.comenzi.adresaLivrare = this.adresaLivrare
                            this.comenzi.valoareComanda = this.total
                            this.$store.dispatch('create_comanda', this.comenzi)
                            alert("Comanda a fost lansata!");
                            // aici pui codul ce doresti sa ruleze daca validarile sunt corecte
                        } else {
                                alert("Camp necesar!");
                            // aici pui cod pentru cazul in care vrei sa notifici ceva daca nu e validat corect
                        }
                    })
            },
            submit() {
                this.comenzi.idComanda = this.IdComanda
                this.comenzi.adresaLivrare = this.adresaLivrare
                this.comenzi.valoareComanda = this.total
                this.$store.dispatch('create_comanda', this.comenzi)
                // this.$store.dispatch('create_comanda', this.adresa)
            },
            setStatus(status) {
                this.comenzi.stareComanda = status
            }
        },
    }

</script>

<style>
    /*[class*="col-"] {*/
    /*    float: center;*/
    /*    inline-size: 10px;*/
    /*    padding: 10px;*/
    /*    border: 0px solid blue;*/
    /*}*/
    /*.col-sm-2 {width: 50%; align: center}*/
    /*.col-sm-12 {width: 100%; align: center}*/
</style>
