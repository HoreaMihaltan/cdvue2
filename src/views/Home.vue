<template>
  <div class="login-page">
    <form @submit.prevent="submit">
      <label for="nume">nume*</label>
      <input type="text"
             v-model="user.name"
             id="nume"
             placeholder="nume utilizator">

      <br>
      <label for="pin">pin*</label>
      <input type="password"
             v-model="user.password"
             id="pin"
             placeholder="pin utilizator">

      <button>LOGIN</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      user: {
          name: '',
          password: ''
      }
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('login', this.user)
    }
  }
}
</script>

<style lang="less">
  .login-page {
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      text-align: left;
      margin: auto;
      width: 100%;
      max-width: 400px;
      padding: 24px;
      border: 1px solid lightblue;
      border-radius: 4px;
      background-color: white;
      input, label {
        display: block;
      }
      input {
        height: 40px;
        padding-left: 16px;
      }
      button {
        width: 100%;
        background-color: #1eb386;
        border: none;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        margin-top: 32px;
        padding: 8px 0;
      }
    }
  }
</style>
