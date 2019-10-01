<template>
    <div class="container">
        <h2>Adauga Livrator</h2>
        <table class="col-sm-12" style="padding: 10px" >
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/livratori">Inapoi la Livratori</router-link></tr>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->
            <tr  style="padding: 10px">
                <td><input colspan="6" style="padding: 10px; text-align: left" type="text" v-model="livratori.numeLivrator" placeholder="NUME LIVRATOR" /></td></tr>
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

        <p v-else>Livrator Creeat</p>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import { mapState } from 'vuex'


    export default {
        name: 'livratornou',
        created () {
            this.$store.dispatch('get_livratori')
        },


        data () {
            return {
                livratori: {
                    dataAdaugare: '',
                    numeLivrator: '',
                    livratorEmail: '',
                    livratorTelefon: '',
                    livratorNumeFirma: '',
                    livratorCUI: '',
                    livratorNIRC: '',
                    livratorAdresaFirma: '',
                    livratorTelefonFirma: '',
                    livratorEmailFirma: '',
                    livratorReprezentantFirma: '',
                    livratorIBANFirma: '',
                    livratorActiv: ''
                }
            }
        },

        "mounted": function () {
                const d = new Date()
                // const t = new getTime()
                const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
                const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
                const today = `${d.getFullYear()}-${month}-${day}`
                this.livratori.dataAdaugare = today

        },

        computed: {
            ...mapState({
                formIsSent: 'formIsSent'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('create_livrator', this.livratori)
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

