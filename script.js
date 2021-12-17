var congress=0;
var bjp=0;
var mns =0;
var win;

function congressVote() {
    
    if(congress==0){
        congress=1;
        document.getElementById('vote_Congress').innerHTML =" - "+congress;
    }else{
        document.getElementById('vote_Congress').innerHTML =" - "+(congress=congress+1);
        // console.log(congress);
    }
    console.log(congress +" "+ bjp +" "+" "+ mns);
    win= winner(congress,bjp,mns);
    document.getElementById('winner').innerHTML = "- "+win;
};

function bjpVote() {
    
    if(bjp==0){
        bjp=1;
        document.getElementById('vote_bjp').innerHTML = " - "+bjp;
    }else{
        document.getElementById('vote_bjp').innerHTML = " - "+ (bjp=bjp+1);
    }
    console.log(congress +" "+ bjp +" "+" "+ mns);
    win= winner(congress,bjp,mns);
    document.getElementById('winner').innerHTML ="- "+win;
};

function mnsVote() {
    
    if(mns==0){
        mns=1;
        document.getElementById('vote_mns').innerHTML = " - "+mns;
    }else{
        document.getElementById('vote_mns').innerHTML =" - "+(mns=mns+1);
    }
    console.log(congress +" "+ bjp +" "+" "+ mns);
    win= winner(congress,bjp,mns);
    document.getElementById('winner').innerHTML ="- "+win;
};

function winner(congress,bjp,mns) {
    if (congress >= bjp) {
        if (congress >= mns)
            return "congress";
        else
            return "mns";
    }
    else {
        if (bjp >= mns)
            return "bjp";
        else
            return "mns";
    }
  
}