<template>
 <div>
<!--<br><br><br>-->

     <div class="navbar" style="background-color: gainsboro; width: 100%;">

         <div class="dropdown" style="text-align: left;     position:absolute;">
                 <button type="button" class="btn btn-primary dropdown-toggle" style="font-size: large; align-items: flex-end" data-toggle="dropdown"><img src="../assets/logo.png" style="height: 40px; padding: 5px">
                     Meniu
                 </button>
             <div class="dropdown-menu">
                     <router-link class="dropdown-item" to="/"><img src="../assets/logo.png" style="height: 50px; padding: 5px"> Home</router-link>
                     <router-link class="dropdown-item" router-link  to="/dashboard"> Dashboard</router-link>
                     <router-link class="dropdown-item" router-link  to="/users"> Useri</router-link>
<!--                     <router-link class="dropdown-item" router-link  to="/userinput"> Adauga user</router-link>-->
                     <router-link class="dropdown-item" router-link  to="/clienti"> Clienti</router-link>
                 <router-link class="dropdown-item" router-link  to="/livratori"> Livratori</router-link>
<!--                     <router-link class="dropdown-item" router-link  to="/clientnou"> Adauga client</router-link>-->
                     <router-link class="dropdown-item" router-link  to="/comenzi_azi"> Comenzi Azi</router-link>
                 <router-link class="dropdown-item" router-link  to="/comenzi"> Comenzi</router-link>
                 <router-link class="dropdown-item" router-link  to="/comenzi_nedecontate"> Decont</router-link>
<!--                     <router-link class="dropdown-item" router-link  to="/comandanoua"> Comanda noua</router-link>-->

                 </div>
         </div>
<div class="navbar-wrapper">
    <h1 style="color: #5b5b5b; width: 100%;">Call Delivery App</h1>
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

<style scoped>

</style>