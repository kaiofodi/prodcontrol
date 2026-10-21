import { OrdemProducao } from '../model/ordemProducao.js';
import { cadastrarOrdemProducao, listarOrdemProducao, atualizarOrdemProducao, excluirOrdemProducao, buscarOrdemProducaoPorId } from '../repository/ordemProducaoRepository.js';

export function cadastrarOrdemProducaoController(numero, produto, quantidade, prazo){
    const ordemProducao = new OrdemProducao(numero, produto, quantidade, prazo);

    cadastrarOrdemProducao(ordemProducao);

    return 'Ordem de produção cadastrada com sucesso!';
}

export function listarOrdemProducaoController(){
    const ordensProducao = listarOrdemProducao();

    console.log(ordensProducao);
    return ordensProducao;
}

export function atualizarOrdemProducaoController(indice, numero, produto, quantidade, prazo){
    const ordemProducao = new OrdemProducao(numero, produto, quantidade, prazo)

    atualizarOrdemProducao(indice, ordemProducao)

    return 'Ordem de Producao atualizado com sucesso!'
}

export function excluirOrdemProducaoController(indice){
    excluirOrdemProducao(indice)
}