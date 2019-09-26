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
            <tr v-for="(user,index) in users" :key="index">
<!--            <tr v-for="user in users">-->
                <td> <router-link class="btn btn-primary dropdown-toggle" style="font-size: medium; width: 100%" :to="'/user/' + user.id">
                    {{ user.value.nume }}
                </router-link></td>
                <td> {{ user.value.idUser }}</td>
                <td> {{ user.value.userEmail }} </td>
                <td> {{ user.value.pin }} </td>
                <td> {{ user.value.tipUser }} </td>
                <td> {{ user.value.userActiv }} </td>
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



<!--<style lang="less">-->
<!--    .view-users {-->

<!--    }-->
<!--    table {-->
<!--        font-family: arial, sans-serif;-->
<!--        border-collapse: collapse;-->
<!--        width: 100%;-->
<!--    }-->

<!--    td, th {-->
<!--        border: 1px solid #dddddd;-->
<!--        text-align: left;-->
<!--        padding: 8px;-->
<!--    }-->

<!--    tr:nth-child(even) {-->
<!--        background-color: #dddddd;-->
<!--    }-->
<!--</style>-->
<style >
    /*[class*="col-"] {*/
    /*    float: right;*/
    /*    inline-size: 10px;*/
    /*    padding: 10px;*/
    /*    border: 0px solid red;*/
    /*}*/
    /*.col-sm-2 {width: 50%;}*/
    /*.col-sm-12 {width: 100%;}*/
</style>