


    var randomNumber1=Math.floor(Math.random()*6)+1;

    var randomImage="D"+randomNumber1+".png";
    

    var randomImageSrc=(randomImage);
  
 
    var img1=document.getElementById("DOne");
    img1.setAttribute("src",randomImageSrc);
/*second dice*/




    var randomNumber2=Math.floor(Math.random()*6)+1;

    var randomImage="D"+randomNumber2+".png";
    
   
    var randomImageSrc=(randomImage);
  
 
    var img1=document.getElementById("img2");
    img1.setAttribute("src",randomImageSrc);

   if(randomNumber1>randomNumber2){
document.getElementById("hello").innerHTML="player 1 is win"

   }else if(randomNumber1===randomNumber2){
    document.getElementById("hello").innerHTML="Math is draw"
   }else{
    document.getElementById("hello").innerHTML="player 2 is win"
   }





