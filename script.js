


// const str = new Date("2021-11-27T10:00:00+05:30").toLocaleString("")

let Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

var d = new Date("2021-11-27T10:00:00+05:30");

document.querySelectorAll(".duration").forEach(data=>{
    date = data.getAttribute("data-date");
    var x = document.querySelectorAll(".speakers-time");
    var i = 0;
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML = date
    }

})
let x = d.toLocaleString("en-US", {timeZone:Timezone, timeStyle:"short", hourCycle:"h24"})
document.getElementById("ishaq").innerHTML = x













