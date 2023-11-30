{
    let dis= document.getElementsByClassName('col2display')[0];
let col2= document.getElementsByClassName('colu-2')[0];
dis.addEventListener('click', ()=>{
    col2.style.display="inline";
});

let close_but = document.getElementById('close_but');
close_but.addEventListener('click',()=>{
    col2.style.display="none";
});
}

let down1 = document.getElementsByClassName('down1')[0];
let cat_opt = document.getElementsByClassName('cat_opt')[0];

down1.addEventListener('click',()=>{
    cat_opt.style.display="none";
});