'use client'
interface BotaomenosProps {
    num: number,
    num2: number;
}

export default function Botaomenos({ num, num2 }: BotaomenosProps) {
    function menos() {
        const resultado = num - num2;
        alert(`O resultado da subtração é ${resultado}`);
    }

    return (
        <>
            <button onClick={() => { menos() }}>Subtrair</button>
        </>
    )
}

