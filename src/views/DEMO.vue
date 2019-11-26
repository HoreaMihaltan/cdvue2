<template>
    <section class="demo">

        <h1>DEMO</h1>

        <button @click="sendMsg">TEST</button>

    </section>
</template>

<script>
    import * as io from 'socket.io-client'
    export default {
        name: 'demo',
        data () {
            return {
                socket: undefined
            }
        },
        mounted () {
            const socket = {
                path: '/socketio/socket.io',
                secure: true,
                rejectUnauthorized: false
            }
            this.socket = io(socket)
        },
        methods: {
            sendMsg () {
                this.$store.dispatch('saveComandaDemo', this.socket)
            }
        }
    }
</script>