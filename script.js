window.addEventListener("load", init);


function init(){
    const tartalomElem=document.getElementById("Tartalom")
    console.log(tartalomElem)


    const tartalomElemMaskepp=document.querySelector("#tartalom")
    const tartalomElemMaskepp2=document.querySelector(".tart")
    const tartalomElemMaskepp3=document.getElementsByClassName("tart")
    const tartalomElemEz=document.querySelectorAll(".tart")
    const articleElem=document.querySelectorAll("article")[0]
    console.log(tartalomElemEz)
    let szoveg = "Hello"
    tartalomElemEz[0].innerHTML="<p>"+szoveg+"</p"
    tartalomElemEz[0].innerHTML+="<p>"+szoveg+"</p"
    tartalomElemEz[0].innerHTML+="<p>"+szoveg+"</p"
    tartalomElemEz[0].innerHTML+="<p>"+szoveg+"</p"

    
    const kajak = ["alma", "répa", "retek"]
    const kepek = ["letöltés.png","letöltés.png","letöltés.png"]
    listakiir(kajak, tartalomElemEz)
    kep(kepek, articleElem)
}
function listakiir(kajak, tartalomElemEz){
    let szoveg = "<h1>Kedvenc eteleim:</h1>";
    szoveg+="<ul>"
    for (let index = 0; index < kajak.length; index++) {
        szoveg+="<li>"+kajak[index]+"</li>"
        
    }
    szoveg+="</ul>"
    tartalomElemEz[0].innerHTML=szoveg
}
function kep(eleresiutLista, articleElem){
    let szoveg =""
    for (let index = 0; index < eleresiutLista.length; index++) {
        szoveg+= `<div>
         <img src="${eleresiutLista[index]}" alt="igen">
         </div>`
        
    }
    articleElem.innerHTML = szoveg;
}