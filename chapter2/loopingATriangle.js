/* Write a loop that makes seven calls to console.log to output the following triangle
#
##
###
####
#####
######
#######
 */

 function triangleMaker(){
   for (var line = '#'; line.length < 8; line += "#"){
     console.log(line);
   }
 }
