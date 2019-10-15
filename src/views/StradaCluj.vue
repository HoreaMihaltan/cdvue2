<template>

    <div class="home">
<br/>
        <h2>Editeaza Strada</h2>
        <table class="col-sm-12" style="padding: 10px" >
            <th colspan="24"> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/strazi">Inapoi la Strazi</router-link></th>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->
                <th><input colspan="24" style="padding: 10px; text-align: center" type="text" v-model="straziCluj.idStrada" placeholder="NUME STRADA" /></th>
            <!--            </h2></tr>-->


                <th><td><label>Cartier</label></td>
                    <td>  <input type="text"
                                 v-model="straziCluj.fromCartier"  />
                    </td></th>
                <!--            </tr>-->
                <th><td><label>Zona</label></td>
                    <td><input type="text" v-model="straziCluj.zona "/></td></th>
                </td></tr>

                </tr>

<!---->
        </table>

<!--        <form   v-if="!updated" @submit.prevent="submit">-->
            <form    @submit.prevent="submit">
<!--            <div v-for="(item, key) in clienti">-->
<!--                <table>-->
<!--                    <td style="width: 100px">  <label :for="key">{{ key }}</label> </td>-->
<!--                    <td> <input  type="text" v-model="clienti[key]"></td>-->
<!--                </table>-->
<!--            </div>-->

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="OK"><br>
            <!--            <button onclick="delete(this)">-->

        </form>

<!--        <p v-else>Update OK!</p>-->
    </div>
</template>

<script>




    import { mapState } from 'vuex'
    export default {
        name: 'strada',
        data () {
            return {
            }
        },
        created () {
            this.$store.dispatch('get_stradaCluj', this.$router.currentRoute.params.id)
        },
        computed: {
            ...mapState({
                straziCluj: 'straziCluj',
                updated: 'updated'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('update_stradaCluj', this.$router.currentRoute.params.id)
                alert("Datele strazii au fost modificate!")
            }
        }
    }
</script>
<style lang="less">
    .home {
        form {
            margin: auto;
            width:25%;
        }
    }
</style>