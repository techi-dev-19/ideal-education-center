import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AppLink from "../ui/AppLink";
import img1 from "../../../public/images/school_images.webp";
import img2 from "../../../public/images/school_images_2.webp";
import img3 from "../../../public/images/school_images_3.webp";
import img4 from "../../../public/images/school_images_4.webp";
import img5 from "../../../public/images/school_images_5.webp";

// 👉 apni actual images yaha daalo (public/images ke andar rakh ke path do)
const slides = [
  {
    image: img1,
    lines: ["Shaping", "Young Minds"],
    tagline: "Since 1947",
  },
  {
    image: img2,
    lines: ["Building", "Bright Futures"],
    tagline: "Since 1947",
  },
  {
    image: img3,
    lines: ["Nurturing", "Every Talent"],
    tagline: "Since 1947",
  },
  {
    image: img4,
    lines: ["Nurturing", "Every Talent"],
    tagline: "Since 1947",
  },
];

const leftTabs = [
  { label: "Scholarship", to: "/scholarship" },
  { label: "Career", to: "/career" },
  { label: "Our Vision", to: "/our-visionaries" },
  // { label: "NLK's Referral Program", to: "/referral" },
];

const rightTabs = [
  { label: "KES Annual Report 2025-26", to: "/reports/2025-26" },
  { label: "KES Annual Report 2024-25", to: "/reports/2024-25" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((i) => {
    setActive((i + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // autoplay - har 5 second me next slide
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="hero">
      {/* Fixed vertical tabs - left side */}
      <div className="sideTabs sideTabs--left">
        {leftTabs.map((tab) => (
          <AppLink key={tab.label} to={tab.to} className="sideTab">
            {tab.label}
          </AppLink>
        ))}
      </div>

      {/* Fixed vertical tabs - right side */}
      <div className="sideTabs sideTabs--right">
        {rightTabs.map((tab) => (
          <AppLink key={tab.label} to={tab.to} className="sideTab">
            {tab.label}
          </AppLink>
        ))}
      </div>

      {/* Image slider */}
      <div className="heroSlider">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`heroSlide ${i === active ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="heroSlideOverlay" />
          </div>
        ))}

        {/* <div className="heroContent">
          {slides[active].lines.map((line) => (
            <span key={line} className="heroHighlight">
              {line}
            </span>
          ))}
          <p className="heroTagline">{slides[active].tagline}</p>
        </div> */}

        <button
          className="heroNav heroNav--prev"
          onClick={prev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="heroNav heroNav--next"
          onClick={next}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        <div className="heroDots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`heroDot ${i === active ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
        }

        /* ---- Fixed vertical side category tabs ---- */
        .sideTabs {
          position: fixed;
          top: 60%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 100;
        }
        .sideTabs--left { left: 0; }
        .sideTabs--right { right: 0; }

        .sideTab {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          background: #c0272d;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 14px 8px;
          border-radius: 0 8px 8px 0;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
          transition: background 0.2s ease, padding 0.2s ease;
        }
        .sideTabs--right .sideTab {
          border-radius: 8px 0 0 8px;
          transform: rotate(180deg);
        }
        .sideTab:hover {
          background: #a51f24;
        }

        /* ---- Slider ---- */
        .heroSlider {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
        }
        .heroSlide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .heroSlide.is-active {
          opacity: 1;
        }
        .heroSlideOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 60%);
        }

        .heroContent {
          position: absolute;
          right: 8%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          z-index: 5;
        }
        .heroHighlight {
          background: #ffe066;
          color: #1a1a1a;
          font-family: 'Comic Sans MS', 'Segoe Print', cursive;
          font-weight: 700;
          font-size: clamp(28px, 4vw, 46px);
          padding: 6px 20px;
          line-height: 1.1;
        }
        .heroTagline {
          color: #c0272d;
          font-family: 'Comic Sans MS', 'Segoe Print', cursive;
          font-weight: 700;
          font-size: clamp(22px, 3vw, 34px);
          margin: 4px 0 0;
        }

        .heroNav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
        .heroNav--prev { left: 60px; }
        .heroNav--next { right: 60px; }

        .heroDots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        .heroDot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          border: none;
          cursor: pointer;
        }
        .heroDot.is-active {
          background: #c0272d;
          width: 22px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .heroSlider { height: 320px; }
          .heroContent { right: 5%; align-items: flex-end; text-align: right; }
          .sideTab { font-size: 11px; padding: 10px 6px; }
        }
      `}</style>
    </section>
  );
}
