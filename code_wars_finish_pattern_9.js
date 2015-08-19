function pattern(n){
 var output="";
 if(n < 1){
   return output;
 };
 if(n == 1){
   output = "1";
   return output;
 };
 function row(num){
   var line = "";
   for (var i = num; i > 0; i--){
     var g = String(i%10)
     if (i == num){
       line = g;
     } else {
       line = g.concat(line,g);
     };
   };
   return line;
 };
 function pad(preRow){
   var line = preRow;
   while (line.length < (2*n)-2){
     line =" ".concat(line," ");
   };
   return line;
 };
 function entomb(finRow){
   if (k == n) {
     output = finRow + "\n";
   } else if (k == 1){
     output = finRow.concat("\n",output,finRow);
   }  else {
     output = finRow.concat("\n",output,finRow,"\n");
   };
 };
 for (var k = n; k > 0; k--){
   entomb(pad(row(k)));
 };
 return output;
}