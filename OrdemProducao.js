export class OrdemProducao {
    numero;
    produto;
    quantidade;
    prazo;
    #status;

    constructor(numero, produto, quantidade, prazo){
        this.numero = numero;
        this.produto = produto;
        this.quantidade = quantidade;
        this.prazo = prazo;
        this.#status = 'pendente';
    }

    get statusOrdemProducao() {
        return this.#status;
    }

    iniciar(){
        this.#status = 'em andamento';
    }

    concluir(){
        this.#status = 'concluida';
    }
}
