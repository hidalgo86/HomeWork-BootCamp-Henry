import React, { Component } from "react";
import { connect} from 'react-redux';
import { increment, decrement, par } from '../actions/counterActions';

class Counter1 extends Component {
   
    render() {

        return (
           
            <p>
                Clickeado: {this.props.contador} veces
                <nav>
                <button onClick={this.props.increment}>
                    + 1 
                </button>

                <button onClick={this.props.par}>
                    par  
                </button>
               
                <button onClick={this.props.decrement}>
                    - 1  
                </button>
                </nav>
            </p>
         
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contador: state.contador.counter
    };
};

export default connect(mapStateToProps, { increment, decrement, par })(Counter1);

// export default Counter1