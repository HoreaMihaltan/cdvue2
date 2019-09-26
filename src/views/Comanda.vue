<template>
    <div class="container">
        <table class="col-sm-12" style="padding: 10px" >
            <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/comenzi">Inapoi la Comenzi</router-link>
            <!--            <tr colspan="24" style="text-align:center"><h2>-->
            <tr  style="padding: 10px">
                <td><input colspan="6" style="padding: 10px; text-align: left" type="text" v-model="comenzi.idComanda" disabled /></td></tr>

            <!--            </h2></tr>-->
            <table class="col-sm-6" style="padding: 10px" >
                <tr><td><label>Client</label></td>
                    <td> <input type="text" v-model="comenzi.numeClient"/>
                    </td></tr>
                <tr><td><label>Adresa Livrare</label></td>
                    <td>  <input type="text"
                                 v-model="comenzi.adresaLivrare"  />
                    </td></tr>
                <tr><td><label>Cartier</label></td>
                    <td><select id="cartier"
                                type="text"
                                v-model="comenzi.cartier">
                        <option value="Apahida" label="Apahida" />
                        <option value="Gheorgheni" label="Gheorgheni" />
                        <option value="Gruia" label="Gruia" />
                        <option value="Zorilor" label="Zorilor" />
                        <option value="Manastur" label="Manastur"  />
                        <option value="Centru" label="Centru"  />
                    </select></td></tr>

                <!--            </tr>-->
                <tr><td><label>Telefon</label></td>
                    <td><input type="text" v-model="comenzi.telefonDestinatar "/></td></tr>
                </td></tr>
                <tr><td><label>Plata cash</label></td>
                    <td><input type="number" v-model="comenzi.plataCash"/></td></tr>
                <tr><td><label>Plata card</label></td>
                    <td><input type="number" v-model="comenzi.plataCard"/></td></tr>

                </tr>
            </table>
            <!--            coloana2-->
            <table class="col-sm-6" style="padding: 10px" >
                <tr><td><label>Valoare comanda</label></td>
                    <td><input type="number" v-model="comenzi.valoareComanda" /></td></tr>
                <tr><td><label >Decontat</label></td>
                    <td><input style="width: auto" type="radio" name="Decontat" v-model="comenzi.decontat" value="true" checked/> Da <input style="width: auto" type="radio" name="Decontat" v-model="comenzi.decontat" value="false" checked/> Nu </td></tr>
                <tr><td><label>Livrator</label></td>
                    <td><input type="text" v-model="comenzi.livrator"/></td></tr>
                <tr><td><label>Ora Limita</label></td>
                    <td><input type="time" v-model="comenzi.oraLimita"/></td></tr>
                <tr><td><label>Stare Comanda</label></td>
                    <td><select  type="text" v-model="comenzi.stareComanda">
                        <option value="programata" label="Programata" />
                        <option value="in lucru" label="In lucru" />
                        <option value="gata de livrare" label="Gata de livrare" />
                    </select></td></tr>
                <tr><td><label>Tarifare</label></td>
                    <td><input type="number" v-model="comenzi.tarifare" /></td></tr>


                </td></tr>
            </table>
        </table>

        <form   v-if="!updated" @submit.prevent="submit">
<!--            <div v-for="(item, key) in comenzi">-->
<!--                <table>-->
<!--                    <td style="width: 100px">  <label :for="key">{{ key }}</label> </td>-->
<!--                    <td> <input  type="text" v-model="comenzi[key]"></td>-->
<!--                </table>-->
<!--            </div>-->

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="ok"/><br>
<!--            <button class="btn btn-primary dropdown-toggle" style="font-size: medium" onclick="remove()" value="delete"/><br>-->

<!--            <button onclick="delete(this)">-->

        </form>


        <H1 v-else>Comanda a fost modificata</H1>
    </div>
</template>

<script>




    import { mapState } from 'vuex'
    export default {
        name: 'comenzi',
        data () {
            return {
            }
        },
        created () {
          this.$store.dispatch('get_comanda', this.$router.currentRoute.params.id)
        },
        computed: {
            ...mapState({
                comenzi: 'comenzi',
                updated: 'updated'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('update_comanda', this.$router.currentRoute.params.id)
            },
            // remove () {
            //     this.$store.dispatch('delete_comanda', this.$router.currentRoute.params.id)
            // }
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