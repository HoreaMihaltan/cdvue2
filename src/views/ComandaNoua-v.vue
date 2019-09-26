<template>
    <div class="home">



        <h1>COMANDA NOUA</h1>

        <form v-if="!formIsSent"
              style="text-align: left" @submit.prevent="submit">
            <div v-for="(item,key) in comenzi">
                <table>
                    <td style="width: 100px"><label :for="key">{{ key }}</label></td>
                    <td><input :id="key" v-model="comenzi[key]" value=""
                               :type="key === 'idComanda' ? 'number'
                               : key === 'plataCash' ? 'number'
                               : key === 'plataCard' ? 'number'
                               : key === 'valoareComanda' ? 'number'
                               : key === 'tarifare' ? 'number'
                               : key === 'decontat' ? 'boolean'
                               : key === 'livrator' ? 'select'
                               : 'text'"

                               :placeholder="key"/></td>
<!--                    <select v-model="livrator">-->
<!--                        <option v-for="option in options" v-bind:value="option.value">-->
<!--                            {{ option.text }}-->
<!--                        </option>-->
<!--                    </select>-->
<!--                    <span>Selected: {{ selected }}</span>-->
                </table>
            </div>
<!--                <input :id="key" v-model="comenzi[key]"-->
<!--                       value=""-->
<!--                       :type="key === 'dataComanda' ? 'date' : 'text'" <<asta e un if: daca key este dataComanda atunci type este date, alfel e text>>-->
<!--                :placeholder="key"/><br>-->

<!--campuri-->
<!--                <div class="form-group">-->
<!--                    <label for="exampleFormControlInput1">Email address</label>-->
<!--                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                    <label for="exampleFormControlSelect1">Example select</label>-->
<!--                    <select class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect1">-->
<!--                        <option>1</option>-->
<!--                        <option>2</option>-->
<!--                        <option>3</option>-->
<!--                        <option>4</option>-->
<!--                        <option>5</option>-->
<!--                    </select>-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                    <label for="exampleFormControlSelect2">Example multiple select</label>-->
<!--                    <select multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">-->
<!--                        <option>1</option>-->
<!--                        <option>2</option>-->
<!--                        <option>3</option>-->
<!--                        <option>4</option>-->
<!--                        <option>5</option>-->
<!--                    </select>-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                    <label for="exampleFormControlTextarea1">Example textarea</label>-->
<!--                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>-->
<!--                </div>-->
<!--            -->

<!--campuri-->




            <br>
            <h3><router-link to="/comenzi">Cancel</router-link></h3> <br> <br>

            <input type="submit">    </form>


        <p v-else>Comanda a fost lansata</p>
    </div>

</template>

<script>
    // @ is an alias to /src
    import {mapState} from 'vuex'
    import moment from "moment";

    export default {
        name: 'comenzi',
        data: function () {
            return {
                comenzi: {
                    // var azi = moment().format('L'),
                    idComanda: "",
                    dataComanda: ``,
                    numeClient: '',
                    adresaLivrare: '',
                    livrator: '',
                    plataCash: '',
                    plataCard: '',
                    oraComanda: '',
                    oraLimita: '',
                    stareComanda: 'In lucru',
                    decontat: 'false',
                    oraLivrare: '',
                    valoareComanda: "",
                    tarifare: ''
                },

            }
        },
        mounted: function () {
            const d = new Date()
            // const t = new getTime()
            const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
            const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
            const today = `${d.getFullYear()}-${month}-${day}`
            this.comenzi.dataComanda = today
            const ora = (d.getHours() < 10 ? '0' : '') + d.getHours()
            const minute = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
            const acum = moment().format('LT')
            const tranzit = moment().add(1.6, 'hour').fromNow()
            this.comenzi.oraComanda = acum
            this.comenzi.oraLimita = tranzit
            this.comenzi.idComanda++





        },

        computed: {
            ...mapState({
                formIsSent: 'formIsSent'
            }),
                    },
        methods: {
            submit () {
                this.$store.dispatch('create_comenzi', this.comenzi)
            },
            // valoareCd(){
            //     const platacash = get.valueOf(key === 'platacash')
            //     const platacard = get.valueOf(key === 'platacard')
            //     this.comenzi.valoareComanda = platacash + platacard
            // }
        },
        // components: {
        //     HelloWorld
        // }
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
