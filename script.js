
            
let Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("timeshown").innerHTML = Timezone
document.querySelectorAll(".duration").forEach((data , index)=>{
    date = data.getAttribute("data-date");
    let time = new Date(date)
    let x  = document.querySelectorAll(".speakers-time")
    x[index].innerHTML = time.toLocaleString("en-US", {timeZone: Timezone, timeStyle: "short", hourCycle: "h24"})
})

  
















