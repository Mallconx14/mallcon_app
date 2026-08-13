'use client'

import { title } from "process"

interface cardProps {
    tag: string,
    title: string,
    description: string,
    botao: string
}

export default function ({ tag, title, description, botao }: cardProps) {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <span className="card-tag">{tag}</span>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <a href="#" className="card-btn">{botao}</a>
                </div>
            </div>
        </>
    )
}