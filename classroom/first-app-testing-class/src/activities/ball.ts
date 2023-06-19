class Ball {
  color: string;
  circunference: number;
  material: string;

  constructor(color: string, circunference: number, material: string) {
    this.color = color;
    this.circunference = circunference;
    this.material = material;
  }

  changeColor(color: string): void {
    this.color = color;
  }

  showColor() {
    console.log(`A cor da bola é ${this.color}.`);
  }
}

export default Ball;