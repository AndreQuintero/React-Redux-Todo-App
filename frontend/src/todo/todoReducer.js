const INITIAL_VALUE = {
        
        description:'',
        list: []
    }

export default (state = INITIAL_VALUE, action) => {
    
    
    switch(action.type){
            
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
            
        case 'TODO_SEARCHED':
            return{...state, list: action.payload} //.data é quando vc quer alguma requisição do banco, não tem mais o .data pq colocamos no action
        
        
        case 'TODO_CLEAR':
                return{...state, description:''} // quando eu adiciono ou apago, ele chama essa ação
        default:
            return state
            
         }
    
    
}