<template>

    <div class="container" style="padding: 10px">


        <table class="col-sm-12" style="padding: 10px">
            <tr> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium" router-link  to="/userinput">Adauga User</router-link></tr>
            <th colspan="12" style="text-align: center"><h2><router-link to="/users"> Useri </router-link></h2></th>

            <tr>
                <th style="text-align: center">Nume User</th>
                <th style="text-align: center">Id User</th>
                <th style="text-align: center">Email User</th>
                <th style="text-align: center">Pin</th>
                <th style="text-align: center">Tip User</th>
                <th style="text-align: center">User Activ</th>
            </tr>
            <tr v-for="(users,index) in users" :key="index">
<!--            <tr v-for="user in users">-->
                <td> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/user/' + users.id">
                    {{ user.value.nume }}
                </router-link></td>
                <td> {{ users.value.idUser }}</td>
                <td> {{ users.value.userEmail }} </td>
                <td> {{ users.value.pin }} </td>
                <td> {{ users.value.tipUser }} </td>
                <td> {{ users.value.userActiv }} </td>
            </tr>
            </table>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'users',
        created () {
          this.$store.dispatch('get_users')
        },
        computed: {
            ...mapState({
                users: 'users'
            })
        }
    }
</script>

<style >

</style>