'use client'
interface BotaotrapezioProps {
    num: number,
    num2: number,
    num3: number;
}

export default function Botaotrapezio({ num, num2, num3 }: BotaotrapezioProps) {
    function trapezio() {
        const resultado = ((num + num2) * num3) / 2;
        alert(`A área do trapézio é ${resultado}`);
    }

    return (
        <>
            <button onClick={() => { trapezio() }}>Área do trapézio</button>
        </>
    )
}