class Departamento5 {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }
}

class Universidade5 {
  private _nome: string;
  private _local: string;
  private _departamentos: Departamento5[];

  constructor(nome: string, local: string, departamentos: Departamento5[]) {
    this._nome = nome;
    this._local = local;
    this._departamentos = departamentos;
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

  get departamentos(): Departamento5[] {
    return this._departamentos;
  }

  addDepartamento(departamento: Departamento5): void {
    this._departamentos.push(departamento);
  }
}

class Pessoa5 {
  private _nome: string;
  private _dataDeNascimento: string;
  private _universidade: Universidade5;
  private _departamento: Departamento5;

  constructor(nome: string, dataDeNascimento: string, universidade: Universidade5, departamento: Departamento5) {
    this._nome = nome;
    this._dataDeNascimento = dataDeNascimento;
    this._universidade = universidade;
    this._departamento = departamento;
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

  get universidade(): Universidade5 {
    return this._universidade;
  }

  set universidade(universidade: Universidade5) {
    this._universidade = universidade;
  }

  get departamento(): Departamento5 {
    return this._departamento;
  }

  set departamento(departamento: Departamento5) {
    this._departamento = departamento;
  }

  public imprimeDados(): void {
    console.log(`Nome: ${this._nome}\nData de Nascimento: ${this._dataDeNascimento}\nUniversidade: ${this._universidade.nome}\nDepartamento: ${this._departamento.nome}`);
  }
}

export { Departamento5, Pessoa5, Universidade5 };

