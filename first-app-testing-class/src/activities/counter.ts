class Counter {
  value: number = 0;

  reset() {
    this.value = 0;
    console.log(`Contador zerado!`);
  }

  increment(){
    this.value++;
  }

  getValue(): string {
    return 'Contador: ' + this.value;
  }
}

export default Counter;