const modal = document.createElement('div');
modal.id='modal';
document.body.appendChild(modal);

const images = document.querySelectorAll('.img');

images.forEach(image=>{
    image.addEventListener('click' , ()=>{
        modal.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;   // new image source  = old image source
        img.ig="img";

        while(modal.firstChild){
            modal.removeChild(modal.firstChild);
        }
        
        modal.append(img);
    })
});

modal.addEventListener('click',()=>{
    modal.classList.remove('active');
});