
            
let Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
document.querySelectorAll(".duration").forEach((data , index)=>{
    date = data.getAttribute("data-date");
    let time = new Date(date)
    let x  = document.querySelectorAll(".speakers-time")
    x[index].innerHTML = time.toLocaleString("en-US", {timeZone: Timezone})
})

var date = new Date()
var offset = (date.getTimezoneOffset()/60)

document.getElementById("get").innerHTML = Timezone + ("GMT " + offset);
  
















