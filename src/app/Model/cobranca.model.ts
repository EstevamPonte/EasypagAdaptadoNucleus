import {Items} from './items.model'

export class Cobranca {
  constructor(
    public dueDate: string,
    public items: Array<Items>,
    public customer: {
      id: string
    }
  ){}
}
