'use client'

interface BotaoCadastrarPFProps {
    nome: string;
    cpf: string;
    dataNascimento: string;
    nomePai: string;
    nomeMae: string;
}

export default function BotaoCadastrarPF({ nome, cpf, dataNascimento, nomePai, nomeMae }: BotaoCadastrarPFProps) {
    function cadastrar() {
        alert(`Cadastro de Pessoa Física realizado com sucesso!\n\n` +
            `Nome: ${nome}\n` + 
            `CPF: ${cpf}\n` +
            `Data de Nascimento: ${dataNascimento}\n` +
            `Nome do Pai: ${nomePai}\n` +
            `Nome da Mãe: ${nomeMae}\n`
        );
    }

    return (
        <button
            onClick={cadastrar}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition-all duration-200"
        >
            Cadastrar Pessoa Física
        </button>
    );
}