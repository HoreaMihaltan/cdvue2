<template>
    <div class="container">

<!--    <i-button-group style="width: 100%"> <button style="padding: 5px; width: auto" @click="setStatus('in lucru')">In lucru</button><button style="padding: 5px; width: auto" @click="setStatus('gata de livrare')">Gata De livrare</button></i-button-group>-->

        <table class="col-sm-10" style="padding: 10px" >
            <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comenzi_azi">Inapoi la Comenzi</router-link>
            <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comenzi_nedecontate">Inapoi la Decont</router-link>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->

            <tr  style="padding: 10px">
                <td>{{comenzi.idComanda}}/{{comenzi.dataComanda}} de la Client: {{comenzi.numeClient}}</td></tr>

            <!--            </h2></tr>-->
            <table class="col-sm-6" style="padding: 10px" >
                <tr><td><label>Adresa Livrare</label></td>
                    <td>  <input type="text"
                                 v-on:change="submit"
                                 v-model="comenzi.adresaLivrare"  />
                    </td></tr>

                <!--            </tr>-->
                <tr><td><label>Telefon</label></td>
                    <td><input type="text"
                               v-on:change="submit"
                               v-model="comenzi.telefonDestinatar "/></td></tr>

                <tr><td><label>Plata cash</label></td>
                    <td><input type="number"
                               v-on:change="submit"
                               v-model="comenzi.plataCash" /></td></tr>
                <tr><td><label>Plata card</label></td>
                    <td><input type="number"
                               v-on:change="submit"
                               v-model="comenzi.plataCard"/></td></tr>


            </table>
            <!--            coloana2-->
            <table class="col-sm-6" style="padding: 10px" >
                <tr><td><label>Valoare comanda</label></td>
                    <td style="text-align: left">{{total}}lei
                    </td></tr>
               <tr><td><label>Livrator</label></td>
                    <td style="text-align: left">{{comenzi.livrator}}
                    </td></tr>
                <tr><td><label>Ora Limita</label></td>
                    <td style="text-align: left">{{comenzi.oraLimita}}
                    </td></tr>
                <tr><td><label>Stare Comanda</label></td>
                    <td style="text-align: left">{{comenzi.stareComanda}}
                    </td></tr>
                <tr><td><label>Tarifare</label></td>
                    <td style="text-align: left">{{comenzi.tarifare}}
                    </td></tr>
            </table>
        </table>
        <div class="btn-group;icon-bar" style="width: auto" >
            <h3>Modifica strare</h3><table style="margin-top: 10px" >
            <tr><button class="btn-primary" style="padding: 5px; width: 100%"v-if="comenzi.stareComanda ==='in lucru'"  @click="setStatus('programata')" @mouseup="goBack"><i class="fa fa-exclamation"></i><br/><h2>Programata</h2></button></tr>
            <tr><button v-if="comenzi.stareComanda ==='programata'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('in lucru')" @mouseup="goBack"><i class="fa fa-fire"></i><br/><h4>In Lucru</h4></button></tr>
            <tr><button v-if="comenzi.stareComanda ==='in lucru'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('gata de livrare')" @mouseup="goBack"><i class="fa fa-cart-arrow-down"></i><br/><h4>Gata de Livrare</h4></button></tr>
            <tr><button v-if="comenzi.stareComanda ==='gata de livrare'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('ridicata')" @mouseup="goBack"><i class="fa fa-truck"></i><br/><h4>Ridicate</h4></button></tr>
            <tr><button v-if="comenzi.stareComanda ==='ridicata'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('in livrare')" @mouseup="goBack"><i class="fa fa-fighter-jet"></i><br/><h4>In Livrare</h4></button></tr>
            <tr><button v-if="comenzi.stareComanda ==='in livrare'" class="btn-primary" style="padding: 5px; width: 100%" @click="setStatus('livrata')" @mouseup="goBack"><i class="fa fa-check"></i><br/><h4>Livrate</h4></button></tr>
            <tr><button v-if="comenzi.decontat ==='false'"class="btn-primary" style="padding: 5px; width: 100%" @click="decontat('true')" @mouseup="goBack"><i class="fa fa-money"></i><br/><h4>Decont</h4></button></tr>
        </table>
        </div>
<!--        <form   v-if="!updated" @submit.prevent="submit">-->
        <form    @submit.prevent="submit">

<!--            <div v-for="(item, key) in comenzi">-->
<!--                <table>-->
<!--                    <td style="width: 100px">  <label :for="key">{{ key }}</label> </td>-->
<!--                    <td> <input  type="text" v-model="comenzi[key]"></td>-->
<!--                </table>-->
<!--            </div>-->

<!--            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="Modifica"/><br>-->
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
                this.$store.dispatch('get_comenziProgramate')
                this.$store.dispatch('get_comenziAzi')
                this.$store.dispatch('get_comenziInLucru')
                this.$store.dispatch('get_comenziDisponibile')
                this.$store.dispatch('get_comenziGata')
                this.$store.dispatch('get_comenziRidicate')
                this.$store.dispatch('get_comenziInLivrare')
                this.$store.dispatch('get_comenziLivrate')
                this.$store.dispatch('get_comenziNedecontate')
                alert("Comanda a fost modificata!")

            },
            setStatus (status) {
                this.comenzi.stareComanda = status
                this.$store.dispatch('update_comanda', this.$router.currentRoute.params.id)
                this.$store.dispatch('get_comenziProgramate')
                this.$store.dispatch('get_comenziAzi')
                this.$store.dispatch('get_comenziInLucru')
                this.$store.dispatch('get_comenziDisponibile')
                this.$store.dispatch('get_comenziGata')
                this.$store.dispatch('get_comenziRidicate')
                this.$store.dispatch('get_comenziInLivrare')
                this.$store.dispatch('get_comenziLivrate')
                this.$store.dispatch('get_comenziNedecontate')
                alert("Starea comenzii modificata!")
            },
            decontat (decontatCD) {
                this.comenzi.decontat = decontatCD
                this.$store.dispatch('update_comanda', this.$router.currentRoute.params.id)
                this.$store.dispatch('get_comenziProgramate')
                this.$store.dispatch('get_comenziAzi')
                this.$store.dispatch('get_comenziInLucru')
                this.$store.dispatch('get_comenziDisponibile')
                this.$store.dispatch('get_comenziGata')
                this.$store.dispatch('get_comenziRidicate')
                this.$store.dispatch('get_comenziInLivrare')
                this.$store.dispatch('get_comenziLivrate')
                this.$store.dispatch('get_comenziNedecontate')
                alert("Comanda a fost decontata!")
            },
            goBack() {
        window.history.back();
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
    body {
        margin: 0;
        font-size: 28px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .header {
        background-color: #f1f1f1;
        padding: 30px;
        text-align: center;
    }

    #navbar {
        overflow: hidden;
        background-color: #333;
    }

    #navbar a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    #navbar a:hover {
        background-color: #ddd;
        color: black;
    }

    #navbar a.active {
        background-color: #4CAF50;
        color: white;
    }

    .content {
        padding: 16px;
    }

    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }

    .sticky + .content {
        padding-top: 60px;
    }
</style>