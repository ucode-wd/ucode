setTimeout(()=>{
    const $container = document.querySelector('.proyects__container')
    const $item = document.querySelector('.carousel__item');
    const $leftBtn = document.querySelector('.right__arrow');
    const $rightBtn = document.querySelector('.left__arrow');
    const $elements = document.querySelectorAll('.carousel__item');
    let scrollValue = 0;
    let counter = 0;
    let transition = false;
    const rootStyles = document.documentElement.style;

    function getWidth(){
        const width = $item.scrollWidth;
        return width
    }
    function reorderSlide(){
        rootStyles.setProperty('--transition', 'none')
        if(counter === $elements.length - 1){
            $container.appendChild($container.firstElementChild);
            scrollValue+= getWidth();
            rootStyles.setProperty('--slide-transform', `${scrollValue}px`);
            counter--;
        }
        else if(counter === 0){
            $container.prepend($container.lastElementChild);
            scrollValue -= getWidth();
            rootStyles.setProperty('--slide-transform', `${scrollValue}px`);
            counter++;
        }
    }
    reorderSlide()
    function moveSlide(direction){
        if(transition) return;
        rootStyles.setProperty('--transition', 'transform .6s')
        if(direction === 'left'){
            scrollValue -= getWidth();
            rootStyles.setProperty('--slide-transform', `${scrollValue}px`);
            counter++;
            transition = true;
            setTimeout(()=>{transition = false}, 700)
        }
        else if(direction === 'right'){
            scrollValue += getWidth();
            rootStyles.setProperty('--slide-transform', `${scrollValue}px`)
            counter--;
            transition = true;
            setTimeout(()=>{transition = false}, 700)
        }
    }


    getWidth()
    $rightBtn.addEventListener('click', ()=>moveSlide('right'));
    $leftBtn.addEventListener('click', ()=>moveSlide('left'));
    $container.addEventListener('transitionend', ()=>reorderSlide());
}, 1);