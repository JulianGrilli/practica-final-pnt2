<template>

  <section class="src-components-ejercicio-final">
    <input type="text" :value="mensaje" @input="actualizar($event)" style="margin:10px;" >
    <br>
    <span style="margin-left:10px;" >{{changeTexttoUpperCase(cambiarVocalesEnMensaje)}}</span>
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
      actualizar(e) {
            let dato = e.target.value
            console.log(dato)
            this.mensaje = dato
        },
    },
    computed: {
      cambiarVocalesEnMensaje(){
        return this.mensaje.toLowerCase()
                           .replace( new RegExp('e', 'g'), 'o' )
                           .replace( new RegExp('a', 'g'), 'u' )
                           .replace( new RegExp('o', 'g'), 'e' )
                           .replace( new RegExp('u', 'g'), 'a' )
                           ;
        
      }

    }
}


</script>

<style scoped lang="css">
  .src-components-ejercicio-final {

  }
</style>
