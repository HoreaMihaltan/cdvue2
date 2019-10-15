<template>
    <div class="container" style="padding: 10px">
<!--        <comenzi_azi></comenzi_azi>-->
        <h1>Strazi Cluj</h1>
        <table class="col-sm-12" style="padding: 10px">
          <tr colspan="12">
              <router-link to="/stradanoua"
                      class="btn btn-primary dropdown-toggle"
                      style="font-size: medium" >
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
            <tr @click="$router.push('/strada/'+ straziCluj.id);"
                class="select"
                    v-for="(straziCluj,index) in straziCluj" :key="index">
                <!--                      <tr v-for="clienti in clienti">-->
                <td >
<!--                    <router-link-->
<!--                        class="btn btn-primary"-->
<!--                        style="font-size: medium; width: 100%"-->
<!--                        :to="'/strada/' + straziCluj.id">-->
                    {{ straziCluj.value.idStrada }}
<!--                </router-link>-->
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
    export default {
        name: 'strazi',
        created () {
            this.$store.dispatch('get_straziview')

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

</style>