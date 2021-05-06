const app= new Vue({

el: '#app',
data:{

     alert: false,
     stringaAggiunta: '',
     todos: [
         {
           text:'ripassare',
           checked: false
         },
         {
           text:'scrivere il codice ',
           checked: false
         },
         {
           text:'riguardare la lezione',
           checked: false
         },
         {
           text:'prendere appunti',
           checked: false
         }
        
     ]

},

methods:{

    remove(index){
       this.todos.splice(index,1)
    },

    addTodo(){
        if(this.stringaAggiunta.length > 2){
            this.todos.push(
                {
                    text: this.stringaAggiunta, 
                    checked: false
                })
            this.stringaAggiunta=''
        }else{
            this.alert=true
            setTimeout(()=>{
                this.alert=false
            },2000)
        }
        
    }

}



});