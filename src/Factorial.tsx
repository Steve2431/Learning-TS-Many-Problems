import React, { useState } from 'react';
import {Typography} from '@mui/material';

const Factorial : React.FC = () => {

    const [number, setNumber] = useState<number>(0);
    const [result, setResult] = useState<number | null>(null);

    // matematica a programacion
    const factorial = (n: number) => {

        if (n === 0 || n === 1) {
            return 1;
        }

        let factorialResult = 1;

        for (let i = 2; i<=n; i++) {
            factorialResult *= i;
        }

        return factorialResult;
    }

    const handleCalculate = () => {
        setResult(factorial(number));
    }

    // parametro de handleChange posible parametro vanilla o react
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setNumber(value)
    }

    return(
        <div>
            <input placeholder='Inserte un numero' type="number" value={number} onChange={handleChange} />

            <button className='btn' onClick={handleCalculate} >Calcular factorial</button>

            {result !== null && (
                <Typography>
                    numero a factoriar {number} resultado {result}
                </Typography>
            )}
        </div>
    );
};

export default Factorial;