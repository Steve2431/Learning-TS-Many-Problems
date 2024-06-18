import React, { useEffect, useState } from "react";
import { Button, Typography } from '@mui/material';
// import styles from './Game.module.css';


const gameOfChance : React.FC = () => {

    /* Juego de botones y azar */
    // TYPESCRIPT

   const [target, setTarget] = useState<number>(0);
   const [attempts, setAttempts] = useState<number>(3);
   const [message, setMessage] = useState<string>('');
   const [gameOver, setGameOver] = useState<boolean>(false);
   const [clickedButtons, setClickedButtons] = useState<Set<number>>(new Set());

   /* Sumar o agregar numeros a un state */
   useEffect(() => {
    setTarget(Math.floor(Math.random() * 10));
   }, [])

   const handlebuttonpositive = (index: number) => {
        if(gameOver || clickedButtons.has(index)) return;

        clickedButtons.add(index);
        setClickedButtons(new Set(clickedButtons))

        /* target hereda lo que index representa */
        if(index === target) {
            setMessage('¡YOU WIN!');
            setGameOver(true);
        } else {
            /* Disminucion de intentos por cada intento fallido */
            setAttempts(prev => prev - 1);
            if (attempts === 1) {
                /* target es igual a index */
                setMessage('¡Perdiste! El numero correcto era ' + (target + 1));
                setGameOver(true);
            } else {
                /* los intentos iran disminuyendo */
                setMessage(`intento fallido. Tienes ${attempts - 1} intento(s) restantes`)
            }
        }
   }

   /* Reinicio del juego state */
   const handleReset = () => {
        setTarget(Math.floor(Math.random() * 10));
        setAttempts(3);
        setMessage('');
        setGameOver(false);
        setClickedButtons(new Set());
   }

    return (
        <div>
            <Typography>juego de botones</Typography>
            <Typography>{message}</Typography>
            <div>
                {/* A veces los Array/maps necesitan length */}
                {Array.from({ length: 10}, (_, index) => (
                    <Button
                    /* no importa si es button, ul, li, etc, siempre debera tener un key con un parametro */
                        key={index}
                        variant="contained"
                        // color="primary"
                        onClick={ () => handlebuttonpositive(index)}
                        disabled={gameOver || clickedButtons.has(index)}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>
            {gameOver && (
                <Button variant="contained" color="error" onClick={handleReset}>
                    Reiniciar
                </Button>
            )}
        </div>
    );
};

export default gameOfChance;