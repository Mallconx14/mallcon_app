'use client'
import { useState } from "react";
import BotaoCadastrarPF from "../components/BotaoCadastrarPF";
import BotaoCadastrarPJ from "../components/BotaoCadastrarPJ";

export default function Cadastro() {
    // Seleção de tipo de cadastro ('PF' ou 'PJ')
    const [tipoPessoa, setTipoPessoa] = useState<string>('PF');

    // Estados para Pessoa Física
    const [nome, setNome] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [dataNascimento, setDataNascimento] = useState<string>('');
    const [nomePai, setNomePai] = useState<string>('');
    const [nomeMae, setNomeMae] = useState<string>('');

    // Estados para Pessoa Jurídica
    const [cnpj, setCnpj] = useState<string>('');
    const [nomeFantasia, setNomeFantasia] = useState<string>('');
    const [dataAbertura, setDataAbertura] = useState<string>('');
    const [razaoSocial, setRazaoSocial] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');

    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200/60 p-6 space-y-6">
                
                {/* Cabeçalho */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
                        Formulário de Cadastro
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Selecione o tipo de perfil para preencher os dados
                    </p>
                </div>

                {/* Seleção de Tipo de Pessoa */}
                <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                        type="button"
                        onClick={() => setTipoPessoa('PF')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                            tipoPessoa === 'PF'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        Pessoa Física
                    </button>
                    <button
                        type="button"
                        onClick={() => setTipoPessoa('PJ')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                            tipoPessoa === 'PJ'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        Pessoa Jurídica
                    </button>
                </div>

                {/* Formulário Condicional */}
                {tipoPessoa === 'PF' ? (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                placeholder="Digite o nome completo"
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                CPF
                            </label>
                            <input
                                type="text"
                                placeholder="000.000.000-00"
                                onChange={(e) => setCpf(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Data de Nascimento
                            </label>
                            <input
                                type="date"
                                onChange={(e) => setDataNascimento(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Nome do Pai
                            </label>
                            <input
                                type="text"
                                placeholder="Digite o nome do pai"
                                onChange={(e) => setNomePai(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Nome da Mãe
                            </label>
                            <input
                                type="text"
                                placeholder="Digite o nome da mãe"
                                onChange={(e) => setNomeMae(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div className="pt-2">
                            <BotaoCadastrarPF
                                nome={nome}
                                cpf={cpf}
                                dataNascimento={dataNascimento}
                                nomePai={nomePai}
                                nomeMae={nomeMae}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                CNPJ
                            </label>
                            <input
                                type="text"
                                placeholder="00.000.000/0001-00"
                                onChange={(e) => setCnpj(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Razão Social
                            </label>
                            <input
                                type="text"
                                placeholder="Razão social da empresa"
                                onChange={(e) => setRazaoSocial(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Nome Fantasia
                            </label>
                            <input
                                type="text"
                                placeholder="Nome fantasia da empresa"
                                onChange={(e) => setNomeFantasia(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Data de Abertura
                            </label>
                            <input
                                type="date"
                                onChange={(e) => setDataAbertura(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Endereço
                            </label>
                            <input
                                type="text"
                                placeholder="Rua, número, bairro, cidade - UF"
                                onChange={(e) => setEndereco(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                Telefone
                            </label>
                            <input
                                type="tel"
                                placeholder="(00) 00000-0000"
                                onChange={(e) => setTelefone(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all text-sm"
                            />
                        </div>

                        <div className="pt-2">
                            <BotaoCadastrarPJ
                                cnpj={cnpj}
                                nomeFantasia={nomeFantasia}
                                dataAbertura={dataAbertura}
                                razaoSocial={razaoSocial}
                                endereco={endereco}
                                telefone={telefone}
                            />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}