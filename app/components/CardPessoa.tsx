'use client'

interface cardPessoa {
    nome: string,
    idade: number,
    altura: number
}

export default function CardPessoa({ nome, idade, altura }: cardPessoa) {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <span className="card-tag">PESSOA</span>
                    <h3 className="card-nome">{nome}</h3>
                    <p className="card-idade">{idade} anos de idade</p>
                    <p className="card-altura">{altura} cm</p>
                </div>
            </div>
        </>
    )
}