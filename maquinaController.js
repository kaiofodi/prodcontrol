import { Maquina } from '../model/Maquina.js';
import { cadastrarMaquina, listarMaquinas, atualizarMaquina, excluirMaquina, buscarMaquinaPorId } from '../repository/maquinaRepoistory.js';

export function cadastrarMaquinaController(codigo, nome, setor){
    const maquina = new Maquina(codigo, nome, setor);

    cadastrarMaquina(maquina);

    return 'Máquina cadastrada com sucesso!';
}

export function listarMaquinasController() {
    const maquinas = listarMaquinas();

    console.log(maquinas);
}

export function atualizarMaquinaController(indice, codigo, nome, setor){
    const maquina = new Maquina(codigo, nome, setor);

    atualizarMaquina(indice, maquina);

    return 'Maquina atualizada com sucesso!';
}

export function excluirMaquinaController(indice){
    excluirMaquina(indice);
    return 'Máquina excluída com sucesso!';
}

export function buscarMaquinaPorIdController(indice){
    const maquina = buscarMaquinaPorId(indice);
    console.log(maquina);
    return maquina;
}

