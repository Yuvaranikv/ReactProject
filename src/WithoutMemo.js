import { useState } from 'react'

function WithoutMemo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const isEven = () => {
        let i = 0
        //arbitrarily slowing down function
        while (i < 2000000000) i++
        return countOne % 2 === 0
    }

    return (
        <div>
            <h1>Without Memo Exercise</h1>
            <div>
                <button onClick={() => setCountOne(countOne + 1)}>Count One - {countOne}</button>
                <span>{isEven() ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={() => setCountTwo(countTwo + 1)}>Count Two - {countTwo}</button>
            </div>
        </div>
    )
}

export default WithoutMemo