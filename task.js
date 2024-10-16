function add() {
    const inputString = document.querySelector("#inputBox").value.trim();
    if(inputString.length == 0){
        document.querySelector("#result").innerHTML = "0";
        return  
    }
    const numbers = inputString.split(/[n,]+/); //splitting on both comma and new line
    const answer = numbers.reduce((result,currentvalue) => {
        return result + parseInt(currentvalue);
    },0)
    document.querySelector("#result").innerHTML = answer;
    return
}

document.getElementById("submitButton").addEventListener("click", add)