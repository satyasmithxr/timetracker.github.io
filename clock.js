let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {

     a = new Date();
     time= a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
     date= a.toLocaleDateString("en-US", options);
    // document.getElementById("time").innerHTML= time + ' <br> ' + date;
    document.getElementById("time").innerHTML= time;
    document.getElementById("date").innerHTML= date;
}, 1000);