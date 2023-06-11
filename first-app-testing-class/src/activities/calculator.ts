class Calculator {
  history: string[] = [];
  
  sum(a: number, b: number): number {
    this.history.push(`${a} + ${b} = ${a + b}`);
    return a + b;
  }

  subtract(a: number, b: number): number {
    this.history.push(`${a} - ${b} = ${a - b}`);
    return a - b;
  }

  multiply(a: number, b: number): number {
    this.history.push(`${a} * ${b} = ${a * b}`);
    return a * b;
  }

  divide(a: number, b: number): number {
    this.history.push(`${a} / ${b} = ${a / b}`);
    return a / b;
  }

  getHistory(): string[] {
    return this.history;
  }
}

export default Calculator;