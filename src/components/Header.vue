<template xmlns="http://www.w3.org/1999/html">
    <div>

        <!--<br><br><br>-->

        <div class="col-sm-12" style="background-color: rgba(224,224,224,0.81); width: 100%;">
<div style="background-image: url('/logo/')">
<!--            <div class="dropdown" style="text-align: left;     position:absolute;">-->


<!--            </div>-->
            <div class="col-sm-6">

                <router-link to="/" style="width: 100%; font-size: xx-large" active="active">CallDelivery App</router-link>
                <a href="tel:0752621501"> Suna-ne!</a>
<!--            <input type="text" style="width: auto" v-model="">-->
            </div>
</div>


            <div id="navbar" class="col-sm-6">
<!--                    <router-link to="/" style="background-color: rgba(176,176,176,0.75)" active-class="active">Home</router-link>-->
                    <router-link to="/dashboard" active-class="active">Dashboard</router-link>
                        <router-link to="/users" active-class="active">Useri</router-link>
                            <router-link to="/comenzi" active-class="active">Comenzi</router-link>
                                <router-link to="/clienti" active-class="active">Clienti</router-link>
                                    <router-link to="/livratori" active-class="active">Livratori</router-link>
                <router-link to="/strazi" active-class="active">Strazi</router-link>
            </div>
<!--            <div class="navbar-wrapper">-->


<!--            </div>-->

        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Header",
        data() {
            return {
                ceas: {
                    oraH: '',
                    min: '',
                    sec: ''
                }
            }
        },
        mounted () {
            // const d = new Date()
            // const t = new getTime()
            // const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
            // const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
            // const today = `${d.getFullYear()}-${month}-${day}`;
            // const year = d.getFullYear();
            //this.comenzi.dataComanda = today;
            //const ora = (d.getHours() < 10 ? '0' : '') + d.getHours();
            //const minute = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
            //const secunde = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
            //const cod = `${nr}/${month}${day}${ora}${minute}${secunde}`;
            //const acum = ora + ":" + minute + ":" + secunde;
            // const mtranzit = 90;
            // const mt = ((d.getMinutes() + mtranzit) % 60 < 10 ? '0' : '') + (d.getMinutes() + mtranzit) % 60;
            // const ht = ((d.getMinutes() + mtranzit) < 120 ? d.getHours() + 1 : d.getHours() + 2);
            // const tranzit = ht + ":" + mt;
            // this.ceas.oraH = moment().format('MMMM Do YYYY, h:mm:ss a');
            // this.adresa.cod = cod;
            // this.comenzi.oraLimita = tranzit
        },
        computed: {
            ...mapState({
                user: 'user'
            })
        }
    }
</script>

<style>
    body {
        margin: 0;
        font-size: 28px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .header {
        background-color: #f1f1f1;
        padding: 20px;
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
        top: 10;
        width: 100%;
    }

    .sticky + .content {
        padding-top: 60px;
    }
</style>