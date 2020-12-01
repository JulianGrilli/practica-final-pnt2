export default  {
    methods : {
      dateFormat : function(fyh) {
        return new Date(fyh).toLocaleString()
      },
      numberWithDolar: function(number) {
          return '$'+number;
      },
      changeTexttoUpperCase: function(text){
        return text.toUpperCase();
      }
    }

}