import { SITE } from "../../data/site";

export default function PageBanner({ title, eyebrow }) {
  return (
    <section className="pageHero">
      <div className="wrap">
        <span className="eyebrow">{eyebrow || `IDEAL EDUCATION CENTER`}</span>
        <h1>{title}</h1>
      </div>
    </section>
  );
}
