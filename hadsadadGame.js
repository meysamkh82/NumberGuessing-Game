let hadbala;
let adad;
let forsat;
let kt = document.getElementById('kt');
let adadres = document.getElementById('adadred')
let button = document.querySelector('button')
let p = document.querySelector('p');
let span = document.querySelector('#div')
let input = document.querySelector('#inp')
let con = document.getElementById('con');
button.addEventListener('click',handler)
function handler(){
    if(parseInt(input.value) < 10 ){p.innerHTML ='<p style="color:red;">You must enter a number greater than 10</p>'}
    else if(input.value == ''){
        p.innerHTML = '<p style="color:blue">You cannot leave the field empty</p>'
    }else if(!parseInt(input.value)){
        p.innerHTML="<p style='color:blue'>You can only use numerical values</p>"
    }
    else{
        
        hadbala = parseInt(input.value);
        adad =  Math.floor(Math.random() * hadbala + 1);
        forsat =Math.floor(Math.log2(hadbala)) +1 ;
        p.innerHTML = `Your <span style="color:red;font-size:18pt;"> ${forsat} </span> have a chance`;
        span.innerHTML = " Your guesses : ";
        button.textContent = 'guess'
        button.removeEventListener('click',handler)
        button.addEventListener('click',handler2)
    }
   
} 
function handler2(){
    p.innerHTML = `Your <span style="color:red;font-size:18pt">${ forsat-=1}</span> have a chance`;
        if(forsat > 0 || forsat == 0 && input.value == adad){
            if(input.value == adad){
                con.removeChild(button);
                con.removeChild(input);
                con.removeChild(span);
                p.innerHTML = '<p class="wl" style="color:green;">You won the game</p>';
                kt.innerHTML ='<a id="a">Try again</a>';
            }
         else{
             if(input.value<adad)
                span.innerHTML += `<span style="color:blue;margin-right:10px;">${input.value}</span>`;
             else{
                span.innerHTML += `<span style="color:red;margin-right:10px;">${input.value}</span>`;
             }
           
         }
        }
        else{
            con.removeChild(button)
            con.removeChild(input)
            con.removeChild(span)
            p.innerHTML = '<p class="wl" style="color:red;">You lost the game. Your desired number: </p>' + "<p id='ad'>"+adad+"</p>";
            kt.innerHTML ='<a id="a">Try again</a>';
            document.querySelector('a:nth-child(3)').addEventListener('click',function(){window.location.reload(true)} )
} 
}
