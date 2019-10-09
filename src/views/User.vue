<template>

    <div class="home">
        <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/users">Inapoi la Useri</router-link></tr>
        <form   v-if="!updated" @submit.prevent="submit">
            <div v-for="(item, key) in users">
                <table>
              <td style="width: 100px">  <label :for="key">{{ key }}</label> </td>
              <td> <input  type="text" v-model="users[key]"></td>
                </table>
            </div>

            <input class="btn btn-primary dropdown-toggle" style="font-size: medium" type="submit" value="OK">
        </form>

        <p v-else>User is updated</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'users',
        data () {
            return {
            }
        },
        created () {
          this.$store.dispatch('get_user', this.$router.currentRoute.params.id)
        },
        computed: {
            ...mapState({
                users: 'users',
                updated: 'updated'
            })
        },
        methods: {
            submit () {
                this.$store.dispatch('update_user', this.$router.currentRoute.params.id)
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