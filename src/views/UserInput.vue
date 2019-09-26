<template>
    <div class="home">
        <h2>Adauga user</h2>
        <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/users">Inapoi la Useri</router-link></tr>

        <form v-if="!formIsSent"
              style="text-align: left" @submit.prevent="submit">
            <div v-for="(item,key) in user">
                <table>
                    <td style="width: 100px"><label :for="key">{{ key }}</label></td>
                    <td><input :id="key" v-model="user[key]" type="text" :placeholder="key"/></td>
                </table>
            </div>

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="Creeaza">
        </form>

        <p v-else>Userul a fost inregistrat</p>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import { mapState } from 'vuex'


    export default {
        name: 'userimput',
        created () {
            this.$store.dispatch('get_users')
        },


        data () {
            return {
                user: {
                    idUser: '',
                    nume: '',
                    userEmail: '',
                    pin: '',
                    tipUser: '',
                    userActiv: 'true'
                }
            }
        },

        "mounted": function () {
            this.user.idUser++
        },

        computed: {
            ...mapState({
                formIsSent: 'formIsSent'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('create_user', this.user)
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

