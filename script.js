let current=document.getElementById('cur');
let next=document.getElementById('nex');
let ele=document.getElementById('button1');
let number=document.getElementById('number');
ele.addEventListener('click',function(){
    let d=number.value;
    console.log(d);
    let e=parseInt(d);
    console.log(e);
    if(e>0){
        let cd=0;
        console.log(current.innerHTML);
        console.log(next.innerHTML);
        var interval=setInterval(animate,1000);
        function animate(){
            console.log(current.innerHTML);
            console.log(next.innerHTML);
            if(cd==e){
                
            }else{
                
                next.innerHTML=++cd;
                console.log(current.innerHTML);
                console.log(next.innerHTML);
            } 
            next.classList.add('animate');
            setTimeout(function(){
                if(next.innerHTML==e){
                    current.innerHTML=0;
                    next.innerHTML=1;
                    number.value=null;
                    clearInterval(interval);
                    next.classList.remove('animate');
                }else{
                    current.innerHTML=cd;
                    next.classList.remove('animate');
                }
                
            },500);
            console.log(current.innerHTML);
            console.log(next.innerHTML);
            
        }
    }else{
        window.alert("Please enter a value!!");
    }

});
// setTimeout(hi,5000);
// function hi(){
//     window.alert("hi!!");
// }
