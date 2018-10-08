class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue.toString();//
  }

  add(number) {
    this.value += ` + ${number.toString()}`;
    return this;
  }

  subtract(number) {
    this.value += ` - ${number.toString()}`;
    return this;

  }

  multiply(number) {
    this.value += ` * ${number.toString()}` ;
    return this;

  }

  devide(number) {
    this.value += ` / ${number.toString()}`;
    return this;

  }

  pow(number) {
    this.value += ` ** ${number.toString()}`;
    return this;
  }
 
  valueOf() {
    return eval(this.value);
  }
}

module.exports = SmartCalculator;