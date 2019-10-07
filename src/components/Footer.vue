<template>
 <div>
<!--<br><br><br>-->

<!--     <div class="footer" style="background-color: gainsboro; width: auto;">-->
         <div class="icon-bar" style="width: auto">
             <router-link to="/comenzi_azi" style="width: 11.11%" active-class="active"><i class="fa fa-home"></i><br/><h4>Comenzi Azi({{totalAzi}})</h4></router-link>
             <router-link to="/comenzi_programate" style="width: 11.11%"active-class="active"><i class="fa fa-exclamation"></i><br/><h4>Programate({{totalProgramate}})</h4></router-link>
             <router-link to="/comenzi_disponibile" style="width: 11.11%"active-class="active"><i class="fa fa-eye"></i><br/><h4>Disponibile({{totalDisponibile}})</h4></router-link>
             <router-link to="/comenzi_in_lucru" style="width: 11.11%"active-class="active"><i class="fa fa-fire"></i><br/><h4>In Lucru({{totalInLucru}})</h4></router-link>
             <router-link to="/comenzi_gata" style="width: 11.11%"active-class="active"><i class="fa fa-cart-arrow-down"></i><br/><h4>Gata de Livrare({{totalGata}})</h4></router-link>
             <router-link to="/comenzi_ridicate" style="width: 11.11%"active-class="active"><i class="fa fa-truck"></i><br/><h4>Ridicate({{totalRidicate}})</h4></router-link>
             <router-link to="/comenzi_in_livrare" style="width: 11.11%"active-class="active"><i class="fa fa-fighter-jet"></i><br/><h4>In Livrare({{totalInLivrare}})</h4></router-link>
             <router-link to="/comenzi_livrate" style="width: 11.11%"active-class="active"><i class="fa fa-check"></i><br/><h4>Livrate({{totalLivrate}})</h4></router-link>
             <router-link to="/comenzi_nedecontate" style="width: 11.11%"active-class="active"><i class="fa fa-money"></i><br/><h4>Decont({{totalNedecontate}})</h4></router-link>
         </div>
<!--         <h1 style="color: #5b5b5b; width: 100%;">Call Delivery App</h1>-->
<!--     </div>-->

 </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Footer",
        created() {
            this.$store.dispatch('get_comenziProgramate');
            this.$store.dispatch('get_comenziAzi');
            this.$store.dispatch('get_comenziInLucru');
            this.$store.dispatch('get_comenziDisponibile');
            this.$store.dispatch('get_comenziGata');
            this.$store.dispatch('get_comenziRidicate');
            this.$store.dispatch('get_comenziInLivrare');
            this.$store.dispatch('get_comenziLivrate');
            this.$store.dispatch('get_comenziNedecontate');
            // this.$store.dispatch('get_comenzi', 'byStareGata')
        },
        computed: {
            ...mapState({
                comenziAzi: 'comenziAzi',
                comenziProgramate: 'comenziProgramate',
                comenziInLucru: 'comenziInLucru',
                comenziDisponibile: 'comenziDisponibile',
                comenziGata: 'comenziGata',
                comenziRidicate: 'comenziRidicate',
                comenziInLivrare: 'comenziInLivrare',
                comenziLivrate: 'comenziLivrate',
                comenziNedecontate: 'comenziNedecontate',
            }),
            totalAzi: function () {
                return this.comenziAzi.length;
            },
            totalProgramate: function () {
                return this.comenziProgramate.length;
            },
            totalInLucru: function () {
                return this.comenziInLucru.length;
            },
            totalDisponibile: function () {
                return this.comenziDisponibile.length;
            },
            totalGata: function () {
                return this.comenziGata.length;
            },
            totalRidicate: function () {
                return this.comenziRidicate.length;
            },
            totalInLivrare: function () {
                return this.comenziInLivrare.length;
            },
            totalLivrate: function () {
                return this.comenziLivrate.length;
            },
            totalNedecontate: function () {
                return this.comenziNedecontate.length;
            }
        }
    }

    // // ------ceas-----
    // clock() {
    //     var today = new Date();
    //     var h = today.getHours() + 1;
    //
    //     var m = today.getMinutes();
    //     var s = today.getSeconds();
    //     m = checkTime(m);
    //     s = checkTime(s);
    //     document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    //     var t = setTimeout(clock, 500);
    // }
    // function checkTime(i) {
    //     if (i < 10) {
    //         i = "0" + i
    //     }
    //     ; // add zero in front of numbers < 10
    //     return i;
    // }
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("navbar").style.top = "0";
    //     } else {
    //         document.getElementById("navbar").style.top = "-50px";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }
</script>

<style>
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