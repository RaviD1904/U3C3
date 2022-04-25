// Store the wallet amount to your local storage with key "amount"
var localamt=JSON.parse(localStorage.getItem("amount")) || 0

document.querySelector("#wallet").innerText=localamt
function addamount(){
    let inputamt=document.querySelector("#amount").value
    localStorage.setItem("amount",Number(localamt)+Number(inputamt))
    localamt=localStorage.getItem("amount")
    document.querySelector("#wallet").innerText=localamt
   
}



