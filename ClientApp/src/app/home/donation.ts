export class Donation {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public amount: number,
    public cc: string,
    public fee: number,
    public total: number
 ) { }
}
