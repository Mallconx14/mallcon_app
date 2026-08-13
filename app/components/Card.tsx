'use client'

interface cardProps {
    texto: string,
    texto2: string
}

export default function ({ texto, texto2 }: cardProps) {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <span className="card-tag">Tag do card</span>
                    <h3 className="card-title">Testando título do card</h3>
                    <p className="card-description">Descrição do card</p>
                    <a href="#" className="card-btn">Leia mais</a>
                </div>
            </div>
        </>
    )
}