function insert(e){
    let summary = document.getElementById('summary').innerHTML;
    document.getElementById('summary').innerHTML = summary + e;
}

function clean(){
    document.getElementById('result').innerHTML = "0";
    document.getElementById('summary').innerHTML = "";
}

function calc(){
    let summary = document.getElementById('summary').innerHTML;
 
    if(summary){

        let result = eval(summary);
	
        if(isFinite(result)){
            document.getElementById('result').innerHTML =  result;
        }
        else{
            document.getElementById('result').innerHTML = "Error";
        }

    }else{
        document.getElementById('result').innerHTML = "0";
    }
}