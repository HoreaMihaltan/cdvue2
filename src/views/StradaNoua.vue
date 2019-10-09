<template>
    <div class="container">
        <h2>Adauga Strada</h2>
        <table class="col-sm-12" style="padding: 10px" >
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/strazi">Inapoi la Strazi</router-link></tr>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->
            <tr  style="padding: 10px">
                <td><input colspan="6" style="padding: 10px; text-align: left" type="text" v-model="straziCluj.idStrada" placeholder="NUME strada" /></td></tr>
            <!--            </h2></tr>-->
            <table class="col-sm-6" style="padding: 10px" >

                <tr><td><label>Cartier</label></td>
                    <td><select
                            id="fromCartier"
                            name="fromCartier"
                            v-if="straziCluj.idStrada"
                            required="true"
                            v-validate="'required'"
                            placeholder="Alege cartier"
                            v-model="straziCluj.fromCartier">
                        <span style="color: red;" v-show="errors.has('fromCartier')">{{ errors.first('fromCartier')}}</span>

                        <option value="Andrei Muresanu" label="Andrei Muresanu"/>
                        <option value="Apahida" label="Apahida"/>
                        <option value="Baciu" label="Baciu"/>
                        <option value="Borhanci" label="Borhanci"/>
                        <option value="Buna Ziua" label="Buna Ziua"/>
                        <option value="Centru" label="Centru"/>
                        <option value="Dambu Rotund" label="Dambu Rotund"/>
                        <option value="Faget" label="Faget"/>
                        <option value="Feleacu" label="Feleacu"/>
                        <option value="Floresti" label="Floresti"/>
                        <option value="Gheorgheni" label="Gheorgheni"/>
                        <option value="Grigorescu" label="Grigorescu"/>
                        <option value="Gruia" label="Gruia"/>
                        <option value="Manastur" label="Manastur"/>
                        <option value="Marasti" label="Marasti"/>
                        <option value="Muncii" label="Muncii"/>
                        <option value="Someseni" label="Someseni"/>
                        <option value="Sopor" label="Sopor"/>
                        <option value="Zorilor" label="Zorilor"/>

                    </select></td></tr>
                <!--            </tr>-->

                </tr>
            </table>
            <!--            coloana2-->
            <table class="col-sm-6" style="padding: 10px" >

                <tr><td><label>Zona</label></td>
                    <td><input type="text" v-model="straziCluj.zona "/></td></tr>
                </td></tr>
                </td></tr>
            </table>
        </table>
        <form v-if="!formIsSent"
              style="text-align: left" @submit.prevent="submit">
<!--            <div v-for="(item,key) in clienti">-->
<!--                <table>-->
<!--                    <td style="width: 100px"><label :for="key">{{ key }}</label></td>-->
<!--                    <td><input :id="key" v-model="clienti[key]" type="text" :placeholder="key"/></td>-->
<!--                </table>-->
<!--            </div>-->

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="Adauga">
        </form>

        <p v-else>Strada Adaugata</p>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import { mapState } from 'vuex'


    export default {
        name: 'stradanoua',
        created () {
            this.$store.dispatch('get_straziCluj')
        },


        data () {
            return {
                straziCluj: {
                    idStrada: '',
                    fromCartier: '',
                    zona: '',

                }
            }
        },

        "mounted": function () {
                // const d = new Date()
                // // const t = new getTime()
                // const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
                // const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
                // const today = `${d.getFullYear()}-${month}-${day}`
                // this.livratori.dataAdaugare = today

        },

        computed: {
            ...mapState({
                formIsSent: 'formIsSent'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('create_strada', this.straziCluj)
            }
        },
        components: {
            HelloWorld
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

