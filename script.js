

 function displayTime() {
    const dateTime = new Date();
    // console.log(dateTime);

    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hrs>=12){
        session.innerHTML = 'PM';
    }

    if(hrs>12){
        hrs = hrs - 12;
        if(hrs>=0 && hrs <=9){
            hrs = "0" + hrs;
        }
    }
    
    else{
        session.innerHTML = 'AM';
    }
    if(sec>=0 && sec<=9){
        sec = "0" + sec;
    }
    if(min>=0 && min<=9){
        min = "0" + min;
    }
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    // document.getElementById("session").innerHTML = "AM";
}


setInterval(displayTime, 10); 