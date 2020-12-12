
function main()
{

    //fetch image from DOM so that we can manipulate it and make it an 
    //event listener(macco)
    const image = document.getElementById("car");
    
    /*const weekendHackLink = document.getElementById("hyperlink");
   weekendHackLink.href="https://www.cibc.com/";*/

   image.addEventListener("mouseover",function(){

    image.src="img/audi_red.png";
       
   });


   image.addEventListener("mouseout",function(){

    image.src="img/audi_black.png";

   })

    
}


main();