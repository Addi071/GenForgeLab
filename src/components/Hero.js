
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import cloth1 from '../assets/images/cloths.png'
import cloth2 from '../assets/images/cloths2.png'
import pet1 from '../assets/images/petshop.png'
import pet2 from '../assets/images/petshop2.png'
import cafe1 from '../assets/images/cafe.png'
import cafe2 from '../assets/images/cafe2.png'

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {

  const heroRef = useRef(null);
  const conRef = useRef(null);
  const pageRef = useRef(null);
  const wkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!pageRef.current) return;

     gsap.fromTo(
        conRef.current,
        { y: window.innerHeight },    // starting position (hidden below screen)
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 3,
            pin: true,
            pinSpacing: false,
            markers: false,
            anticipatePin:1,
          }
        }
      );

      gsap.from(wkRef.current,{
              opacity: 0,
              scale: 0,
              duration:3,
              ease: "power3.out",
              scrollTrigger:{
                  trigger:wkRef.current,
                  start:"top 150%",
              //     markers: {
              //     startColor: "#ffffff",
              //     endColor: "#ffffff",
              //     fontSize: "20px",
              //     indent: 40
              // },
              // scrub:true,
                  // toggleActions:"play none none none"
              }
          }) 

    },heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='hauto'>
    <div 
      className='' 
      ref={pageRef} >
       
      <section 
        ref={heroRef} 
        className="w-full  inset-0 top-0 hscreen flex items-center justify-center overflow-x-hidden"
        >

        <div className='text-center flex flex-col justify-center items-center th'>
          <p className='p1'> Project. Development. </p>
          <h1 className="h-t glow-text">We showcase your vision to the world</h1>
          <p className='p2'>Explore our site and discover your potential. </p>
          <button className='expbtn' onClick={()=>{document.getElementById('explore').scrollIntoView({behavior:'smooth'})}}>Explore Us </button>
        </div>
      </section>
      </div>    
  
      <section 
        className=" flex-col  w-full bgc flex items-center justify-center text-white z-10" 
        ref={conRef}
        id='explore'
      >
        <h1 className="w-text"  ref={wkRef}>Our Works</h1>
        <div className='w-flex'>
          <div className='w-card'>
            <h1 className='w-card-h'>CAFE DEJA VU</h1>
            <div className='w-imagesarea'>
              <img className='w-workimg1' src={cafe1} />
              <img className='w-workimg2' src={cafe2} />
            </div>
            <p className='w-card-p'>Serving brand stories with a clean and engaging web presence.</p>
          </div>

          <div className='w-card'>
            <h1 className='w-card-h'>PETSHIVE</h1>
            <div className='w-imagesarea'>
              <img className='w-workimg1' src={pet2} />
              <img className='w-workimg2' src={pet2} />
            </div>
            <p className='w-card-p'>Building a lovable online presence for modern pet brands.</p>
          </div>

          <div className='w-card'>
            <h1 className='w-card-h'>JAIHIND</h1>
            <div className='w-imagesarea'>
              <img className='w-workimg1' src={cloth1} />
              <img className='w-workimg2' src={cloth2} />
            </div>
            <p className='w-card-p'>Turning style into a smooth and scalable online store.</p>
          </div>
        </div>
        {/* <div className='w-flex'>
          <div className='w-card'></div>
          <div className='w-card'></div>
          <div className='w-card'></div>
        </div> */}
      </section>
    
      </div>
    
  );
};

