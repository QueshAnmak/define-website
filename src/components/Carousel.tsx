import '../styles/Carousel.scss';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function Carousel() {

    // src image temp
    // const srcImage = 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg';

    const containerRef = useRef(null);
    const ringRef = useRef(null);
    const image = require('../assets/define-logo-default.png');

    useEffect(() => {

        let xPos = 0;

        function getBgPos(i:any){ 
            return '0';
        }
    
    
        function setupGsap() {
            gsap.timeline()
                .set(ringRef.current, { rotationY:180, cursor:'grab' })
                .set((ringRef.current as any).children, {
                    rotateY: (i)=> i*-36,
                    transformOrigin: '50% 50% 500px',
                    z: -500,
                    backgroundImage:(i)=>`url(${(image as any).default})`,
                    backgroundPosition:(i)=>getBgPos(i),
                    backfaceVisibility:'hidden'
                  })
                .from((ringRef.current as any).children, {
                    duration:1.5,
                    y:200,
                    opacity:0,
                    stagger:0.1,
                    ease:'expo'
                })
                .add(()=>{
    
                    const images:any = (ringRef.current as any).children;
    
                    for(const image of images) {
                        image.addEventListener('mouseenter', (event:any)=>{
                            let current = event.currentTarget;
                            gsap.to(images, {opacity:(i,t)=>(t===current)? 1:0.5, ease:'power3'})
                        })
    
                        image.addEventListener('mouseleave', (event:any)=>{
                            gsap.to(images, {opacity:1, ease:'power2.inOut'})
                        })
    
                    }
    
                }, '-=0.5');
        }
    
        function drag(e:any){
            if (e.touches) e.clientX = e.touches[0].clientX;    
          
            gsap.to(ringRef.current, {
              rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
              onUpdate:()=>{ gsap.set((ringRef.current as any).children, { backgroundPosition:(i)=>getBgPos(i) }) }
            });
            
            xPos = Math.round(e.clientX);
        }
        function dragEnd(e:any){
            window.removeEventListener('touchmove', drag);
            window.removeEventListener('mousemove', drag);
            gsap.set(ringRef.current, {cursor:'grab'});
        }
    
        function dragStart(e:any){ 
            if (e.touches) e.clientX = e.touches[0].clientX;
            xPos = Math.round(e.clientX);
            gsap.set(ringRef.current, {cursor:'grabbing'})
            window.addEventListener('mousemove', drag);
            window.addEventListener('touchmove', drag);
        }

        setupGsap();

        window.addEventListener('mousedown', dragStart);
        window.addEventListener('touchstart', dragStart);
        window.addEventListener('mouseup', dragEnd);
        window.addEventListener('touchend', dragEnd);

        return () => {
            window.removeEventListener('mousedown', dragStart);
            window.removeEventListener('touchstart', dragStart);
            window.removeEventListener('mouseup', dragEnd);
            window.removeEventListener('touchend', dragEnd);
        }

    }, [containerRef, ringRef]);

    return (
        <div className='container' ref = {containerRef}>
            <div className="ring" ref = {ringRef}>
                {
                    Array(10).fill(0).map(()=> {
                        return <div className='img'/>
                    })
                }
            </div>
        </div>
    )
}

export default Carousel;