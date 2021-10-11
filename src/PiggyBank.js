
import React, {useState, Fragment} from 'react';


const PiggyBank = ({title, depositAmount}) => {

    const [total, setTotal] = useState(0);

    const deposit = () => {
        setTotal(total + depositAmount);
    }

    const withdraw = () => {
        setTotal(total - depositAmount);
    }

    return (
    <>   
        <h1>{title}</h1>
        <p>The total is: {total}</p>
        <button onClick={() => deposit()}>Deposit</button>
        <button onClick={() => withdraw()}>Withdraw</button>
    </>    
    )
}

export default PiggyBank;



