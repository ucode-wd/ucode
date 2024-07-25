export default function animation(selector, className){
    window.addEventListener('scroll', function(){
        const element = document.querySelector(selector);
        let pos = element.getBoundingClientRect().top;
        let tam = this.window.innerHeight/1.2;
        if(pos < tam){
            element.classList.add('animate__animated')
            element.classList.add(className)
        }
        else{
            element.classList.remove('animate__animated') 
            element.classList.remove(className)
        }
    })
}