import React, { Component } from "react";
import { connect} from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

class Counter extends Component {
    // constructor(props)
    // super(props){
    // const state = useSelector((state) => state);

    // const dispatch = useDispatch()
    // }
    

    // Extra Credit
    incrementIfOdd = () => {
      //Implementar una función de incremento que sólo aumenta si el valor del contador es impar
    };
    // Extra Credit
    incrementAsync = () => {
        //  Implementar una función de incremento que aumenta después de esperar un segundo
    };

    render() {
        // Completa las funciones onClick de los botones
        // Al hacer clic en estos botones, el recuento debe disminuir o aumentar en consecuencia
        return (
            <React.StrictMode>
            <p>
                Clickeado: {this.props.contador} veces
                <button onClick={increment}>
                    +  {/* Incremeta */}
                </button>
                <button onClick={() => {/* Completar */}}>
                    - 1  {/* Decrementa */}
                </button>
                 {/* Si quieres hacer los extra credit puede descomentar las lineas de abajo */}
                {/* <button onClick={this.incrementIfOdd}>
                    incrementa si es impar
                </button>
                <button onClick={this.incrementAsync}>
                    Incrementa despues de un segundos
                </button>  */}
            </p>
            </React.StrictMode>
        );
    }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
export default connect(mapStateToProps, { increment, decrement })(Counter);
