<template>
    <div>
        <!--<br><br><br>-->

        <div class="col-sm-12" style="background-color: gainsboro; width: 100%;">

<!--            <div class="dropdown" style="text-align: left;     position:absolute;">-->


<!--            </div>-->
            <div class="col-sm-6">
                <router-link to="/" style="width: 100%; font-size: xx-large" active="active">CallDelivery App</router-link>
                <a href="tel:0752621501"> Suna-ne!</a>
            </div>


            <div id="navbar" class="col-sm-6">
<!--                    <router-link to="/" style="background-color: rgba(176,176,176,0.75)" active-class="active">Home</router-link>-->
                    <router-link to="/dashboard" active-class="active">Dashboard</router-link>
                        <router-link to="/users" active-class="active">Useri</router-link>
                            <router-link to="/comenzi" active-class="active">Comenzi</router-link>
                                <router-link to="/clienti" active-class="active">Clienti</router-link>
                                    <router-link to="/livratori" active-class="active">Livratori</router-link>
            </div>
<!--            <div class="navbar-wrapper">-->


<!--            </div>-->

        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
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