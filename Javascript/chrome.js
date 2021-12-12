
let inputel = document.getElementById("input-el")
let inputbtn = document.getElementById("input-btn")
const uleltext = document.getElementById("ulel")
const dltbtn = document.getElementById("deletebtn")
let myleads= []
const tabbtn = document.getElementById("savetab")
let locals= JSON.parse(localStorage.getItem("myleads"))

// let testtxt = document.getElementById("test")

if (locals){
    myleads = locals
    renderhead(myleads)
    }

const tabs = [
    {url: "www.google.com"}
]

tabbtn.addEventListener("click",function(){
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderhead(myleads) 
})


inputbtn.addEventListener("click", function(){
    myleads.push(inputel.value)
    inputel.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderhead(myleads) 
 })

dltbtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads = []
    renderhead(myleads)
})

function renderhead(leads){
    let listem = ""
    uleltext.innerHTML = ""
    for (let i=0;i<leads.length;i++) {
        listem += `
            <li>
                <a target='blank' href='${leads[i]}'>${leads[i]}</a>
            </li>
        `
        uleltext.innerHTML = listem 
    }
    }



