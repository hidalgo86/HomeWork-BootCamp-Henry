import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../actions/counterActions";

const Counter2 = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Contador Redux</h2>

            <nav>
                
                <button onClick={() => dispatch(increment())}>+1</button>
               
                <button onClick={() => dispatch(decrement())}>-1</button>
        
            </nav>

            <h3>{state.contador}</h3>

        </div>

    )
}

export default Counter2