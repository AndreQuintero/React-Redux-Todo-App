import React from 'react'
import IconButton from '../template/iconButton'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {markAsDone, markAsPending, remove} from './todoActions'

const TodoList = props=>{
    
    
        const renderRows = () =>{
        const list = props.list || []
        
        return list.map(todo =>(
            <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
            <td>
            <IconButton style='success' icon='check' hide={todo.done} onClick={()=> props.markAsDone(todo)}></IconButton>
            <IconButton style='warning' icon='undo' hide={!todo.done} onClick={()=> props.markAsPending(todo)}></IconButton>
            <IconButton style='danger' icon='trash-o' hide={!todo.done} onClick={()=> props.remove(todo)}></IconButton>
            </td>
            </tr>
        ))
           
    }
    
    return(
    
    <table className='table'>
        <thead>   
        <tr>
            <th>Descrição:</th>
            <th className='tableActions'>Ações:</th> 
        </tr>
        </thead> 
        <tbody>
            {renderRows()}
        </tbody>    
    </table>
    )
    
}


const mapStateToProps = state =>({list: state.todo.list}) // esse todo vem da chave do meu reducer // passa o atributo que está sendo usado no componente

const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending,remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
    

    
// sem a key gera uma mensagem de advertência, id gerado pelo mongo

// <IconButton style='danger' icon='trash-o' onClick={()=> props.handleRemove(todo)}></IconButton> passa a função de remover no onClick(todo) é o elemento que eu quero remover