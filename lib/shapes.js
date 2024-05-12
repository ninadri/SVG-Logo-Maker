// we are creating a shape class that provides values oƒ text, textColor, shapeColor
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// this declares a new class called Triangle but has the same properties oƒ the Shape class
class Triangle extends Shape {
  //Generates the svg code when our ƒile ƒor when a Triangle is selected
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
              <text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}

// this declares a new class called Square but has the same properties oƒ the Shape class
class Square extends Shape {
  //Generates the svg code when our ƒile ƒor when a Square is choosen
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" x="20" y="20" rx="0" ry="0" fill="${this.shapeColor}"/>
              <text x="120" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}

// this declares a new class called Circle but has the same properties oƒ the Shape class
class Circle extends Shape {
  //Generates the svg code when our ƒile ƒor when a Circle is choosen
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
             <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
             <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
  }
}

// exports the above classes ƒor this ƒile
module.exports = { Triangle, Square, Circle };
