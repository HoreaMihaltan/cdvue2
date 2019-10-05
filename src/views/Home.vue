<template>

  <div class="home">
    <h1>Bine ati revenit</h1>
    <h1>Pentru a avea acces la aplicatie, trebuie sa fiti logat!</h1>

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
  methods: {
    submit () {
      this.$store.dispatch('create_user', this.user)
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
