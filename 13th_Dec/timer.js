let counter = 0;
        let c = null;
        let count = function(){
            counter++;
            document.getElementById('time').innerText = counter;
        }
    

        let pa = document.getElementById('pause_timer');
        pa.addEventListener('click', function(){
            clearInterval(c);
        })
        let st = document.getElementById('start_timer');
        st.addEventListener('click', function(){
            c = setInterval(count, 1000)
        })
        let res = document.getElementById('resume_timer');
        res.addEventListener('click', function(){
            c = setInterval(count, 1000)
        })

        let rest = document.getElementById('restart_timer')
        rest.addEventListener('click', function(){
            counter = 0;
        })
        let stp = document.getElementById('stop_timer');
        stp.addEventListener('click', function(){
            clearInterval(c);
            counter = 0;
            document.getElementById('time').innerText = counter;
        })