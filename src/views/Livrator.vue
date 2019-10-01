<template>

    <div class="home">
        <h1>Client</h1>        <h2>Editeaza Livrator</h2>
        <table class="col-sm-12" style="padding: 10px" >
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/livratori">Inapoi la Livratori</router-link></tr>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->
            <tr  style="padding: 10px">
                <td><input colspan="6" style="padding: 10px; text-align: center" type="text" v-model="livratori.numeLivrator" placeholder="NUME LIVRATOR" disabled /></td></tr>
            <!--            </h2></tr>-->
            <table class="col-sm-6" style="padding: 10px" >

                <tr><td><label>Email</label></td>
                    <td>  <input type="email"
                                 v-model="livratori.livratorEmail"  />
                    </td></tr>
                <!--            </tr>-->
                <tr><td><label>Telefon Lirator</label></td>
                    <td><input type="text" v-model="livratori.livratorTelefon "/></td></tr>
                </td></tr>
                <tr><td><label>Nume firma</label></td>
                    <td><input type="text" v-model="livratori.livratorNumeFirma "/></td></tr>
                </td></tr>
                <tr><td><label>CUI</label></td>
                    <td><input type="text" v-model="livratori.livratorCUI"/>
                    </td></tr>
                <tr><td><label>NIRC</label></td>
                    <td><input type="text" v-model="livratori.livratorNIRC "/></td></tr>
                </td></tr>

                </tr>
            </table>
            <!--            coloana2-->
            <table class="col-sm-6" style="padding: 10px" >

                <tr><td><label>Adresa Firma</label></td>
                    <td><input type="text" v-model="livratori.livratorAdresaFirma "/></td></tr>
                </td></tr>
                <tr><td><label>Telefon Firma</label></td>
                    <td><input type="text" v-model="livratori.livratorTelefonFirma "/></td></tr>
                </td></tr>
                <tr><td><label>Email Firma</label></td>
                    <td><input type="text" v-model="livratori.livratorEmailFirma "/></td></tr>
                </td></tr>
                <tr><td><label>Reprezentant Firma</label></td>
                    <td><input type="text" v-model="livratori.livratorReprezentantFirma "/></td></tr>
                </td></tr>
                <tr><td><label>IBAN Firma</label></td>
                    <td><input type="text" v-model="livratori.livratorIBANFirma "/></td></tr>
                </td></tr>

                <tr><td><label style="width: 100%" >Activ</label></td>
                    <td><input style="width: auto" type="radio" name="Activ" v-model="livratori.livratorActiv" value="true" checked/> Da <input style="width: auto" type="radio" name="Decontat" v-model="livratori.livratorActiv" value="false" checked/> Nu </td></tr>


                </td></tr>
            </table>
        </table>

<!--        <form   v-if="!updated" @submit.prevent="submit">-->
            <form    @submit.prevent="submit">
<!--            <div v-for="(item, key) in clienti">-->
<!--                <table>-->
<!--                    <td style="width: 100px">  <label :for="key">{{ key }}</label> </td>-->
<!--                    <td> <input  type="text" v-model="clienti[key]"></td>-->
<!--                </table>-->
<!--            </div>-->

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="OK"><br>
            <!--            <button onclick="delete(this)">-->

        </form>

<!--        <p v-else>Update OK!</p>-->
    </div>
</template>

<script>




    import { mapState } from 'vuex'
    export default {
        name: 'livratori',
        data () {
            return {
            }
        },
        created () {
            this.$store.dispatch('get_livrator', this.$router.currentRoute.params.id)
        },
        computed: {
            ...mapState({
                livratori: 'livratori',
                updated: 'updated'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('update_livrator', this.$router.currentRoute.params.id)
                alert("Datele livratorului au fost modificate!")
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