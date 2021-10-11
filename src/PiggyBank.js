
import React, {useState, Fragment} from 'react';


const PiggyBank = ({title}) => {

    const [total, setTotal] = useState(0);

    const deposit = () => {
        setTotal(total + 10);
    }

    return (
    <>   
        <h1>{title}</h1>
        <p>The total is: {total}</p>
        <button>Deposit</button>
    </>    
    )
}

export default PiggyBank;



