import React from 'react'


import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'





export default props =>(

 <div>
           <PageHeader name='Tarefas' small='Cadastro'></PageHeader>  
            <TodoForm />
            <TodoList />   
 </div>
)

//<TodoList list={this.state.list} /> ver no todoList, lista com todas as descrições
//recebe o evento de quando alguém digitar no input