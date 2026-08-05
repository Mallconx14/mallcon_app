'use client'
interface BotaovezesProps {
    num: number,
    num2: number;
}

export default function Botaovezes({ num, num2 }: BotaovezesProps) {
    function vezes() {
        const resultado = num * num2;
        alert(`O resultado da multiplicação é ${resultado}`);
    }

    return (
        <>
            <button onClick={() => { vezes() }}>Multiplicar</button>
        </>
    )
}