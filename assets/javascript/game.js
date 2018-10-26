$(document).ready(function() {
    

    var ranNum = Math.floor((Math.random()*120)+19);
    var gemNum = [10,1,5,8];
    //assign one of these numbers to the gems//
    var wins = 0;
    var loses = 0;
    
    
    
    
    //where do i add the two gem variables? in the global scope?//
    
     
    $("#red").on("click", function() {
        
        
        $("#rand-num").text(ranNum);
        console.log(this);
        
        
        $("#total-score").text(gemNum);
        console.log(gemNum);
        
      });
      

    $("#green").on("click", function(){
        
        
    });

    $("#blue").on("click", function(){
        
    });

    $("#color").on("click", function(){
        
    });



});