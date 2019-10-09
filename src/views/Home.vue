<template>

  <div class="home">
    <br/>
    <br/>
    <br/>
    <h1>Bine ati revenit</h1>
    <h1>Va rog sa va logati!</h1>
    <i-form-group>
      <hr>
<input type="text" placeholder="User Name" style="width: 200px"/>
      <hr>
<input type="password" placeholder="PIN" style="width: 200px"/>
    </i-form-group>
    <hr>
    <button class="btn-primary" type="submit" >LogIn</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      user: {
          nume: '',
          userId: '',
          userEmail: '',
          pin: '',
          tipUser: ''
      }
    }
  },
  computed: {
        ...mapState({
            formIsSent: 'formIsSent'
        })
    },
  created () {
    this.$store.dispatch("get_users")
  },
  methods: {
    submit () {
      //this.$store.dispatch('create_user', this.user)

    }
  },
  components: {
    HelloWorld,
  }

}
</script>

<style lang="less">
  .home {
    form {
      margin: auto;
      width: 400px;
    }
  }
</style>
