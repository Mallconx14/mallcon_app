'use client'

interface cardLocal {
    nomeLocal: string,
    descricao: string,
    utilizacao: string
}

export default function CardLocal({ nomeLocal, descricao, utilizacao}: cardLocal) {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <span className="card-tag">LOCAL</span>
                    <h3 className="card-nomeLocal">{nomeLocal}</h3>
                    <p className="card-descricao">{descricao}</p>
                    <p className="card-utilizacao">{utilizacao}</p>
                </div>
            </div>
        </>
    )
}