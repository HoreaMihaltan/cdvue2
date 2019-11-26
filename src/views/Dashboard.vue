<template>

    <div class="container" style="padding: 10px">
        <comenzi_azi></comenzi_azi>
        <iframe style="width: 100%; height: 300px"
                 src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRRPupSH5UJ41rqcZRHbnvRauVeVCRVaWYwhPClSzdjeQjDge3EABurqTqGYp8Fc_zJ1-tfjjlJ-dWQ/pubhtml?gid=1363757906&amp;single=true&amp;widget=true&amp;headers=false">

        </iframe>

        /*setTimeout(function(){ iframe.reload(); }, 1000);*/

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Comenzi_azi from "../liste/ComenziAzi";
    import Comenzi_programate from "../liste/ComenziProgramate";
    import Comenzi_in_lucru from "../liste/ComenziInLucru";

    export default {
        name: 'dashboard',
        components: {Comenzi_in_lucru, Comenzi_programate, Comenzi_azi},
    //     created () {
    //         this.$store.dispatch('get_clienti')
    //     },
    //     computed: {
    //         ...mapState({
    //             clienti: 'clienti'
    //         })
    //     }
    }

    // location.reload(true)
    // src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    // src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
</script>

<style>
    /** {*/
    /*    box-sizing: border-box;*/
    /*}*/

    /*.header {*/
    /*    border: 1px solid red;*/
    /*    padding: 15px;*/
    /*}*/

    /*.row::after {*/
    /*    content: "";*/
    /*    clear: both;*/
    /*    display: table;*/
    /*}*/


    /*[class*="col-"] {*/
    /*    float: right;*/
    /*    inline-size: 10px;*/
    /*    padding: 10px;*/
    /*    border: 0px solid red;*/
    /*}*/

    /*.col-1 {width: 8.33%;}*/
    /*.col-sm-2 {width: 50%;}*/
    /*.col-3 {width: 20%;}*/
    /*.col-4 {width: 33.33%;}*/
    /*.col-5 {width: 41.66%;}*/
    /*.col-6 {width: 50%;}*/
    /*.col-7 {width: 58.33%;}*/
    /*.col-8 {width: 66.66%;}*/
    /*.col-9 {width: 80%;}*/
    /*.col-10 {width: 83.33%;}*/
    /*.col-11 {width: 91.66%;}*/
    /*.col-sm-12 {width: 100%;}*/
</style>