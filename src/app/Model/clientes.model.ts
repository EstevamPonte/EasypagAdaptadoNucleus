import {Cliente} from './cliente.mode'

export class Clientes {
  constructor(
    public count: number,
    public limit: number,
    public page: number,
    public pagesTotal: number,
    public results: Array<Cliente>
    ){}
}
