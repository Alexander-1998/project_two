/*---------------Бургер меню------------ */

//Получаю кнопки
let open  = document.querySelector('.banner__burger'),
    close = document.querySelector('.btn__close-item');



//Элемент меню
let hideMenu = document.querySelector('.header__menu').style;


//Слушатели на кнопки скрытого меню
open.addEventListener('click',() => {

    if(hideMenu.display !== 'block'){
        hideMenu.display = 'block';
    }
    
});

close.addEventListener('click',() => {
    hideMenu.display = 'none';
});

/*Анимация при скоролле */
const animBottom = document.querySelectorAll('[data-anim="bottom"]'),
      animLeft   = document.querySelectorAll('[data-anim="left"]'),
      animRight  = document.querySelectorAll('[data-anim="right"]'),
      animImage  = document.querySelectorAll('[data-anim="left__ani_image"]'),
      footer     = document.querySelectorAll('[data-anim="footer__elem"]'),
      bounc      = document.querySelectorAll('[data-anim="boun"]');

if(animBottom.length > 0){
    window.addEventListener('scroll', onScroll);
    function onScroll(){
        const animStart = 4;

        //Анимация блоков снизу
        for (let i = 0; i < animBottom.length; i++) {
            const animElem = animBottom[i];
            const animElemHeight = animElem.offsetHeight;
            const animElemOffset = offset(animElem).top;
            

            let animItemPoint = window.innerHeight - animElemHeight / animStart
            if(animElemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animElemOffset - animItemPoint) && pageYOffset < (animElemOffset + animElemHeight)){
                animElem.classList.add('_bottom_anim');
            }else{
                if(!animElem.classList.contains('_bottom_anim')){
                    animElem.classList.remove('_bottom_anim');
                }
                
            }
        }
        //Анимация блоков слева
        for (let j = 0; j < animLeft.length; j++) {
            const animElemLeft = animLeft[j];
            const animElemLeftHeight = animElemLeft.offsetHeight;
            const animElemLeftOffset = offset(animElemLeft).top;
            
            let animElemLeftPoint = window.innerHeight - animElemLeftHeight / animStart;

            if(animElemLeftHeight > window.innerHeight){
                animElemLeftPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animElemLeftOffset - animElemLeftPoint) && pageYOffset < (animElemLeftOffset + animElemLeftHeight)){
                animElemLeft.classList.add('_left_anim');
            }else{
                if(!animElemLeft.classList.contains('_left_anim')){
                    animElemLeft.classList.remove('_left_anim');
                }
                
            }
        }

        //Анимация блоков справо
        for (let k = 0; k < animRight.length; k++) {
            const animElemRight = animRight[k];
            const animElemRightHeight = animElemRight.offsetHeight;
            const animElemRightOffset = offset(animElemRight).top;
            
            let animElemRightPoint = window.innerHeight - animElemRightHeight / animStart;

            if(animElemRightHeight > window.innerHeight){
                animElemRightPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animElemRightOffset - animElemRightPoint) && pageYOffset < (animElemRightOffset + animElemRightHeight)){
                animElemRight.classList.add('_right_anim');
            }else{
                if(!animElemRight.classList.contains('_right_anim')){
                    animElemRight.classList.remove('_right_anim');
                }
                
            }
        }

        //Анимация картинок открытие сверху вниз
        for (let l = 0; l < animImage.length; l++) {
            const animElemImage = animImage[l];
            const animElemImageHeight = animElemImage.offsetHeight;
            const animElemImageOffset = offset(animElemImage).top;
            
            let animElemImagePoint = window.innerHeight - animElemImageHeight / animStart;

            if(animElemImageHeight > window.innerHeight){
                animElemImagePoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animElemImageOffset - animElemImagePoint) && pageYOffset < (animElemImageOffset + animElemImageHeight)){
                animElemImage.classList.add('_image_anim__bottom');
            }else{
                if(!animElemImage.classList.contains('_image_anim__bottom')){
                    animElemImage.classList.remove('_image_anim__bottom'); 
                }
                
            }
        }

        //Анимация картинок открытие сверху вниз для футера
        for (let f = 0; f < footer.length; f++) {
            const footerElem = footer[f];
            const footerElemHeight = footerElem.offsetHeight;
            const footerElemOffset = offset(footerElem).top;
            
            let footerElemPoint = window.innerHeight - footerElemHeight / animStart;

            if(footerElemHeight > window.innerHeight){
                footerElemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > footerElemOffset - footerElemPoint) && pageYOffset < (footerElemOffset + footerElemHeight)){
                footerElem.classList.add('_footer__active');
            }else{
                if(!footerElem.classList.contains('_footer__active')){
                    footerElem.classList.remove('_footer__active'); 
                }
                
            }
        }
        //Анимация кнопки
        bounc.forEach(btn => {
            const btnHeight = btn.offsetHeight;
            const btnOffset = offset(btn).top;
            
            let btnPoint = window.innerHeight - btnHeight / animStart;

            if(btnHeight > window.innerHeight){
                btnPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > btnOffset - btnPoint) && pageYOffset < (btnOffset + btnHeight)){
                btn.classList.add('_btn__bouncy');
            }else{
                if(!btn.classList.contains('_btn__bouncy')){
                    btn.classList.remove('_btn__bouncy'); 
                }
                
            }
        });

        
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top: rect.top + scrollTop, left: rect.left + screenLeft};
    }
}

///Экран меньше 425px

if(screen.width <= 425){
}else{
  
}