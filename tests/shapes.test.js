const { Triangle, Square, Circle } = require("../lib/shapes");

describe("Triangle", () => {
  test("should render a svg file with a triangle shape", () => {
    const item = new Triangle();
    item.setColor("blue");
    item.setText("ABC");
    const expectedSVG = `<svg width="300" height="200">
                           <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
                           <text x="150" y="100" text-anchor="middle" fill="blue">ABC</text>
                         </svg>`;
    expect(item.render()).toEqual(expectedSVG);
  });
});

describe("Square", () => {
  test("should render a svg file with a square shape", () => {
    const item = new Square();
    item.setColor("red");
    item.setText("123");
    const expectedSVG = `<svg width="300" height="200">
                           <rect width="200" height="100" x="20" y="20" rx="20" ry="20" fill="red"/>
                           <text x="100" y="60" text-anchor="middle" fill="red">123</text>
                         </svg>`;
    expect(item.render()).toEqual(expectedSVG);
  });
});

describe("Circle", () => {
  test("should render a svg file with a circle shape", () => {
    const item = new Circle();
    item.setColor("green");
    item.setText("XYZ");
    const expectedSVG = `<svg width="300" height="200">
                           <circle cx="150" cy="100" r="80" fill="green"/>
                           <text x="150" y="100" text-anchor="middle" fill="green">XYZ</text>
                         </svg>`;
    expect(item.render()).toEqual(expectedSVG);
  });
});
