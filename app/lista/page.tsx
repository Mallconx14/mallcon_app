export default function Lista() {
    let frutas = ['Maracujá', 'Laranja', 'Morango', 'Uva', 'Kiwi'];
    let alunos = [
        {
            nome: "Isaque",
            turma: "1° A"
        },
        {
            nome: "Mallcon",
            turma: "2° A"
        },
        {
            nome: "China",
            turma: "3° A"
        }
    ]

    return (
        <>
            <h1>Lista</h1>
            <ol type="I">
                {frutas.map((fruta, index) => (
                    <li key={index}>{fruta}</li>
                ))}
            </ol>
            <h1>Lista de alunos</h1>
            <ol>
                {alunos.map((aluno, index) => 
                    <li key={index}>
                        <p>{aluno.nome}</p>
                        <p>{aluno.turma}</p>
                    </li>
                )}
            </ol>
        </>
    )


}