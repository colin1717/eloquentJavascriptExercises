/*
Chess Board
Write a program that creates a string that represents and 8 x 8 grid, using newline characters to separate lines.
At each position of the grid there is either a space of a “#’ character.  The characters should form a chess board.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generate this pattern, define a variable size = 8 and change the program so that it
works for any size, outputting a grid of the given width and height.
 */

function makeBoard(size) {
 const startSpace = "# ";
 const altSpace = " #";

 var startLine = "";
 var altLine = "";

 var board = "";

 for (var i = 0; i < size; i=i+2) {
   startLine += startSpace;
 }

 for (var j = 0; j < size; j=j+2) {
   altLine += altSpace;
 }

 for (var q = 0; q < size; q++) {
   if ( q % 2 ==  0 ) {
     board += startLine + "\n";
     board
   } else {
     board += altLine + "\n";
   }
 }

 console.log(board)
}
