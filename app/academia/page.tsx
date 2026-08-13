import CardEmpresa from "../components/CardEmpresa";
import CardLocal from "../components/CardLocal";
import CardPessoa from "../components/CardPessoa";

export default function Academia() {
    return (
        <>
          <h1>Informações academia</h1>
          <CardPessoa nome="Hugo Carismático" idade={16} altura={180}></CardPessoa>

          <CardEmpresa empresa="Marilan" produto="Bolacha água e sal Marilan" preco={10}></CardEmpresa>

          <CardLocal nomeLocal="Vila do Sapo" descricao="Vila de Quintana onde reside Mirela" utilizacao="Troca de tiros, tráfico e etc."></CardLocal>
        </>
    )
}