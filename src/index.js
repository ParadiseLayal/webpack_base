// ES6 daima
// ES6模块化
// 压缩代码
const num = (num1, num2) => {
  return num1 + num2
}  
const result = num(5, 10)
console.log(result)


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(this)
  }
}

const animal = new Animal('边牧', 8)
console.log(animal)
console.log('hello loayal')
