const { Triangle, Square, Circle } = require("../lib/shapes");

// creating a test ƒor triangle
describe("Triangle", () => {
  test("should render a svg file with a black ƒilled triangle with red colored SVG text ", () => {
    const text = "SVG";
    const textColor = "red";
    const shapeColor = "black";
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150, 18 244, 182 56, 182" fill="black"/>
              <text x="150" y="140" font-size="60" text-anchor="middle" fill="red">SVG</text>
            </svg>`;
    const item = new Triangle(text, textColor, shapeColor);
    expect(item.render()).toEqual(expectedSVG);
  });
});

// creating a test ƒor square
describe("Square", () => {
  test("should render a svg file with a pink square shape with white colored text HEY ", () => {
    const text = "HEY";
    const textColor = "white";
    const shapeColor = "pink";
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" x="20" y="20" rx="0" ry="0" fill="pink"/>
              <text x="120" y="120" font-size="60" text-anchor="middle" fill="white">HEY</text>
            </svg>`;
    const item = new Square(text, textColor, shapeColor);
    expect(item.render()).toEqual(expectedSVG);
  });
});

// creating a test ƒor a circle
describe("Circle", () => {
  test("should render a svg file with a green circle shape with yellow colored text PUP", () => {
    const text = "PUP";
    const textColor = "yellow";
    const shapeColor = "green";
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
             <circle cx="150" cy="100" r="80" fill="green"/>
             <text x="150" y="120" font-size="60" text-anchor="middle" fill="yellow">PUP</text>
            </svg>`;
    const item = new Circle(text, textColor, shapeColor);
    expect(item.render()).toEqual(expectedSVG);
  });
});
