const { Triangle, Square, Circle } = require("../lib/shapes");

describe("Triangle", () => {
  test("should render a svg file with a black triangle shape with SVG text in the color red ", () => {
    const text = "SVG";
    const textColor = "red";
    const shapeColor = "black";
    const expectedSVG = `<svg width="300" height="200">
              <polygon points="150, 18 244, 182 56, 182" fill="black"/>
              <text x="150" y="100" text-anchor="middle" fill="red">SVG</text>
            </svg>`;
    const item = new Triangle([text, textColor, shapeColor]);
    expect(item.render()).toEqual(expectedSVG);
  });
});

describe("Square", () => {
  test("should render a svg file with a pink square shape with HEY text in the color white ", () => {
    const text = "HEY";
    const textColor = "white";
    const shapeColor = "pink";
    const expectedSVG = `<svg width="300" height="200">
              <polygon points="150, 18 244, 182 56, 182" fill="pink"/>
              <text x="150" y="100" text-anchor="middle" fill="white">HEY</text>
            </svg>`;
    const item = new Square([text, textColor, shapeColor]);
    expect(item.render()).toEqual(expectedSVG);
  });
});

describe("Circle", () => {
  test("should render a svg file with a green circle shape with PUP text in the color yellow ", () => {
    const text = "PUP";
    const textColor = "yellow";
    const shapeColor = "green";
    const expectedSVG = `<svg width="300" height="200">
              <polygon points="150, 18 244, 182 56, 182" fill="green"/>
              <text x="150" y="100" text-anchor="middle" fill="yellow">PUP</text>
            </svg>`;
    const item = new Circle([text, textColor, shapeColor]);
    expect(item.render()).toEqual(expectedSVG);
  });
});
