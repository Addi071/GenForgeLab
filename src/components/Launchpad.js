import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lpad1 from '../assets/images/l-pad-1.svg'
import lpad2 from '../assets/images/l-pad-2.svg'
import lpad3 from '../assets/images/l-pad-3.svg'
import lpad4 from '../assets/images/l-pad-4.svg'

gsap.registerPlugin(ScrollTrigger);

export const Launchpad = () => {

    const bar1Ref = useRef(null);
    const bar2Ref = useRef(null);
    const bar3Ref = useRef(null);
    const bar4Ref = useRef(null);

    const con1Ref = useRef(null);
    const con2Ref = useRef(null);
    const con3Ref = useRef(null);
    const con4Ref = useRef(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
           

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: con1Ref.current,
                    start: "top 60%",
                    // markers: true,

                }
            })

            tl.from(con1Ref.current,{
                x: -200,
                opacity:0,
                duration:1.5,
                delay:1,
                ease:"power3.out"
            })

            tl.to(bar1Ref.current, {
                scaleX: 0.25,
                duration: 1.5,
                // delay:1,
                ease: "power3.out",   
            })

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: con2Ref.current,
                    start: "top 60%",
                    // markers: true,

                }
            })

            tl2.from(con2Ref.current,{
                x: 200,
                opacity:0,
                duration:1.5,
                // delay:1,
                ease:"power3.out"
            })

            tl2.to(bar2Ref.current, {
                scaleX: 0.5,
                duration: 2,
                // delay:1,
                ease: "power3.out",   
            })


            const tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: con3Ref.current,
                    start: "top 60%",
                    // markers: true,

                }
            })

            tl3.from(con3Ref.current,{
                x: -200,
                opacity:0,
                duration:1.5,
                // delay:1,
                ease:"power3.out"
            })

            tl3.to(bar3Ref.current, {
                scaleX: 0.75,
                duration: 2.5,
                // delay:1,
                ease: "power3.out",   
            })



            const tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: con4Ref.current,
                    start: "top 60%",
                    // markers: true,

                }
            })

            tl4.from(con4Ref.current,{
                x: 200,
                opacity:0,
                duration:1.5,
                // delay:1,
                ease:"power3.out"
            })

            tl4.to(bar4Ref.current, {
                scaleX: 1,
                duration: 3,
                // delay:1,
                ease: "power3.out",   
            })


        })
          return () => ctx.revert();
    },[])


    // return () => ctx.revert();

// }, []);


return (
    <div className="launchpad">
        <div className="l-head">
            <h1 className="l-head-text">Launch your project with us</h1>
        </div>


        <div className="l-content">

            <div className="l-sec-1">
                <div className="l-sec-1-con" ref={con1Ref}>
                    <h1 className="l-sec-1-hn">01</h1>
                    <h1 className="l-sec-1-h">Knowledge and strategy</h1>
                    <p className="l-sec-1-p">We start by understanding your needs and goals, then we create a clear work plan to carry out the project.</p>

                    <div className="l-sec-1-progress-bar">

                        <div className="progress-wrap1">
                            <div className="progress-bar1" ref={bar1Ref}></div>
                        </div>

                    </div>
                </div>

                <div className=" l-svg-con1">
                    <img className='l-svg1' src={lpad1} alt='' />
                </div>
            </div>


            <div className="l-sec-2">
                <div className="l-sec-2-con" ref={con2Ref}>
                    <h1 className="l-sec-2-hn">02</h1>
                    <h1 className="l-sec-2-h">Creating a custom design</h1>
                    <p className="l-sec-2-p">Next, We design a layout tailored to your brand and audience.</p>

                    <div className="l-sec-2-progress-bar">

                        <div className="progress-wrap2">
                            <div className="progress-bar2" ref={bar2Ref}></div>
                        </div>

                    </div>
                </div>

                <div className=" l-svg-con2">
                    <img className='l-svg2' src={lpad2} alt='' />
                </div>
            </div>


            <div className="l-sec-3">
                <div className="l-sec-3-con" ref={con3Ref}>
                    <h1 className="l-sec-3-hn">03</h1>
                    <h1 className="l-sec-3-h">Development and testing</h1>
                    <p className="l-sec-3-p">we bring the project to life, ensuring everything works perfectly through thorough testing.</p>

                    <div className="l-sec-3-progress-bar">

                        <div className="progress-wrap3">
                            <div className="progress-bar3" ref={bar3Ref}></div>
                        </div>

                    </div>
                </div>

                <div className="l-svg-con3">
                    <img className=' l-svg3' src={lpad3} alt='' />
                </div>
            </div>


            <div className="l-sec-4">
                <div className="l-sec-4-con" ref={con4Ref}>
                    <h1 className="l-sec-4-hn">04</h1>
                    <h1 className="l-sec-4-h">Launch and support</h1>
                    <p className="l-sec-4-p">Finally, We launch your project online and stay by your side for continuous support and improvements.</p>

                    <div className="l-sec-4-progress-bar">

                        <div className="progress-wrap4">
                            <div className="progress-bar4" ref={bar4Ref}></div>
                        </div>

                    </div>

                </div>

                <div className="l-svg-con4">
                    <img className='l-svg4' src={lpad4} alt='' />
                </div>
            </div>


        </div>
    </div>
)
}
