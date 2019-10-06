<template>
 <div>
<!--<br><br><br>-->

     <div class="navbar" style="background-color: gainsboro; width: 100%;">

         <div class="dropdown" style="text-align: left;     position:absolute;">
<!--                 <button type="button" class="btn btn-primary dropdown-toggle" style="font-size: large; align-items: flex-end" data-toggle="dropdown"><img src="../assets/logo.png" style="height: 40px; padding: 5px">-->
<!--                     Meniu-->
<!--                 </button>-->
<!--             <div class="dropdown-menu">-->
<!--                     <router-link class="dropdown-item" to="/"><img src="../assets/logo.png" style="height: 50px; padding: 5px"> Home</router-link>-->
<!--                     <router-link class="dropdown-item" router-link  to="/dashboard"><i class="fa fa-home"></i> Dashboard</router-link>-->
<!--                     <router-link class="dropdown-item" router-link  to="/users"> Useri</router-link>-->
<!--&lt;!&ndash;                     <router-link class="dropdown-item" router-link  to="/userinput"> Adauga user</router-link>&ndash;&gt;-->
<!--                     <router-link class="dropdown-item" router-link  to="/clienti"> Clienti</router-link>-->
<!--                 <router-link class="dropdown-item" router-link  to="/livratori"> Livratori</router-link>-->
<!--&lt;!&ndash;                     <router-link class="dropdown-item" router-link  to="/clientnou"> Adauga client</router-link>&ndash;&gt;-->
<!--                     <router-link class="dropdown-item" router-link  to="/comenzi_azi"> Comenzi Azi</router-link>-->
<!--                 <router-link class="dropdown-item" router-link  to="/comenzi"> Comenzi</router-link>-->
<!--                 <router-link class="dropdown-item" router-link  to="/comenzi_nedecontate"> Decont</router-link>-->
<!--&lt;!&ndash;                     <router-link class="dropdown-item" router-link  to="/comandanoua"> Comanda noua</router-link>&ndash;&gt;-->

<!--                 </div>-->

         </div>
         <div class="header">
             <h2 style="color: #5b5b5b; width: 100%;">Call Delivery App </h2>

         </div>

         <div id="navbar">
             <a class="active" href="/#/">Home</a>
             <a  href="/#/dashboard">Dashboard</a>
             <a href="/#/users">Useri</a>
              <a href="/#/comenzi">Comenzi</a>
             <a href="/#/clienti">Clienti</a>
             <a href="/#/livratori">Livratori</a>
         </div>
<div class="navbar-wrapper">

<!--                    <router-link  to="/"><img src="../assets/logo.png" style="height: 50px; padding: 5px"></router-link>-->
<!--                    <router-link  to="/users"> Useri |</router-link>-->
<!--                    <router-link to="/comenzi"> Comenzi |</router-link>-->
<!--&lt;!&ndash;                    <router-link to="/neworder"> New Order |</router-link>&ndash;&gt;-->
<!--                    <router-link to="/dashboard"> Dashboard |</router-link>-->
<!--                      </div>-->
<!--                <div class="col-sm-2">-->
<!--                    <router-link to="comandanoua" style="width: auto; padding: 10px; "><button  style="width: 100%; padding: 10px" >Comanda Noua</button></router-link>-->
<!--                </div>                <div class="col-sm-2">-->
<!--                    <router-link to="userinput" style="width: auto; padding: 10px; "><button  style="width: 100%; padding: 10px" >User Nou</button></router-link>-->
</div>

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

<style >
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