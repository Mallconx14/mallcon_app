'use client'

interface cardEmpresa {
    empresa: string,
    produto: string,
    preco: number
}

export default function CardEmpresa({ empresa, produto, preco }: cardEmpresa) {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <span className="card-tag">EMPRESA</span>
                    <h3 className="card-empresa">{empresa}</h3>
                    <p className="card-produto">{produto}</p>
                    <p className="card-preco">{preco}R$</p>
                </div>
            </div>
        </>
    )
}