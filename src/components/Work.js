import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import code from '../assets/images/code.svg'
import settings from '../assets/images/settings.svg'
import search from '../assets/images/search.svg'
import css from '../assets/images/css.svg'

gsap.registerPlugin(ScrollTrigger);

export const Work = () => {
  const worktxtRef = useRef(null);
  const sideboxRef = useRef(null);
  const wordpressRef = useRef(null);
  const seoRef = useRef(null);
  const pluginRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia()

      mm.add("(max-width: 768px)", () => {

        gsap.from(sideboxRef.current, {
          opacity: 1,
          y: 300,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sideboxRef.current,
            start: "top 100%",
            markers: false,
            scrub: false,
            toggleActions: "play none none none"
          }
        });

        gsap.from(worktxtRef.current, {
          opacity: 0,
          scale: 0,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: worktxtRef.current,
            start: "top 70%",
            //     markers: {
            //     startColor: "#ffffff",
            //     endColor: "#ffffff",
            //     fontSize: "20px",
            //     indent: 40
            // },
            // scrub:true,
            toggleActions: "play none none none"
          }
        })

        gsap.from(wordpressRef.current, {
          opacity: 1,
          y: 300,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wordpressRef.current,
            start: "top 100%",
            // markers: true,
            // scrub: true,
            toggleActions: "play none none none"
          }
        });

        gsap.from(seoRef.current, {
          opacity: 1,
          y: 250,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: seoRef.current,
            start: "top 100%",
            // markers: true,
            // scrub: true,
            toggleActions: "play none none none"
          }
        });

        gsap.from(pluginRef.current, {
          opacity: 1,
          y: 250,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pluginRef.current,
            start: "top 100%",
            // markers: true,
            // scrub: true,
            toggleActions: "play none none none"
          }
        });

      })

      mm.add("(min-width: 769px)", () => {

        gsap.from(sideboxRef.current, {
          opacity: 1,
          y: 300,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sideboxRef.current,
            start: "top 102%",
            // markers: true,
            // scrub: true,
            toggleActions: "play none none none"
          }
        });


        gsap.from(wordpressRef.current, {
          opacity: 1,
          y: 300,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wordpressRef.current,
            start: "top 102%",
            // markers: true,
            // scrub: true,
            toggleActions: "play none none none"
          }
        });

        gsap.from(seoRef.current, {
          opacity: 1,
          y: 250,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: seoRef.current,
            start: "top 101%",
            // markers: true,
            // scrub: true,
            toggleActions: "play none none none"
          }
        });

        gsap.from(pluginRef.current, {
          opacity: 1,
          y: 250,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pluginRef.current,
            start: "top 101%",
            // markers: true,
            // scrub: true,
            toggleActions: "play none none none"
          }
        });

        gsap.from(worktxtRef.current, {
          opacity: 0,
          scale: 0,
          duration: 3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: worktxtRef.current,
            start: "top 55%",
            //     markers: {
            //     startColor: "#ffffff",
            //     endColor: "#ffffff",
            //     fontSize: "20px",
            //     indent: 40
            // },
            // scrub:true,
            toggleActions: "play none none none"
          }
        })

      })



    }, worktxtRef);


    return () => ctx.revert();

  }, []);


  return (
    <div className='wk-main'>
      <div className='wk-flex-center'> <h1 className='w-text work-text text-[#fff]' ref={worktxtRef}>What we do</h1></div>

      <div className='wk-flex-row-around'>
        <section className='section-one' >

          <div className='side-box' ref={sideboxRef}>

            <h1 className='side-box-head'>Web Design</h1>

            <p className='side-box-text'>We build websites that not only look exceptional but operate seamlessly. Our development services deliver reliable, scalable, and intuitive solutions for businesses of every scale. From concept to execution, we’ve got you covered.</p>

            <div className='side-box-flex'>
              <img className='side-box-svg' src={code} alt='image eror' />
              <button className='side-box-btn' onClick={()=>{
                document.getElementById('connect').scrollIntoView({behavior:'smooth'})
              }}> Connect with us</button>
            </div>
          </div>
        </section>

        <section className='section-two'>
          <div className='wordpress-box' ref={wordpressRef}>

            <div className=' wordpress-inner'>
              <div className='wordpress-section '>

                <div className='wordpress-left'>

                  <h1 className='wordpress-heading'>WordPress Support</h1>

                  <p className='wordpress-text'>If your WordPress site has errors, bugs, slow performance,
                    or needs updates, our support service is here to help. We diagnose and fix issues, boost speed, improve
                    security, and keep your site running smoothly. With fast and reliable support, you’ll have a stable, secure,
                    high-performing WordPress site—without the stress.
                  </p>

                  {/* <div className='wordpress-btn-container'>
                    <button className='wordpress-btn'>let's connect</button>
                    </div> */}

                </div>
                <div className='wordpress-right '>
                  <img className='wordpress-img' src={settings} />
                </div>
              </div>

              <div className='wordpress-btn-container'>
                <button className='wordpress-btn' onClick={()=>{
                document.getElementById('connect').scrollIntoView({behavior:'smooth'})
              }}>let's connect</button>
              </div>

            </div>
          </div>

          <div className=' seo-plugin-con'>

            <div className=' seo-box' ref={seoRef}>
              <div className='seo-header'>
                <h1 className='seo-heading'>SEO </h1>
                <img className='seo-svg' src={search} />
              </div>
              <p className='seo-text '>Boost your digital presence with strategic, data-driven SEO solutions. We optimize your website to secure higher search rankings, expand visibility to the right audience, and attract high-quality organic traffic that drives real business growth.</p>

            </div>

            <div className=' plugin-box' ref={pluginRef}>
              <div className='plugin-header'>
                <h1 className=' plugin-heading'>Plugin Development</h1>
                <img className='plugin-svg' src={css} />
              </div>
              <p className='plugin-text'>We develop custom plugins that integrate seamlessly with your system, extend functionality, improve performance, and enable smarter automation.</p>

            </div>
          </div>

        </section>

      </div>

      <div className='request-container'>
        <button className='request-btn' onClick={()=>{
                document.getElementById('connect').scrollIntoView({behavior:'smooth'})
              }}>Request a quote</button>
      </div>

    </div>
  )
}
