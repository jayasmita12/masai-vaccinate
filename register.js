let uniqueid_div = document.getElementById("uniqueid")
let unique = Math.floor(Math.random() * 10)
uniqueid_div.append(unique)

let registername = document.getElementById("name")
let age = document.getElementById("age")
var designation = document.getElementsByName("designation")
var designationtype;
var priority ;
var vaccine;
function changepriority(){
   priority=document.getElementById("priority").value
    console.log(priority)
}
function changevaccine(){
    vaccine=document.getElementById("vaccine").value
     console.log(vaccine)
 }
let register_btn = document.getElementById("registerBtn")



let registerData=[]

function register() {
    
    for(i=0;i<designation.length;i++){
        if(designation[i].checked){
            designationtype=(designation[i].value)
        }
    }
    let obj={
        registername:registername.value,
        age:age.value,
        designationtype:designationtype,
        priority:priority,
        vaccine:vaccine
    }
    registerData.push(obj)
    localStorage.setItem("registerData",JSON.stringify(registerData))
    setTimeout(()=>{
        alert("Successfully Register")
    },3000)
    window.location.href="./dashboard.html"
}