var result="";
let count = 0;
let display = document.querySelector(".showHere");
let input = document.querySelector(".TypeHere");
let err = document.querySelector("#error");
console.log(display);
err.innerHTML="";
function select()
{
    result="Hi";
    count = 0;
    var msg =['aahing','aaliis','aarrgh','abacas',' abacus','abamps','abased','abaser','abases','forget','cofee','during','last-minute','gateways','boring','brew','amazing','conversation','over','relaxing','under','conversation','chewing','peeling','produces','starfish','breathing','ovaries','stomach','testicles','intestine','apple','because','jute','candy','dusty','enough','.','fell-off','ground','happen','India','judicial','system','know','love','eating','really','.','went','play','rotten','surely','title','under','various','expanded','data','object']
    for(let i=0;i<14;i++)
    {
        var randm = Math.floor(Math.random()*58);
        result = result +" "+ msg[randm];
        console.log(randm);
        count++;
    }
    
}

function cheat(){
    alert("You can not Copy/Change that!");
    input.focus();
    }

function beginit(){
    
    select();
    day = new Date();
    startType = day.getTime();
    display.value = result;
    input.focus();
    input.select();
}

function stopIt() {
    dayTwo = new Date();
    endType = dayTwo.getTime();
    totalTime = ((endType - startType) / 1000)
    spd = Math.round((count/totalTime) * 60)
    if(input.value.length==display.value.length)
    {
        if (input.value === display.value)
        {
            err.innerHTML="You typed  " + ++count + " word sentence in "
            + totalTime + " seconds, a speed of about " + spd + " words per minute!";
           //window.location.reload();
        }
        else
        {
            err.innerHTML="You made some error!!!";
            //window.location.reload();
        }
    }
    else
    {
        //alert("You didn't typed the whole Sentence or You might have left something. "+ " " + " "+ "Next Time Type Carefully...!!!");
        err.innerHTML="You didn't typed the whole Sentence or You might have left something. "+ " " + " "+ "Next Time Type Carefully...!!!";
        
    }
}

function rest(){
    window.location.reload();
}