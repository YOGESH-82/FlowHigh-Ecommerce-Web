// For Navbar
const ham=document.getElementById('bar');
const nav=document.querySelector('#navbar');
const close=document.getElementById('close');
// ham.addEventListener('click',(e)=>{
//    nav.style.right='0px';
// })
//or
if(ham){
    ham.addEventListener('click',(e)=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',(e)=>{
        nav.classList.remove('active');
    })
}

//For Shop.html file

const pro=document.getElementsByClassName('pro');

for(let i=0;i<pro.length;i++){
    pro[i].addEventListener('click',(e)=>{
        window.location.href='sel_Product.html';
    })
}

//For sel_Product.html file

const bimage=document.getElementById('main-img');
const simage=document.getElementsByClassName('simage');

for(let i=0;i<simage.length;i++){
    simage[i].addEventListener('click',(e)=>{
        const a=e.target;
        console.log(a);
        bimage.src=a.src;
    })
}





