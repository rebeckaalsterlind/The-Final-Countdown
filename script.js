let graduation = new Date("Sep 23, 2022 17:00:00");

setInterval(function(){

    let today = new Date();
    let remaining = graduation - today;

    let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    document.getElementById("output").innerHTML = days + "d " + hours + "h" + minutes + "m " + seconds + "s";
  
}, 1000);
