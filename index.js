var libraryLetter = prompt("Hello! What is your library letter?");

var a = "A depends on B C E F G H";

var b = "B depends on C E F G H";

var c = "C depends on G";

var d = "D depends on A B C E F G H";

var e = "E depends on F H";

var f = "F depends on H";

var g = "G is not dependent on any other library";

var h = "H is not dependent on any other library";

var inputA = [a, b, c, e, f];

var inputB = [b, c, e, f];

var inputD = [d, inputA, inputB];

switch (libraryLetter) {
  case 'A':
    console.log(inputA);
    break;
  case 'B':
    console.log(inputB);
    break;
  case 'C':
    console.log(c);
    break;
  case 'D':
    console.log(inputD);
    break;
  case 'E':
    console.log(e);
    break;
  case 'F':
    console.log(f);
    break;
  case 'G':
    console.log(g);
    break;
  case 'H':
    console.log(h);
    break;
  default:
    console.log('Sorry, we do not recognize that library');
}
