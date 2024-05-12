class Shape {
  constructor() {
    this.color = "";
    this.text = "";
  }
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200">
              <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
              <text x="150" y="100" text-anchor="middle" fill="${this.color}">${this.text}</text>
            </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200">
              <rect width="200" height="100" x="20" y="20" rx="20" ry="20" fill="${this.color}"/>
              <text x="100" y="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
            </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200">
             <circle cx="150" cy="100" r="80" fill="${this.color}"/>
             <text x="150" y="100" text-anchor="middle" fill="${this.color}">${this.text}</text>
            </svg>`;
  }
}

module.exports = { Triangle, Square, Circle };
