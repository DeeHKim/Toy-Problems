//Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
//Whole numbers and mixed fractions should be returned as improper fractions.


function fractionConverter (number) {
   var num = Math.abs(number);
   var a = num.toString();
   var index = a.indexOf('.');
   var whole = a.slice(0, index);
   var wholenum = parseInt(whole);
   var dec = a.slice(index + 1);
   var top = parseInt(dec);
   var bottom;
   var botstring = "1";
   if(index < 0 && number > 0){
     return a+"/"+"1";
   }
  if(index < 0 && number < 0){
     return "-"+a+"/"+"1";
   }
  if(number === 0){
    return "0/1";
  }
   for(var i = 0; i < dec.length; i++){
       botstring += "0";
     }
   bottom = parseInt(botstring);
   function simplify (count){
     var counter = 0;
   for(var i = 2; i <= count; i++){
     if(top%i === 0 && bottom%i === 0){
       top = top / i;
       bottom = bottom / i;
       counter++;
     }
   }
    if(counter > 0){
      simplify(top); 
    }
   }
  
  simplify(top);
  
  top = top + (bottom * wholenum);
  var x = top.toString();
  var y = bottom.toString();
  if(number > 0){
  return x+"/"+y;
  }
  if(number < 0){
  return "-"+x+"/"+y;
  }
}
