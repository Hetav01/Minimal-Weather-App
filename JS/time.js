function getTime() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var session = "AM";

    /*if (hours === 0) {
        hours = 12;
    }

    if (hours > 12) {
        session = "PM";
        hours = hours - 12;
    }*/

    if (hours < 10) {            //for writing the numbers smaller than 10.
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds + " ";

    document.querySelector(".clockOut").innerText = time;
    document.querySelector(".clockOut").textContent = time;


    setTimeout(getTime, 1000);

}



getTime();