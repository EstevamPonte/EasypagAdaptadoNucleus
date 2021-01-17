export class Cliente {
  constructor(
    public name: string,
    public email: string,
    public phoneNumber: string,
    public docNumber: string,
    public address: {
      cep: string,
      uf: string,
      city: string,
      area: string,
      addressLine1: string,
      streetNumber: string,
    }
    ){}
}