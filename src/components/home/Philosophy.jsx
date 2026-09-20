import { useState } from "react";
import { IMAGES } from "../../data/site";

export default function Philosophy() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="section" id="philosophy">
      <div className="wrap">
        <div className={`philoGrid ${imgFailed ? "single" : ""}`}>
          <div className="philoText">
            <span className="eyebrow dark">OUR PHILOSOPHY</span>
            <div className="sectionHead" style={{ marginBottom: 0 }}>
              <h2>Education that uplifts lives</h2>
            </div>
            <p>
              IEC Schools was founded by Late Smt. Pushpa Khanna ji with a
              humble yet powerful beginning—just seven students and a deep
              belief that education must reach every child, especially those
              from modest and underserved backgrounds. What began as a small
              effort to serve the community has grown into a mission-driven
              institution committed to inclusive and meaningful education.
            </p>
            <p>
              At IEC, we believe that education is not only about academic
              success, but also about uplifting lives, building character, and
              creating opportunities. Our philosophy is rooted in the values of
              compassion, equality, discipline, and hard work, ensuring that
              every child, regardless of their circumstances, is given the
              chance to learn, grow, and succeed.
            </p>
            <p>
              We envision education as a tool for social mobility and
              responsible citizenship. Alongside academic learning, we focus on
              nurturing confidence, moral values, life skills, and a sense of
              responsibility towards society. By creating a supportive and
              respectful learning environment, IEC Schools strives to shape
              individuals who are capable, ethical, and prepared to contribute
              positively to the world around them.
            </p>
          </div>
          {!imgFailed && (
            <div className="philoImg">
              <img
                src={IMAGES.philosophy}
                alt="NLK students"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
              />
            </div>
          )}
        </div>

        <div className="twocol">
          <article>
            <span className="number">01</span>
            <h3>Our Vision</h3>
            <p className="quote">
              “To transform young minds into independent, skilled individuals
              for a better tomorrow.”
            </p>
          </article>
          <article>
            <span className="number">02</span>
            <h3>Our Mission</h3>
            <ul>
              <li>To provide quality education for all.</li>
              <li>To enhance academic growth and character development.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
