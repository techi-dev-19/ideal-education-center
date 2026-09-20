export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="sectionHead">
      {eyebrow && <span className="eyebrow dark">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
