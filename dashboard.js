
let body = document.getElementById("showregisterData")

let data=JSON.parse(localStorage.getItem("registerData"))
console.log(data)

showdata(data)
function showdata(data){
    let tr = document.getElementById("tr")
    let tbody = document.createElement("tbody")
    data.map((e)=>{
        let td1 = document.createElement("td")
        td1.innerHTML=e.registername
        let td2 = document.createElement("td")
        td2.innerHTML=e.age
        let td3 = document.createElement("td")
        td3.innerHTML=e.designationtype
        let td4 = document.createElement("td")
        td4.innerHTML=e.priority
        let td5 = document.createElement("td")
        td5.innerHTML=e.vaccine
        let td0 = document.createElement("td")
        td0.innerHTML=Math.floor(Math.random()* 10000)
        let td6 = document.createElement("td")
        let btn1 = document.createElement("button")
        btn1.id="vaccinated"
        btn1.innerHTML="Vaccinate"
        let td7 = document.createElement("td")
        let btn2 = document.createElement("button")
        btn2.id="delete"
        btn2.innerHTML="delete"
        td6.append(btn1)
        td7.append(btn2)
        tr.append(td1,td2,td3,td4,td5,td0,td6,td7)
    })
    tr.append(tbody)
}