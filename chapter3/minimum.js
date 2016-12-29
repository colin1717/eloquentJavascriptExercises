/* Minimum
The previous chapter introduced the standard function Math.min that returns the smallest argumnet.  We can do that
ourselves now.  Write a function min that takes two argumnets adn turns their minimum.
 */

 function min(a,b) {
   var minimum = a;
   if (b < minimum) { minimum = b}
   return minimum
 }
