(function(){

    const sliders =[...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.querySelector('#next');
    const buttonbefore = document.querySelector('#before');
    let value;
    
    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonbefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('testimony_body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  :  1;

        }
    }

    
})();