import React, {Component} from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'
import {add,changeDescription, search, clear} from './todoActions'




class TodoForm extends Component{
    
    
    constructor(props){
        
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
     }
    
    
    
    
    componentWillMount(){ //esse método é tipo uma promisse para o redux, só pode ser acessado através de classe
        
        this.props.search() // quando entrarmos no componente, a lista já irá vir carregada (quando abrirmos a aplicação)
        //temos acesso a search pq mapeamos ele no dispatch e iremos até a action que importamos
    }
    
    keyHandler(e){
        const {add,clear, search, description} = this.props
        
        if(e.key === 'Enter'){  //no caso de classe, toda vez que formos acessar props, temos que usar o this, e para que o this aponte para o componente, temos que amarrar ele no construtor
            e.shiftKey ? search() : add(description) //se shift estiver apertado junto ao enter o método de busca é chamado senão, se for apenas o enter ele adiciona
        }else if(e.key === 'Escape'){
            clear()
        }
    }
    
    
    
    render(){
     const {add, search, description} = this.props //pode colocar o clear tbm
        
    return (
        
        <div role='form' className='todoForm'>
        <Grid cols= '12 9 10'>
        <input id='description' className='form-control' onChange={this.props.changeDescription} onKeyUp={this.keyHandler} placeholder='Adicione uma Tarefa Meu Truta Sundae!' value={this.props.description}></input>    
        </Grid>
        
        <Grid cols= '12 3 2' >
            <IconButton style='primary' icon='plus' onClick={() =>add(description)}></IconButton>
            <IconButton style='info' icon='search' onClick={search}></IconButton>
             <IconButton style='default' icon='close' onClick={this.props.clear}></IconButton>
             
         
        </Grid>
    </div>
        
        )
    }
    
}



const mapStateToProps = state =>({
    
    description: state.todo.description //todo e description são definidos no reducer
})

const mapDispatchToProps = dispatch => bindActionCreators({add,changeDescription, search, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)