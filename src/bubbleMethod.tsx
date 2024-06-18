import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

export const App: React.FC = () => {
  
  const [valorInput, setValorInput] = useState<string>('');
  const [array, setArray] = useState<number[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput(e.target.value);
  }

    /* bubbleSort - ordenamiento de burbuja */
    const bubbleSort = (num: number[]) : number[] => {
        const len = num.length;
            let swapped;
            do {
                swapped = false;
                for (let i = 0; i < len - 1; i++) {
                    if (num[i] > num [i + 1]) {
                        const temp = num[i];
                            num[i] = num[i + 1];
                                num[i + 1] = temp;
                                    swapped = true;
                    }
                }
            } while (swapped)

        return num;
    }
    // 1000000, 2, 16, 24, 21, 25, 5000, 100, 1, -2

  /* como generar un array de numeros con input */
  const handleSplitInput = () => {
    if (valorInput.trim() !== '') {
      const newArray = valorInput.split(',').map(item => parseInt(item.trim(), 10));
      const sortedArray = bubbleSort(newArray)
      setArray(sortedArray);
      setValorInput('')
    }
  }

  return (
    <>
      <div>
        <h1>Generar Array desde Input</h1>
          <input
            type="text"
            value={valorInput}
            onChange={handleInputChange}
            placeholder="Ingresa valores separados por comas"
          />
          <button onClick={handleSplitInput}>Dividir y Agregar al Array</button>
          <h2>Array Generado:</h2>
          <ul>
            {array.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
          </ul>
    </div>
    </>
  )
}