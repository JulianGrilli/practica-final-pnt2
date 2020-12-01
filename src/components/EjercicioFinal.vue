<template>

  <section class="src-components-ejercicio-final">
    <input type="text" v-model="mensaje" style="margin:10px;" >
    <br>
    <span style="margin-left:10px;" >{{resolver(mensaje)}}</span>
    <p style="margin:10px;" >Respuestas: - lo que sea que son las respuesas... -.</p>
  </section>

</template>

<script>
  import Filters from '../Filters.js'

  export default  {
    name: 'src-components-ejercicio-final',
    props: [],
    mixins: [Filters],
    mounted () {
      
    },
    data () {
      return {
        mensaje : ''
      }
    },
    methods: {
      
    },
    computed: {
      

    }
}


</script>

<style scoped lang="css">
  .src-components-ejercicio-final {

  }
</style>
