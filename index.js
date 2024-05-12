const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "What text should go inside the svg (at most- 3 characters)?",
      validate: function (answer) {
        if (answer.length > 3) {
          return false;
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message:
        "What color should the text be (must be a valid color or a hexadecimal)?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape should the logo be?",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color should the svg be?",
    },
  ])

  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
      case "Circle":
        shape = new Circle();
        break;
      default:
        console.log("Invalid shape choice");
    }
    shape.setText(answers.characters);
    shape.setColor(answers.shapeColor);
    const svgOutput = shape.render();

    // Write the SVG output to a file named logo.svg
    fs.writeFile("logo.svg", svgOutput, (err) => {
      if (err) {
        console.error("Error generating SVG file:", err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  });
