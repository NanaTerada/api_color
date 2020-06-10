'use strict'

{

    

    function doTime() {

        const time = document.getElementById('time');
        const color = document.getElementById('color');
       
        const area = document.getElementById('area'); 
        area.style.transition = "all 0.8s";


        const d = new Date();
        let hour = d.getHours();
        let mins = d.getMinutes();
        let secs = d.getSeconds();

        if( hour < 10){ hour = "0" + hour};
        if( mins < 10){ mins = "0" + mins};
        if( secs < 10){ secs = "0" + secs};
    
        hour.toString();
        mins.toString();
        secs.toString();
    
        console.log(hour);
        console.log(mins);
        console.log(secs);
    
        let hex = '#' + hour + mins + secs;
    
        console.log(hex);
    
        area.style.background = hex;
        time.textContent = `${hour} : ${mins} : ${secs}`;
        color.textContent = `#${hour}${mins}${secs}`;
        
    


        setTimeout(doTime,1000);
    
    
    }

    doTime();
}