//feito para não ficar digitando col-xs, col-sm e col-md, apenas precisaremos colocar os números agr
import React, {Component} from 'react'

export default class Grid extends Component{
    
     toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        
        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`
        return classes
    }
    
    render(){
        
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        
        return (
        <div className = {gridClasses}>
            {this.props.children}
        </div>
        )
    }
}


// if(cols[0]) classes += `col-xs-${col[0]}` se o col-xs existir, irá pegar col-xs-'' e concatenará com o número digitado na coluna
//const gridClasses = this.toCssClasses(this.props.cols || 12) 

/*if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`*/ //nota: prestar atenção nos espaços, pois sem eles ficará 'col-xs-8col-md-10' ficará tudo junto e logo não funcionará 