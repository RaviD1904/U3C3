// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let cont=document.querySelector("#movie")
let data=JSON.parse(localStorage.getItem("movie"))
console.log(data)
appendData(data)
function appendData(data){
    cont.innerHTML=""
    data.map((el)=>{
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.Poster
        let p=document.createElement("P")
        p.innerText=el.Title        
        
        box.append(img,p)
        cont.append(box)


    })
}


var localamt=localStorage.getItem("amount")
document.querySelector("#wallet").innerText=localamt

function bookmovie(){

console.log("localamt",localamt)
console.log("localamttype",typeof(localamt))

let bal=Number(localamt)
console.log("typeofbal",typeof(bal));
    let seat=document.querySelector("#number_of_seats").value
console.log(seat)
var total_price=100*Number(seat)
console.log(total_price)
if(bal>total_price){
    alert("Booking Successful!")
    let new_bal=bal-total_price
    document.querySelector("#wallet").innerText=new_bal
    localStorage.setItem("amount",new_bal)
}
else{
    alert("Insufficient Balance !")
    //window.location.href="/index.html"
}



}