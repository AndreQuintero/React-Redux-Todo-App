import axios from 'axios'

const URL = 'http://localhost:3005/api/todos'

export const changeDescription = event => ({
    
    type:'DESCRIPTION_CHANGED',      //evento de ação quando mudarmos a descrição no input
    payload: event.target.value
    
})

export const search = () =>{
    
    return(dispatch, getState) =>{
        
        const description = getState().todo.description  //pega o estado atual que está no input
        const search = description ? `&description__regex=/${description}/` : ''
         //MIDDLEWARE DE PROMISSE USADO QUANDO A PÁGINA CARREGAR ver método no todoForm
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp=> dispatch({type:'TODO_SEARCHED',payload: resp.data}))
    }
}

/*export const add = (description) =>{
    
    const request = axios.post(URL, {description:description})
    
    //MIDDLEWARE MULTI, MAIS DE UMA AÇÃO NO ACTION
    return[
        
        {type: 'TODO_ADDED', payload: request},
        search()
    ]
}*/

//USAMOS 3 MIDDLEWARES AQUI, O DE PROMISSES, O MULTI, PARA PODERMOS USAR MAIS DE UMA AÇÃO(ADD E SEARCH) E O THUNK, QUE FAZ AS ACTIONS SEGUIREM EM ORDEM

export const add = (description) =>{
    
    return dispatch =>{
        
        axios.post(URL, {description:description})
            .then(resp=> dispatch(clear()))
            .then(resp=> dispatch(search()))
    }
}

export const markAsDone = (todo) => { //todo, parametro do todo(feito no reducer) que está em todoList
    
    return dispatch =>{
        
        axios.put(`${URL}/${todo._id}`,{...todo, done: true})
        .then(resp=>dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data})) //como será apenas um atributo do banco e a lógica é visual, não é necessário um reducer, esta linha de código tbm não é necessária
        .then(resp=> dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    
    return dispatch =>{
        
        axios.put(`${URL}/${todo._id}`,{...todo, done:false})
        .then(resp=>dispatch({type: 'TODO_MARKED_AS_PENDING', payload: resp.data}))
        .then(resp=> dispatch(search()))
    }
}

export const remove = (todo) =>{
    
    return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
    .then(resp=>dispatch({type:'TODO_DELETED', payload:resp.data}))
    .then(resp=> dispatch(search()))
    }
}

export const clear = () =>{
    //multi
    return [{type: 'TODO_CLEAR'},search()]
}