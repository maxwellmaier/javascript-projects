function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++) {
        line += '#'
    }
    return line
}


// console.log(makeLine(5));

function makeSquare (side){
    let square = "";
    for (let i = 0; i < side; i++){
        square += (makeLine(side) + "\n")
    }
    return square
}
// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width) + "\n")
    }
    return rectangle
}
// console.log(makeRectangle(5, 3));


function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++){
        stairs += (makeLine(i+1) + "\n")
    }
    return stairs.slice(0,-1)
}
// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
    let line = "";
    for (let i = 0; i < numSpaces; i++) {
        line += ' '
    };
    for (let i = 0; i < numChars; i++) {
        line += '#'
    };
    for (let i = 0; i < numSpaces; i++) {
        line += ' '
    };
    return line
}
// console.log(makeSpaceLine(3, 5))

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
// console.log(makeIsoscelesTriangle(5));

function makeUpsidedownIsosceleTriangle(height) {
    let triangle = '';
    for (let i = height - 1; i >= 0; i--) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
      }
      return triangle.slice(0, -1);
}
// console.log(makeUpsidedownIsosceleTriangle(5));

function makeDiamond(height){
    let diamond = ''
    diamond += (makeIsoscelesTriangle(height) + '\n' + makeUpsidedownIsosceleTriangle(height));
    return diamond;
}

console.log(makeDiamond(50))