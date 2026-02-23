import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import css24 from '../assets/images/css-24.svg'
import authentication from '../assets/images/authentication-1-5.svg'
import code from '../assets/images/code.svg'
import coding from '../assets/images/coding-4-2.svg'

gsap.registerPlugin(ScrollTrigger);

export const Choice = () =>{

    const wrapperRef = useRef(null);
    const cardsRef = useRef(null);
    const headingRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    useEffect(() => {
    const ctx = gsap.context(() => {
        const gs = gsap.matchMedia()


        gs.add("(max-width: 430px)",()=>{

            gsap.set(headingRef.current, {
            padding: "85px 0 10px 0",
            borderRadius: "0 0 3rem 3rem"
            });
            ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${cardsRef.current.offsetHeight }`,
        pin: headingRef.current,
        pinSpacing: false,
        scrub: true,
        markers: false,
      });

gsap.from(card1Ref.current, {
            x: 600,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card1Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })

                gsap.from(card2Ref.current, {
            x: 600,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card2Ref.current,
            start: "top 50%",
            // markers: true,
            scrub: false,

            }
        })

                gsap.from(card3Ref.current, {
            x: 600,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card3Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })

                gsap.from(card4Ref.current, {
            x: 600,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card4Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })

        })


        gs.add("(min-width: 431px) and (max-width: 768px)",()=>{

            gsap.set(headingRef.current, {
            padding: "95px 0 15px 0",
            borderRadius: "0 0 3rem 3rem"
            });
            ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${cardsRef.current.offsetHeight }`,
        pin: headingRef.current,
        pinSpacing: false,
        scrub: true,
        markers: false,
      });


      gsap.from(card1Ref.current, {
            x: 750,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card1Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })

                gsap.from(card2Ref.current, {
            x: 750,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card2Ref.current,
            start: "top 50%",
            // markers: true,
            scrub: false,

            }
        })

                gsap.from(card3Ref.current, {
            x: 750,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card3Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })

                gsap.from(card4Ref.current, {
            x: 750,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card4Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })


        })


        gs.add("(min-width: 769px) and (max-width: 1023px)",()=>{

            gsap.set(headingRef.current, {
            padding: "180px 0 15px 0",
            borderRadius: "0 0 3rem 3rem",
            fontSize: "5rem"
            });

       ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${cardsRef.current.offsetHeight - 550}`,
        pin: headingRef.current,
        pinSpacing: false,
        scrub: true,
        markers: false
      });
      

      gsap.from(card1Ref.current, {
            x: 800,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card1Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })

                gsap.from(card2Ref.current, {
            x: 800,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card2Ref.current,
            start: "top 50%",
            // markers: true,
            scrub: false,

            }
        })

                gsap.from(card3Ref.current, {
            x: 800,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card3Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })

                gsap.from(card4Ref.current, {
            x: 800,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card4Ref.current,
            start: "top 50%",
            // markers: true,
            // scrub: true,

            }
        })


    })


    gs.add("(min-width: 1024px)",()=>{

            gsap.set(headingRef.current, {
            padding: "180px 0 15px 0",
            borderRadius: "0 0 3rem 3rem",
            fontSize: "5rem"
            });

       ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${cardsRef.current.offsetHeight - 550}`,
        pin: headingRef.current,
        pinSpacing: false,
        scrub: true,
        markers: false
      });


      gsap.from(card1Ref.current, {
            x: 700,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card1Ref.current,
            start: "top 30%",
            markers: false,
            // scrub: true,

            }
        })

                gsap.from(card2Ref.current, {
            x: 700,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card2Ref.current,
            start: "top 50%",
            markers: false,
            // scrub: true,

            }
        })

                gsap.from(card3Ref.current, {
            x: 700,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card3Ref.current,
            start: "top 60%",
            markers: false,
            // scrub: true,

            }
        })

                gsap.from(card4Ref.current, {
            x: 700,
            duration: 2,
            ease: "power3.out",
            scrollTrigger:{
            trigger: card4Ref.current,
            start: "top 60%",
            markers: false,
            // scrub: true,

            }
        })

    })


        


    }, wrapperRef);

    return () => ctx.revert();
  }, []);


    return(
        <div className="choice-sec">
            <section className="heading-sec" ref={wrapperRef}>
                
                <h1 className="choice-head blur-bg" ref={headingRef}>Why to Choose us?</h1>
                
            </section>

            <section className="card-sec" ref={cardsRef}>

                <div className="choice-card" ref={card1Ref}>

                    <div className="card-sec1">
                        <p className="ch-card-txt" >1</p>
                        {/* <p> image </p> */}
                        <img src={css24} className="choiceimg" alt="" />
                    </div>

                    <h2 className="cardh">Unique designs for your brand</h2>

                    <p className="cardp">Most websites online look the same, making them easily forgettable. We create custom, visually appealing designs that truly represent your brand.</p>

                </div>
                
                <div className="choice-card" ref={card2Ref}>

                    <div className="card-sec1">
                        <p className="ch-card-txt" >2</p>
                        <img src={authentication} className="choiceimg" alt="" />
                    </div>

                    <h2 className="cardh">Secure, responsive and fast websites</h2>

                    <p className="cardp">Our websites are designed for mobile devices, fully optimized for maximum loading speed, and hosted on highly secure and responsive servers.</p>

                </div>
                
                <div className="choice-card" ref={card3Ref}>

                    <div className="card-sec1">
                        <p className="ch-card-txt" >3</p>
                        <img src={code} className="choiceimg" alt="" />
                    </div>
                    
                    <h2 className="cardh">Hassle-free user experience and functionality</h2>

                    <p className="cardp">We take care of the little details to make your website bug-free, pixel-perfect, and easy to navigate.</p>

                </div>
                
                <div className="choice-card" ref={card4Ref}>

                    <div className="card-sec1">
                        <p className="ch-card-txt" >4</p>
                        <img src={coding} className="choiceimg" alt="" />
                    </div>

                    <h2 className="cardh">Websites built for easy updates</h2>

                    <p className="cardp">No one likes being stuck waiting for tech support to make simple changes. That's why we build your site with an easy-to-use backend, so you can easily update your content.</p>
                    
                </div>
            
            </section>

        </div>

    )};