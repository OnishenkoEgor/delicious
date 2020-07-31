"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const catalogList = document.querySelector('.filter__content'),
    catalogLink = document.querySelector('.nav__catalog-link'),
    burger = document.querySelector('.nav__burger');
        burger.addEventListener('click',()=>{
            if(document.documentElement.clientWidth<575){
                const nav= document.querySelector('.nav__menu');
                burger.classList.toggle('nav__burger-active');
                nav.classList.toggle('nav__menu-active');
            }else{
                console.log('while client width less than 575px, burger menu does not work');
            }
        });
        catalogLink.addEventListener('click',(e)=>{
            console.log(catalogList);
            catalogList.classList.toggle('filter__content-active') 
        })
});