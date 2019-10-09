<template>

    <div class="container" style="padding: 10px">
<!--        <comenzi_azi></comenzi_azi>-->

        <h1>Strazi Cluj</h1>

        <table class="col-sm-12" style="padding: 10px">
          <tr colspan="12">
              <router-link
                      class="btn btn-primary dropdown-toggle"
                      style="font-size: medium" router-link  to="/stradanoua">
                  Adauga Strada
              </router-link>
          </tr>
            <th colspan="12"
                style="text-align: center">
                <h2>
                <router-link to="/strazi"> Strazi Cluj
                </router-link>
                </h2>
            </th>
            <tr >
                <th style="text-align: center">IdStrada</th>
                <th style="text-align: center">Cartier</th>
                <th style="text-align: center">Zona</th>
            </tr>
            <tr v-for="(straziCluj,index) in straziCluj" :key="index">
                <!--                      <tr v-for="clienti in clienti">-->
                <td> <router-link class="btn btn-primary" style="font-size: medium; width: 100%" :to="'/strada/' + straziCluj.id">
                    {{ straziCluj.value.idStrada }}
                </router-link>
                </td>
                <td> {{ straziCluj.value.fromCartier }}
                </td>

                <td> {{ straziCluj.value.zona }}
                </td>
            </tr>

        </table>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Comenzi_azi from "../liste/ComenziAzi";
    export default {
        name: 'strazi',
        components: {Comenzi_azi},
        created () {
            this.$store.dispatch('get_straziCluj')
        },
        computed: {
            ...mapState({
                straziCluj: 'straziCluj'
            })
        }
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