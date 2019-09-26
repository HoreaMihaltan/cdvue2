<template>

    <div class="home">
        <h1>Client</h1>        <h2>Editeaza Client</h2>
        <table class="col-sm-12" style="padding: 10px" >
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/clienti">Inapoi la clienti</router-link></tr>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->
            <tr  style="padding: 10px">
                <td><input colspan="6" style="padding: 10px; text-align: center" type="text" v-model="clienti.idClient" placeholder="COD CLIENT" disabled /></td></tr>
            <!--            </h2></tr>-->
            <table class="col-sm-6" style="padding: 10px" >

                <tr><td><label>Nume Locatie</label></td>
                    <td>  <input type="text"
                                 v-model="clienti.numeLocatie"   />
                    </td></tr>
                <tr><td><label>Adresa Locatie</label></td>
                    <td>  <input type="text"
                                 v-model="clienti.adresaLocatie"  />
                    </td></tr>
                <tr><td><label>Email</label></td>
                    <td>  <input type="email"
                                 v-model="clienti.clientEmail"  />
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

        <form   v-if="!updated" @submit.prevent="submit">
<!--            <div v-for="(item, key) in clienti">-->
<!--                <table>-->
<!--                    <td style="width: 100px">  <label :for="key">{{ key }}</label> </td>-->
<!--                    <td> <input  type="text" v-model="clienti[key]"></td>-->
<!--                </table>-->
<!--            </div>-->

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="OK"><br>
            <!--            <button onclick="delete(this)">-->

        </form>

        <p v-else>Update OK!</p>
    </div>
</template>

<script>




    import { mapState } from 'vuex'
    export default {
        name: 'clienti',
        data () {
            return {
            }
        },
        created () {
            this.$store.dispatch('get_client', this.$router.currentRoute.params.id)
        },
        computed: {
            ...mapState({
                clienti: 'clienti',
                updated: 'updated'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('update_client', this.$router.currentRoute.params.id)
            }
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