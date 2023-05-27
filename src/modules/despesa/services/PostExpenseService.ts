import Conta from "@modules/conta/typeorm/entities/Conta";
import Despesa from "../typeorm/entities/Despesa";
import { TipoLancamentoEnum } from "@shared/models/TipoLancamentoEnum";
import AppError from "@shared/errors/AppError";

interface IRequest {
  tipoLancamento: number,
  valor: number,
  vencimento: Date,
  conta: Conta,
  contaSecundario: Conta,
  contaTransferencia: Conta
}

export default class PostExpenseService{

  public async execute( request: IRequest): Promise<Despesa> {
    switch (request.tipoLancamento) {
      case TipoLancamentoEnum.ABERTO:
        break;
      case TipoLancamentoEnum.PAGO:
        break;
      case TipoLancamentoEnum.TRANSFERIR:
        break;
      case TipoLancamentoEnum.DIVIDIR_PARCELA:
        break;
      case TipoLancamentoEnum.DIVIDIR_VALOR:
        break;
      case TipoLancamentoEnum.DIVIDIR_TRANSFERIR:
        break;
     default:
      throw new AppError('Opção não existem verifique com a Administração');
    }

    return new Despesa()
  }

}
