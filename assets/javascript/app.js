$(document).ready(function() {
//declaring variables
    var questions = ["In the Simpsons episode, Bart Gets an F, Lisa has the mumps", "Dave Grohl drums for the Foo Fighters", "Touch is the sense most commonly linked with memory", "Rabbits are raised in a warren.","The Sky is blue."];

  var answers = ["false", "true", "false","true","true"]
    
    var score = 0;
    var questionIndex = 0;
    var secondsLeft = 5;
    function startClock(){
        secondsLeft--
        if(secondsLeft>0){
            setTimeout(startClock, 1000)
        }
        $("#timer").text(secondsLeft);
        
        if(secondsLeft===0){
            $("#timer").text("Time's Up!");
        }
    }


    function renderQuestion(){
        startClock();
        for(var i=0;i<questions.length;i++)
            {
                
                 $("#questionsdiv").append("<p>"+questions[i] +"</p>"
                 +"<input type=radio name="+i+" value='true'>true " + "</input>" +
                 "<input type=radio name="+i+" value='false'>false " + "</input>"
                 );

            }
       
    }

    function checkAnswer(){
        var q1answer= $("input[name=q1]:checked").val();

    }

    renderQuestion()
    $("#complete").click(function(){
        console.log("clicked");
        var q1answer= $("input[name= 0]:checked").val();
        
        var q2answer= $("input[name=1]:checked").val();
      
        var q3answer= $("input[name=2]:checked").val();
   
        var q4answer= $("input[name=3]:checked").val();

        var q5answer =$("input[name=4]:checked").val();
    
        console.log(q1answer,q2answer,q3answer,q4answer);

        if(q1answer==answers[0])
        {
            console.log("Question 1 is correct!")
            score++;
        }
        if(q2answer==answers[1])
        {
            console.log("Question 2 is correct!")
            score++;
        }
        if(q3answer==answers[2])
        {
            console.log("Question 3 is correct!")
            score++;
        }
        if(q4answer==answers[3])
        {
            console.log("Question 4 is correct!")
            score++;
        }
        if(q5answer==answers[4])
        {
            console.log("Question 5 is correct!")
            score++;
        }
        $("#scoreboard").append("<h1>Your score was "+score+" out of " +questions.length+"</h1>");
        score=0;
    }



    )



})