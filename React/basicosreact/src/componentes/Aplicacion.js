import React, {Component} from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component{

    render(){

        const productos =[
            {nombre: 'Libro',precio:200},
            {nombre: 'Disco',precio:100},
            {nombre: 'Guitarra',precio:320},
            {nombre: 'Peces',precio:850},
            {nombre: 'Perros',precio:123}
        ]

        return (
            <div>
                <Header
                    titulo="Tienda Virtual"
                />

                <Productos
                    productos={productos}
                />

                <Footer/>
            </div>
        )
    }

}

export default Aplicacion;