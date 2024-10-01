const container = document.querySelector('.container') ; 
const image_container = document.querySelector('.background_image') ; 
document.addEventListener('scroll',(event)=>{
    const container_rect = container.getBoundingClientRect() ; 
    const height = window.innerHeight ; 
    console.log('scrolled') ; 
    if(container_rect.top<height && container_rect.bottom>0){
            const h = (height - container_rect.bottom)*0.05 ; 
            image_container.style.transform = `translate(0%,${h}%)` ; 
            console.log("Now reflecting") ; 
    }
    
})
