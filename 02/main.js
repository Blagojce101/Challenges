// 2. Make a new object - cube with the help of a constructor. In it write
// methods for calculating area and perimeter.
// - Enter the size of the sides of the cube with the help of a prompt.
// Call on this object the appropriate methods for calculating the
// area and perimeter, which will print the results in a console.

// 6*a^2 - ses po a na kvadrat


function Cube (a) {
    this.side = a;

    this.calculateArea = function () {
        console.log(`The area of cube is ${Math.floor(6*Math.pow(this.side, 2))}`);
    }

    this.calculatePerimeter = function () {
        console.log(`The perimeter of cube is ${Math.floor(this.side * 12)}`)
    }
}

const cube1 = new Cube(2);
const cube2 = new Cube(+prompt("Enter a number to calculate area on Cube. :)"));

cube1.calculateArea();
cube1.calculatePerimeter();

cube2.calculateArea();
cube2.calculatePerimeter();
