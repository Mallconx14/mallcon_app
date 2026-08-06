'use client'
import { useState } from "react";

export default function Informacao() {
    const [orientacao, setOrientacao] = useState('');
    return (
        <>
            <h1>Informativo de animais</h1>
            <button onClick={() => setOrientacao('1')}>Leão</button>
            <button onClick={() => setOrientacao('2')}>Macaco</button>
            <button onClick={() => setOrientacao('3')}>Répteis</button>
            {orientacao == '1' &&
                <p>Deve ser mantida a distância mínima de 5 metros da jaula do leão, pois o animal pode atacar.</p>
            }
            {orientacao == '2' && 
                <p>Não alimente os macacos, pois a alimentação com itens industrializados pode prejudicar a saúde deles.</p>
            }
            {orientacao == '3' && 
                <p>Não use flash para fotografar os répteis, pois é prejudicial a saúde deles.</p>
            }
        </>
    );
}