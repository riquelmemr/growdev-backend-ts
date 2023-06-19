import Employee from "./employee.class";

interface IManager {
  receiveBonus(): void;
  updateData(newName: string, newCpf: string): void;
  showData(): void;
}

class Manager extends Employee implements IManager {
  additionalBonus: number;

  constructor(name: string, cpf: string, salary: number, additionalBonus: number) {
    super(name, cpf, salary);
    this.additionalBonus = additionalBonus; 
  }

  receiveBonus() {
    this.salary += this.additionalBonus;
  }

  updateData(newName: string, newCpf: string) {
    this.name = newName;
    this.cpf = newCpf;
  }

  showData() {
    console.log(this.name, this.cpf);
  }
}

export default Manager;