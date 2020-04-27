var navState = 0;

window.onload = function(){  
    const navBar = document.getElementById('navMenu');
    const ham = document.getElementById('hamburger');
    const isOpen = document.getElementById('open');
    const infoPic = document.getElementById("sidebarButton");
    const sideBar = document.getElementById("sidebar");
    const sideButton = document.getElementById('infoMove');
    var wi = window.innerWidth;
    var he = window.innerHeight;
    var infoState = 0;

    ham.addEventListener("click",navMenu);
    sideButton.addEventListener("click",clickInfoMove);
    window.addEventListener('resize', reportWindowSize);



    

    function reportWindowSize(){
        (window.innerWidth <= 720) ? phone(): desktop();
    }

    var d = new Date();
    var hour = d.getHours();
    var midday = "";
    var min = d.getMinutes();
    var week = d.getDay()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var weekDay = weekday[week];

    if(hour >= 13){
        hour = hour - 12;
        midday = "PM";
    }
    else{
        midday = "AM";
    }

    if(((week === 2 || week === 4) && (((hour >= 2)  || (hour >= 1 && min >= 30)) && (hour <= 7) && (midday = "PM"))) || ((week === 6) && ((hour >= 9 && hour <= 12) && (midday = "AM")))){
        isOpen.innerHTML = "Open";
    }
    else{
        isOpen.innerHTML = "Closed";
    }

    if(min <= 9){
        min = "0" + min;
    }
    
    console.log(weekDay);
    console.log(hour + ":" + min + midday);


    
    function phone(){
        navState = 1;
        navMenu();
        sideBar.style.bottom = -300 + "px";
    }

    function desktop(){
        navState = 0;
        navMenu();
        sideBar.style.bottom = 0;
        infoState = 0;
    }

    function navMenu(){
            if(navState === 0 && window.innerWidth <= 720){
                navBar.style.display = "grid";
                navState = 1;
            }
            else if(navState === 0 && window.innerWidth > 720){
                navBar.style.display = "grid";
            }
            else{
                navBar.style.display = "none";
                navState = 0;
            }
    }

    function clickInfoMove(){
        console.log(infoState);
        if(infoState === 0){
            sideBar.style.bottom = 0;
            infoState = 1;
            infoPic.src = "down-03.png";
        }
        else{
            sideBar.style.bottom = -300;
            infoState = 0;
            infoPic.src = "up-03.png";
        }
        navState = 1;
        navMenu();
    }
}




