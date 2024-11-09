import { useSelector } from "react-redux";


function CounterValue(){

    const state = useSelector((state)=> state);
    const {countValue} = state;

    console.log(state);

    
    return <p>Counter value is {countValue}</p>
}

export default CounterValue;;