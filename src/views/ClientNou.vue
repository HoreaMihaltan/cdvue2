<template>
    <div class="container">
        <h2>Adauga Client</h2>
        <table class="col-sm-12" style="padding: 10px" >
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/clienti">Inapoi la Clienti</router-link></tr>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->
            <tr  style="padding: 10px">
                <td><input colspan="6" style="padding: 10px; text-align: left; width: auto" type="text" v-model="clienti._id" placeholder="COD CLIENT" /></td></tr>
            <!--            </h2></tr>-->
            <table class="col-sm-6" style="padding: 10px" >

                <tr><td><label>Nume</label></td>
                    <td>  <input type="text"
                                 v-model="clienti.nume"   />
                    </td></tr>
                <tr><td><label>Adresa Locatie</label></td>
                    <td>  <input type="text"
                                 v-model="clienti.adresaLocatie"  />
                    </td></tr>
                <tr><td><label>Email</label></td>
                    <td>  <input type="email"
                                 v-model="clienti.email"  />
                    </td></tr>
                <!--            </tr>-->
                <tr><td><label>Telefon Locatie</label></td>
                    <td><input type="text" v-model="clienti.clientTelefon "/></td></tr>
                </td></tr>
                <tr><td><label>GPS Locatie</label></td>
                    <td><input type="text" v-model="clienti.clientLocatieGPS "/></td></tr>
                </td></tr>
                <tr><td><label>Tarif Baza</label></td>
                    <td><input type="number" v-model="clienti.clientTarifareBaza "/></td></tr>
                </td></tr>
                <tr><td><label>Tarif Zona 2</label></td>
                    <td><input type="number" v-model="clienti.clientTarifareZona2 "/></td></tr>
                </td></tr>
                <tr><td><label>Tarif Zona 3</label></td>
                    <td><input type="number" v-model="clienti.clientTarifareZona3 "/></td></tr>
                </td></tr>
                <tr><td><label>Curse Incluse</label></td>
                    <td><input type="number" v-model="clienti.clientCurseIncluse "/></td></tr>
                </td></tr>
                <tr><td><label>Profil</label></td>
                    <td><input type="text" v-model="clienti.Profil "/></td></tr>
                </td></tr>
                <tr><td><label>Tip Contract</label></td>
                    <td><select  type="text" v-model="clienti.clientTipContract">
                        <option value="Abonament" label="Abonament" />
                        <option value="Procent" label="Procent" />
                        <option value="Standard" label="Standard" />
                    </select></td></tr>
                </tr>
            </table>
            <!--            coloana2-->
            <table class="col-sm-6" style="padding: 10px" >
                <tr><td><label>Nume firma</label></td>
                    <td><input type="text" v-model="clienti.clientNumeFirma "/></td></tr>
                </td></tr>
                <tr><td><label>CUI</label></td>
                    <td><input type="text" v-model="clienti.clientCUI"/>
                    </td></tr>
                <tr><td><label>NIRC</label></td>
                    <td><input type="text" v-model="clienti.clientNIRC "/></td></tr>
                </td></tr>
                <tr><td><label>Adresa Firma</label></td>
                    <td><input type="text" v-model="clienti.clientAdresaFirma "/></td></tr>
                </td></tr>
                <tr><td><label>Telefon Firma</label></td>
                    <td><input type="text" v-model="clienti.clientTelefonFirma "/></td></tr>
                </td></tr>
                <tr><td><label>Email Firma</label></td>
                    <td><input type="text" v-model="clienti.clientEmailFirma "/></td></tr>
                </td></tr>
                <tr><td><label>Reprezentant Firma</label></td>
                    <td><input type="text" v-model="clienti.clientReprezentantFirma "/></td></tr>
                </td></tr>
                <tr><td><label>IBAN Firma</label></td>
                    <td><input type="text" v-model="clienti.clientIBANFirma "/></td></tr>
                </td></tr>
                <tr><td><label>Redirect URL</label></td>
                    <td><input type="url" v-model="clienti.clientSiteRedirect "/></td></tr>
                </td></tr>
                <tr><td><label>Sigla URL</label></td>
                    <td><input type="url" v-model="clienti.clientSigla "/></td></tr>
                </td></tr>

                <tr><td><label style="width: 100%" >Activ</label></td>
                    <td><input style="width: auto" type="radio" name="Activ" v-model="clienti.clientActiv" value="true" checked/> Da <input style="width: auto" type="radio" name="Decontat" v-model="clienti.clientActiv" value="false" checked/> Nu </td></tr>


                </td></tr>
            </table>
        </table>
        <form v-if="!formIsSent"
              style="text-align: left" @submit.prevent="submit">
<!--            <div v-for="(item,key) in clienti">-->
<!--                <table>-->
<!--                    <td style="width: 100px"><label :for="key">{{ key }}</label></td>-->
<!--                    <td><input :id="key" v-model="clienti[key]" type="text" :placeholder="key"/></td>-->
<!--                </table>-->
<!--            </div>-->

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="Creeaza">
        </form>

        <p v-else>Client Creat</p>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import { mapState } from 'vuex'


    export default {
        name: 'clientnou',
        created () {
            this.$store.dispatch('get_clienti')
        },


        data () {
            return {
                clienti: {
                    _id: '',
                    nume: '',
                    dataAdaugare: '',
                    numeLocatie: '',
                    idClient: '',
                    clientEmail:  '',
                    clientTelefon:  '',
                    adresaLocatie:  '',
                    clientLocatieGPS:  '',
                    clientNumeFirma: '',
                    clientCUI: '',
                    clientNIRC: '',
                    clientAdresaFirma: '',
                    clientTelefonFirma: '',
                    clientEmailFirma: '',
                    clientReprezentantFirma: '',
                    clientIBANFirma: '',
                    clientTipContract: 'Abonament',
                    clientCurseIncluse: '100',
                    clientTarifareBaza: '16',
                    clientTarifareZona2: '29',
                    clientTarifareZona3: '49',
                    clientSigla: '',
                    clientProfil: '',
                    clientSiteRedirect: '',
                    clientActiv: 'true'

                }
            }
        },

        "mounted": function () {
                const d = new Date()
                // const t = new getTime()
                const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
                const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
                const today = `${d.getFullYear()}-${month}-${day}`
                this.clienti.dataAdaugare = today

        },

        computed: {
            ...mapState({
                formIsSent: 'formIsSent'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('create_client', this.clienti)
            }
        },
        components: {
            HelloWorld
        }
    }
</script>

<style lang="less">
    .home {
        form {
            margin: auto;
            width:25%;
        }
    }
</style>

