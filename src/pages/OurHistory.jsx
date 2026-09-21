import { HISTORY } from "../data/history";
import { usePageTitle } from "../hooks/usePageTitle";
import PageBanner from "../components/ui/PageBanner";

export default function OurHistory() {
  usePageTitle("Our History");
  return (
    <>
      <PageBanner title="Our History" eyebrow="About Us" />
      <div className="wrap pageContent">
        <div>Coming Soon..........</div>

        {/* <div className="timeline">
          {HISTORY.map((item) => (
            <article className="tItem" key={item.year + item.title}>
              <div className="tImg">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
                />
              </div>
              <div>
                <div className="tYear">{item.year}</div>
                <h2>{item.title}</h2>
                {item.text.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            </article>
          ))}
        </div> */}
      </div>
    </>
  );
}
