import React, {Component} from 'react';

import Producto from './Producto';


class Productos extends Component{

    render(){
        return (
            <div>
                <p>Listado de Productos </p>
                {Object.keys(this.props.productos).map(key =>(
                    <Producto
                        key={key}
                        producto={this.props.productos[key]}
                    />
                ))}
            </div>
        )
    }

}

export default Productos;