<template>
    <div>
<comenzi></comenzi>
<view-users></view-users>

<!--        <div class="container">-->
<!--            <h2>Dropdowns</h2>-->
<!--            <p>The .dropdown class is used to indicate a dropdown menu.</p>-->
<!--            <p>Use the .dropdown-menu class to actually build the dropdown menu.</p>-->
<!--            <p>To open the dropdown menu, use a button or a link with a class of .dropdown-toggle and data-toggle="dropdown".</p>-->
<!--            <div class="dropdown" style=align-items: ref="left: auto">-->
<!--                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">-->
<!--                    Meniu-->
<!--                </button>-->
<!--                <div class="dropdown-menu">-->
<!--                    <router-link class="dropdown-item" router-link  to="/users"> Useri</router-link>-->
<!--                    <router-link class="dropdown-item" router-link  to="/comenzi"> Comenzi</router-link>-->

<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    import Comenzi from "./Comenzi";
    import ViewUsers from "./ViewUsers";

    export default {
        name: "Dashboard",
        components: {ViewUsers, Comenzi}
    }
</script>

<style scoped>

</style>