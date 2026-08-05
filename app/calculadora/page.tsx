'use client'
import { useState } from "react";
import Botaomais from "../components/Botaomais";
import Botaomenos from "../components/Botaomenos";
import Botaovezes from "../components/Botaovezes";
import Botaodividido from "../components/Botaodividido";
import Botaotrapezio from "../components/Botaotrapezio";

export default function Soma() {
    const [num, setNum] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [num3, setNum3] = useState<number>(0);
    const [tipoCalc, setTipoCalc] = useState<string>('1');

    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200/60 p-6 space-y-6">

                {/* Cabeçalho */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
                        Cálculos
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">
                        Selecione a modalidade e insira os dados
                    </p>
                </div>

                {/* Alternador de abas */}
                <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                        onClick={() => setTipoCalc('1')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${tipoCalc === '1'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-800'
                            }`}
                    >
                        Cálculo de números
                    </button>
                    <button
                        onClick={() => setTipoCalc('2')}
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${tipoCalc === '2'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-800'
                            }`}
                    >
                        Cálculo de área
                    </button>
                </div>

                {/* Conteúdo Dinâmico */}
                {tipoCalc === '1' ? (
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                    Número 1
                                </label>
                                <input
                                    type="number"
                                    placeholder="Digite o primeiro número"
                                    onChange={(e) => setNum(Number(e.target.value))}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                    Número 2
                                </label>
                                <input
                                    type="number"
                                    placeholder="Digite o segundo número"
                                    onChange={(e) => setNum2(Number(e.target.value))}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Grade para botões de operações simples */}
                        <div className="pt-2 grid grid-cols-2 gap-3">
                            <Botaomais num={num} num2={num2} />
                            <Botaomenos num={num} num2={num2} />
                            <Botaovezes num={num} num2={num2} />
                            <Botaodividido num={num} num2={num2} />
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                    Base Maior (Número 1)
                                </label>
                                <input
                                    type="number"
                                    placeholder="Digite a base maior"
                                    onChange={(e) => setNum(Number(e.target.value))}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                    Base Menor (Número 2)
                                </label>
                                <input
                                    type="number"
                                    placeholder="Digite a base menor"
                                    onChange={(e) => setNum2(Number(e.target.value))}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                                    Altura (Número 3)
                                </label>
                                <input
                                    type="number"
                                    placeholder="Digite a altura"
                                    onChange={(e) => setNum3(Number(e.target.value))}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-800 placeholder-slate-400 bg-slate-50/50 transition-all"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <Botaotrapezio num={num} num2={num2} num3={num3} />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}