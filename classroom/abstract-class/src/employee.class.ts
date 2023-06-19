abstract class Employee {
  private _name: string;
  private _cpf: string;
  protected salary: number;

  constructor(name: string, cpf: string, salary: number) {
    this._name = name;
    this._cpf = cpf;
    this.salary = salary;
  }
  
  public receiveSalary(salary: number) {
    this.salary = salary;
  }

  // todos os setters e getters devem ter o mesmo tipo de acessibilidade do atributo, caso o nome seja igual
  protected get name(): string {
    return this._name;
  }

  protected set name(name: string) {
    this._name = name;
  }

  protected get cpf(): string {
    return this._cpf;
  }

  protected set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

export default Employee;