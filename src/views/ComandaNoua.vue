<template>
    <div class="container" onload="location.reload()">

        <!--            style="text-align: left" @submit.prevent="submitValidation ">-->
        <!--            <input type="text"-->
        <!--                   name="nume"-->
        <!--                   v-model="nume"-->
        <!--                   required="true"-->
        <!--                   v-validate="'required'"-->
        <!--                   placeholder="nume">-->
        <!--            <span style="color: red;" v-show="errors.has('nume')">{{ errors.first('nume')}}</span>-->
        <button class="btn btn-primary dropdown-toggle" style="font-size: medium " @click="goToComenziAzi">Inapoi la Comenzi
        </button>
        <h2>Comanda Noua ( {{ totalComenzi}} ) {{user.nume}}</h2>

        <form v-if="!formIsSent"
              style="text-align: left" @submit.prevent="submitValidation ">
            <table class="col-sm-12" style="padding: 10px">
                <!--            <tr colspan="24" style="text-align:center"><h2>-->


                <tr style="padding: 10px">
                    <td>{{IdComanda}} Adresa livrare: <input
                            style="width: auto"
                            type="text"
                            v-model="adresaLivrare" disabled/></td>
                </tr>
                <tr style="padding: 10px">
                    <td>Adresa Ridicare: <input
                            style="width: auto"
                            type="text"
                            v-model="user.adresaLocatie" disabled/></td>
                </tr>
                <tr style="padding: 10px">
                    <td>
                        <input type="text"
                               name="CodClient"
                               v-model="user.nume"
                               required="true"
                               v-validate="'required|min:3'"
                               placeholder="Nu esti inregistrat!"
                               colspan="6" style="padding: 10px; text-align: left; width:auto" disabled/>
                        <span style="color: red;" v-show="errors.has('CodClient')">{{ errors.first('CodClient')}}</span>

                    </td>
                </tr>
                <!--            </h2></tr>-->
                <table class="col-sm-6" style="padding: 10px">
                    <tr>
                        <td><label>Strada</label></td>
                        <td >
                            <select
                                id="strada"
                                type="text"
                                class="form-control"
                                @change="setAddress"
                                v-model="adresa.strada">
                                <option v-for="item,index in straziCluj"
                                        :key="index">
                                    {{ item.idStrada }}
                                </option>
                        </select></td>
                    </tr>
                    <tr>
                        <td><label>Cartier</label></td>
                        <td>
                            <input type="text"
                                   v-model="adresa.cartier"
                                   placeholder="cartier" disabled>
                        </td>


                    </tr>
                    <tr>
                        <td><label>Zona</label></td>
                        <td>
                            <input type="text"
                                   v-model="adresa.zona"
                                   placeholder="zona" disabled>
                        </td>


                    </tr>
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
                    <tr>
                        <td><label>Detalii Comanda</label></td>
                        <td><input name="detalii comanda" type="text" v-model="comenzi.detaliiComanda "/>
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
                                   type="time" v-model="comenzi.oraLimita" disabled/>
                            <input v-else="comenzi.stareComanda === 'programata'"
                                type="time" v-model="comenzi.oraLimita"/></td>
                    </tr>
                    <td><label>Data Livrare</label></td>
                        <td><input v-if="comenzi.stareComanda === 'in lucru'"
                                   type="date" v-model="comenzi.dataComanda" disabled/> <input
                                v-else="comenzi.stareComanda === 'programata'"
                                type="date" v-model="comenzi.dataComanda"/></td>
                    </tr>


                    </td></tr>

                    </td></tr>
                </table>
            </table>

            <input v-if="user._id
             && (comenzi.plataCash >0 || comenzi.plataCard>0)"
                   class="btn btn-primary dropdown-toggle"  style="font-size: xx-large"
                   type="submit" value="Trimite Comanda" @click="submit,goToComenziAzi"/>

        </form>
<!--        <h1 v-else>Comanda lansata</h1>-->
    </div>

</template>

<script>
    // @ is an alias to /src
    import {mapState} from 'vuex'
    import moment from "moment";
    import Vue from 'vue';
    export default {
        name: 'ComandaNoua',
        created () {
            this.$store.dispatch('get_comenzi', 'byToday')
            this.$store.dispatch('get_straziCluj')
        },
        data () {
            return {
                idStrada: '',
                fromCartier: '',
                zona: '',
                _id: '',
                nume: '',
                CodClient: '',
                AdresaLocatie: '',
                adresa: {
                    strada: '',
                    sc: '',
                    ap: '',
                    et: '',
                    nr: '',
                    cod: '',
                    cartier: '',
                    zona:""
                },
                comenzi: {
                    idComanda: '',
                    dataComanda: ``,
                    numeClient: '',
                    adresaLivrare: '',
                    telefonDestinatar: '07',
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
                    detaliiComanda: '',
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
            const ora = (d.getHours() < 10 ? '0' : '') + d.getHours();
            const minute = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            const secunde = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
            const nr = +this.comenziData.length + 1;
            const cod = `${nr}-${month}${day}${ora}${minute}${secunde}`;
            const acum = ora + ":" + minute + ":" + secunde;
            const mtranzit = 90;
            const mt = ((d.getMinutes() + mtranzit) % 60 < 10 ? '0' : '') + (d.getMinutes() + mtranzit) % 60;
            const ht = ((d.getMinutes() + mtranzit) < 120 ? d.getHours() + 1 : d.getHours() + 2);
            const tranzit = ht + ":" + mt;
            this.adresa.cod = cod;
            this.comenzi.oraComanda = acum;
            this.comenzi.oraLimita = tranzit;
            this.comenzi.dataComanda = today;

            // const length = this.comenzi.length();
            // this.comenzi.tarifare = length;
            // const text = valueOf(adresaLivrare())
            // this.comenzi.adresaLivrare = text
            //this.comenzi.valoareComanda=total()

        },
        computed: {
            ...mapState({
                user: 'user',
                straziCluj: 'straziCluj',
                formIsSent: 'formIsSent',
                comenziData: 'comenzi',
                clienti: 'clienti',


            }),
            total() {
                // return   1+1
                return +this.comenzi.plataCash + +this.comenzi.plataCard
            },
            adresaLivrare() {
                return `Str: ${this.adresa.strada} ${this.adresa.nr}, Cluj-Napoca (sc:${this.adresa.sc}, et:${this.adresa.et}, ap:${this.adresa.ap})`
            },
            IdComanda() {
                return `${this.user._id}0${this.adresa.cod}/(${this.adresa.strada}-${this.adresa.nr})Z${this.adresa.zona}`
            },
            NumeClient() {
                return `${this.user.nume}`
            },
            AdresaRidicare() {
                return `${this.user.adresaLocatie}`
            },
            // setCartier: function () {
            //    const str  = ["Lunii", "Rasinari","Observator"];
            // const strIF = this.adresa.strada;
            //     forEach (str) {
            //         if (strIF == str[i]) { const cart= "Zorilor"};
            //     }
            //      return cart
            //
            // },
            totalComenzi: function () {
                const nrCRT = this.comenziData.length;
                return nrCRT
            }
        },
        methods: {
            setAddress () {
                this.straziCluj.forEach(obj => {
                    if (obj.idStrada === this.adresa.strada) {
                        this.adresa.cartier = obj.fromCartier
                        this.adresa.zona = obj.zona
                    }
                })
            },
            submitValidation() {
                this.$validator.validateAll()
                    .then(resp => {
                        console.log(resp)
                        if (resp) {
                            this.comenzi.emailClient = this.user.email;
                            this.comenzi.numeClient = this.user.nume;
                            this.comenzi.adresaRidicare = this.user.adresaLocatie;
                            this.comenzi.idComanda = this.IdComanda;
                            this.comenzi.adresaLivrare = this.adresaLivrare;
                            this.comenzi.valoareComanda = this.total;
                            this.$store.dispatch('create_comanda', this.comenzi);
                            this.$store.dispatch('get_comenziProgramate');
                            this.$store.dispatch('get_comenziAzi');
                            this.$store.dispatch('get_comenziInLucru');
                            this.$store.dispatch('get_comenziDisponibile');
                            this.$store.dispatch('get_comenziGata');
                            this.$store.dispatch('get_comenziRidicate');
                            this.$store.dispatch('get_comenziInLivrare');
                            this.$store.dispatch('get_comenziLivrate');
                            this.$store.dispatch('get_comenziNedecontate');
                            alert("Comanda a fost lansata!");

                            // aici pui codul ce doresti sa ruleze daca validarile sunt corecte
                        } else {
                            alert("Camp necesar!");
                            // aici pui cod pentru cazul in care vrei sa notifici ceva daca nu e validat corect
                        }
                    })
            },
            submit() {
                this.comenzi.idComanda = this.IdComanda;
                this.comenzi.adresaLivrare = this.adresaLivrare;
                this.comenzi.valoareComanda = this.total;
                this.$store.dispatch('create_comanda', this.comenzi);

                // this.$store.dispatch('create_comanda', this.adresa)
            },
            setStatus(status) {
                this.comenzi.stareComanda = status
            },
            goToComenziAzi(){
                this.$router.push('/comenzi_azi')
            }
        }
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
