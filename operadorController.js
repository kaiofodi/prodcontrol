import { Operador } from '../model/operador.js';
import { cadastrarOperador, listarOperadores, atualizarOperador, excluirOperador, buscarOperadorPorId } from '../repository/operadorRepository.js';

export function cadastrarOperadorController(matricula, nome, funcao, turno){
    const operador = new Operador(matricula, nome, funcao, turno);

    cadastrarOperador(operador);

    return 'Operador cadastrado com sucesso!';
}

export function listarOperadoresController(){
    const operadores = listarOperadores();
    console.log(operadores);
    return operadores;
}

export function atualizarOperadorController(indice, matricula, nome, funcao, turno){
    const operador = new Operador(matricula, nome, funcao, turno);

    atualizarOperador(indice, operador);

    return 'Operador atualizado com sucesso!';
}

export function excluirOperadorController(indice){

    excluirOperador(indice);
    return 'Operador excluído com sucesso!';
}

export function buscarOperadorPorIdController(indice){
    const operador = buscarOperadorPorId(indice);
    console.log(operador);
    return operador;
}

export function ativarOperadorController(indice){
    const operador = buscarOperadorPorId(indice);
    operador.ativar();
    return 'Operador ativado com sucesso!';
}

export function desativarOperadorController(indice){
    const operador = buscarOperadorPorId(indice);
    operador.desativar();
    return 'Operador desativado com sucesso!';
}