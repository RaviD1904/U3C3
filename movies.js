// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page






async function searchMovies(){
    try{
        let movie=document.querySelector("#search").value
        const url=`https://www.omdbapi.com/?s=${movie}&apikey=14fddc23`
        let res=await fetch(url)
        let data=await res.json()

        return data.Search

    }catch(err){
        console.log(err);
    }
}



let cont=document.querySelector("#movies")
let id


appendData=(data)=>{
    cont.innerHTML=""
    data.map((el)=>{
        let box=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.Poster
        let p=document.createElement("P")
        p.innerText=el.Title        
        let btn=document.createElement("button")
        btn.setAttribute("class","book_now")
        btn.innerText="Book Now"
        btn.addEventListener("click",function(){
            booknow(el)
        })
        box.append(img,p,btn)
        cont.append(box)


    })
}


let arr=[]
function booknow(el){
    arr.push(el)

    window.location.href="/checkout.html"
    localStorage.setItem("movie",JSON.stringify(arr))
}




async function main(){
    let data=await searchMovies()
    if(data===undefined){
        return false
    }
    appendData(data)
}


function debounce(func,del){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(()=>{
        func()
    },del)
}