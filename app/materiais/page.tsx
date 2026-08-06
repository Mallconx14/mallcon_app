'use client'
import { use, useState } from "react"

export default function Materiais() {
    const [ferramentas, setFerramentas] = useState('');
    return (
        <>
            <h1>Materiais de construção</h1>
            <button onClick={() => setFerramentas('1')}>Carriola</button>
            <button onClick={() => setFerramentas('2')}>Pá de bico</button>
            <button onClick={() => setFerramentas('3')}>Desempenadeira</button>
            {ferramentas == '1' &&
                <p>Função: transportar cargas pesadas, entulhos e materiais de construção em geral.</p>
            }
            {ferramentas == '2' &&
                <p>Função: cavar o solo e juntar ou carregar materiais soltos.</p>
            }
            {ferramentas == '3' &&
                <p>Função: aplicar, nivelar e dar acabamento em argamassa, reboco ou gesso.</p>
            }
        </>
    )
}