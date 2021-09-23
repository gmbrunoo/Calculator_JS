function insert(num){
    let summary = document.getElementById('summary').innerHTML;
    document.getElementById('summary').innerHTML = summary + num;
}

function clean(){
    document.getElementById('result').innerHTML = "0";
    document.getElementById('summary').innerHTML = "";
}

function calc(){
    let summary = document.getElementById('summary').innerHTML;
 
    if(summary){
        document.getElementById('result').innerHTML =  eval(summary);
    }else{
        document.getElementById('result').innerHTML = "Error"
    }
}