import { INCREMENT, DECREMENT, INCREMENT_PAR } from '../type';

const initialState = {
  counter: 0
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function counter (state = initialState, action) {
  switch (action.type) {
   
    case INCREMENT:
      return {...state, counter: state.counter + 1};

    case DECREMENT:
      return {...state, counter: state.counter - 1};

    case INCREMENT_PAR:
      return {...state, counter: state.counter % 2 !== 0 ? state.counter + 1 : state.counter}

    default:
      return state
  }
};

export default counter;












// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {...state, count: state.count + 1}
//     // completa para este caso
//     case DECREMENT:
//       return {...state, count: state.count + 2}
//     // Fill para este otro
//     default:
//       return state;
//   }
// };