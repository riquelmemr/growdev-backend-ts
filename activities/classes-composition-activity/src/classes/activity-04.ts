class Universidade {
  private _nome: string;
  private _local: string;

  constructor(nome: string, local: string) {
    this._nome = nome;
    this._local = local;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get local(): string {
    return this._local;
  }

  set local(local: string) {
    this._local = local;
  }
}

class Pessoa {
  private _nome: string;
  private _dataDeNascimento: string;
  private _universidade: Universidade;

  constructor(nome: string, dataDeNascimento: string, universidade: Universidade) {
    this._nome = nome;
    this._dataDeNascimento = dataDeNascimento;
    this._universidade = universidade;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get dataDeNascimento(): string {
    return this._dataDeNascimento;
  }

  set dataDeNascimento(dataDeNascimento: string) {
    this._dataDeNascimento = dataDeNascimento;
  }

  get universidade(): Universidade {
    return this._universidade;
  }

  set universidade(universidade: Universidade) {
    this._universidade = universidade;
  }

  public imprimeDados(): void {
    console.log(this._nome, this._dataDeNascimento, this._universidade);
  }
}

export { Pessoa, Universidade };

