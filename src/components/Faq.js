

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const cardsData = [
  {
    id: 1,
    title: "What if I don’t like the design?",
    text: "We include feedback rounds and revisions to make sure the final design matches your vision.",
    img: "/colorimg.png"
  },
  {
    id: 2,
    title: "How do I know you’ll create the right website for my business?",
    text: "We start with research to understand your business, audience, and goals, ensuring the final result reflects your brand.",
    img: "/colorimg.png"
  },
  {
    id: 3,
    title: "How can I make sure my website appears on Google?",
    text: "We build every site with SEO best practices: fast loading, mobile-friendly design, and proper metadata. We also guide you on improving rankings over time.",
    img: "/colorimg.png"
  },
  {
    id: 4,
    title: "I’ve had a bad experience with an agency before. How are you different?",
    text: "We focus on clear communication, regular updates, and involving you in key decisions. You’ll always know the status of your project.",
    img: "/colorimg.png"
  },
  {
    id: 5,
    title: "How long does it take to build a website?",
    text: "Most websites take 2–4 months, depending on size and complexity. We provide regular updates so you always know the progress and timeline.",
    img: "/colorimg.png"
  }
];

export default function Faq() {
  const sliderRef = useRef(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    CustomEase.create("cubic", "0.83, 0, 0.17, 1");

    initializeCards();
  }, []);


//   const initializeCards = () => {
//     const cards = gsap.utils.toArray(".card");

//     gsap.to(cards, {
//       y: (i) => -15 + 15 * i + "%",
//       z: (i) => 15 * i,
//       duration: 1,
//       ease: "cubic",
//       stagger: -0.1,
//     });

//     gsap.set(".card h1", { y: -350 });
//     gsap.set(".card:last-child h1", { y: 0 });

//     gsap.set(".card p", { y: -350 });
//     gsap.set(".card:last-child p", { y: 0 });
//   };

    const initializeCards = () => {
  const cards = Array.from(sliderRef.current.querySelectorAll(".card"));

  gsap.to(cards, {
    y: (i) => -15 + 15 * i + "%",
    z: (i) => 15 * i,
    duration: 1,
    ease: "cubic",
    stagger: -0.1,
  });

  // hide all text first
  cards.forEach(card => {
    gsap.set(card.querySelector("h1"), { y: -350 });
    gsap.set(card.querySelector("p"), { y: -350 });
  });

  // show ONLY the top/front card
  const frontCard = cards[cards.length - 1];

  gsap.set(frontCard.querySelector("h1"), { y: 0 });
  gsap.set(frontCard.querySelector("p"), { y: 0 });
};




  const handleClick = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll(".card"));
    const lastCard = cards.pop();

    gsap.to(lastCard.querySelector("h1"), {
      y: 200,
      duration: 0.6,
      ease: "cubic",
    });
    gsap.to(lastCard.querySelector("p"), {
      y: 200,
      duration: 0.6,
      ease: "cubic",
    });

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.8,
      ease: "cubic",
      onComplete: () => {
        slider.prepend(lastCard);
        initializeCards();
        isAnimating.current = false;
      },
    });
  };

  return (
    <div className="faqc">
    <div className="hhfaq">
        <h1 className="hfaq">FAQ</h1>
    </div>
    <div className="slider-container" >
       
      <div className="slider" ref={sliderRef} onClick={handleClick}>
        <h1 className="hfaq2">FAQ</h1>
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.img} className="faqimg" alt="" />
            <div className="copy">
              <h1 className="faqh1t">{card.title}</h1>
              <p className="faqpt">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
