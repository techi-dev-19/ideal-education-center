// import { IMAGES } from "../../data/site";
import SectionHeading from "../ui/SectionHeading";
import img1 from "../../../public/images/school_police_activity.webp";
import img2 from "../../../public/images/school_newsa.webp";
import img3 from "../../../public/images/school_activity.webp";
import img4 from "../../../public/images/school_6.webp";
import img5 from "../../../public/images/school_images_2.webp";
import img6 from "../../../public/images/school_images_3.webp";
import img7 from "../../../public/images/school_images_4.webp";
import img8 from "../../../public/images/school_images_5.webp";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function MediaCoverage() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading eyebrow="IN THE ACTIVITY" title="School Coverage" />
        <div className="gallery">
          {IMAGES.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Media coverage ${i + 1}`}
            >
              <img
                src={src}
                alt={`Media coverage ${i + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) =>
                  (e.currentTarget.parentElement.style.display = "none")
                }
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
