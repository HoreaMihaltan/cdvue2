<template>
    <div class="container">

<!--    <i-button-group style="width: 100%"> <button style="padding: 5px; width: auto" @click="setStatus('in lucru')">In lucru</button><button style="padding: 5px; width: auto" @click="setStatus('gata de livrare')">Gata De livrare</button></i-button-group>-->

        <table class="col-sm-10" style="padding: 10px" >
            <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comenzi_azi">Inapoi la Comenzi</router-link>
            <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comenzi_nedecontate">Inapoi la Decont</router-link>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->

            <tr  style="padding: 10px">
                <td><input colspan="6" style="padding: 10px; text-align: left" type="text" v-model="comenzi.idComanda" disabled /></td></tr>

            <!--            </h2></tr>-->
            <table class="col-sm-6" style="padding: 10px" >
                <tr><td><label>Client</label></td>
                    <td> <input type="text" v-model="comenzi.numeClient"  disabled/>
                    </td></tr>
                <tr><td><label>Adresa Livrare</label></td>
                    <td>  <input type="text"
                                 v-model="comenzi.adresaLivrare"  />
                    </td></tr>

                <!--            </tr>-->
                <tr><td><label>Telefon</label></td>
                    <td><input type="text" v-model="comenzi.telefonDestinatar " /></td></tr>
                </td></tr>
                <tr><td><label>Plata cash</label></td>
                    <td><input type="number" v-model="comenzi.plataCash" /></td></tr>
                <tr><td><label>Plata card</label></td>
                    <td><input type="number" v-model="comenzi.plataCard"/></td></tr>

                </tr>
            </table>
            <!--            coloana2-->
            <table class="col-sm-6" style="padding: 10px" >
                <tr><td><label>Valoare comanda</label></td>
                    <td><input type="number" :value="total" disabled /></td></tr>
               <tr><td><label>Livrator</label></td>
                    <td><input type="text" v-model="comenzi.livrator"disabled/></td></tr>
                <tr><td><label>Ora Limita</label></td>
                    <td><input type="time" v-model="comenzi.oraLimita" disabled/></td></tr>
                <tr><td><label>Stare Comanda</label></td>
                    <td><input type="text" v-model="comenzi.stareComanda" disabled />
                    </td></tr>
                <tr><td><label>Tarifare</label></td>
                    <td><input type="number" v-model="comenzi.tarifare" disabled/></td></tr>


                </td></tr>
            </table>
        </table>
        <nav class="col-sm-2">
            <h3>Modifica strare</h3><i-table style="margin-top: 10px" >
            <tr><button v-if="comenzi.stareComanda ==='in lucru'" class="btn-dark" style="padding: 5px; width: 100% " @click="setStatus('programata')">Programata</button></tr>
            <tr><button v-if="comenzi.stareComanda ==='programata'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('in lucru')">In lucru</button></tr>
            <tr><button v-if="comenzi.stareComanda ==='in lucru'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('gata de livrare')">Gata de livrare</button></tr>
            <tr><button v-if="comenzi.stareComanda ==='gata de livrare'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('ridicata')">Ridicata</button></tr>
            <tr><button v-if="comenzi.stareComanda ==='ridicata'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('in livrare')">In livrare</button></tr>
            <tr><button v-if="comenzi.stareComanda ==='in livrare'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('livrata')">Livrata</button></tr>
            <tr><button v-if="comenzi.decontat ==='false'"class="btn-red" style="padding: 5px; width: 100%" @click="decontat('true')">Decontat</button></tr>
        </i-table>
        </nav>
<!--        <form   v-if="!updated" @submit.prevent="submit">-->
        <form    @submit.prevent="submit">

<!--            <div v-for="(item, key) in comenzi">-->
<!--                <table>-->
<!--                    <td style="width: 100px">  <label :for="key">{{ key }}</label> </td>-->
<!--                    <td> <input  type="text" v-model="comenzi[key]"></td>-->
<!--                </table>-->
<!--            </div>-->

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="Modifica"/><br>
<!--            <button class="btn btn-primary dropdown-toggle" style="font-size: medium" onclick="remove()" value="delete"/><br>-->

<!--            <button onclick="delete(this)">-->

        </form>


<!--        <H1 v-else>Comanda a fost modificata</H1>-->
    </div>
</template>

<script>




    import { mapState } from 'vuex'
    export default {
        name: 'comenzi',
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

        },
        created () {
          this.$store.dispatch('get_comanda', this.$router.currentRoute.params.id)
        },
        computed: {
            ...mapState({
                comenzi: 'comenzi',
                updated: 'updated'
            }),
            total () {
                // return   1+1
                return +this.comenzi.plataCash + +this.comenzi.plataCard
            },
        },
        methods: {
            submit () {
                this.comenzi.valoareComanda = this.total
                this.$store.dispatch('update_comanda', this.$router.currentRoute.params.id)
                alert("Comanda a fost modificata!")

            },
            setStatus (status) {
                this.comenzi.stareComanda = status
                this.$store.dispatch('update_comanda', this.$router.currentRoute.params.id)
                alert("Starea comenzii a fost modificata!")
            },
            decontat (decontatCD) {
                this.comenzi.decontat = decontatCD
                this.$store.dispatch('update_comanda', this.$router.currentRoute.params.id)
                alert("Comanda a fost decontata!")
            }
            // remove () {
            //     this.$store.dispatch('delete_comanda', this.$router.currentRoute.params.id)
            // }
        }
    }
</script>
nav {
<!--margin: 10px;-->
float: left;
position:absolute;
width: 100%;
height: auto; /* only for demonstration, should be removed */
background: #ccc;
padding: 20px;
}

<style lang="less">
    .home {
        form {
            margin: auto;
            width:25%;
        }
    }
</style>