import { BookOpen, HeartHandshake, Medal, Users } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const ITEMS = [
  {
    title: "Academics",
    Icon: BookOpen,
    text: "Strong academic learning, structured curriculum delivery and continuous assessment, with a focus on conceptual clarity, regular practice and examination preparedness.",
  },
  {
    title: "Co-curricular",
    Icon: Users,
    text: "Systematically planned sports, cultural activities, clubs, competitions and value-based programs that promote discipline, creativity, leadership, teamwork and confidence.",
  },
  {
    title: "Sports & Fitness",
    Icon: Medal,
    text: "Regular physical training, organized sports activities and fitness routines that build strength, healthy habits, stamina and a spirit of sportsmanship.",
  },
  {
    title: "Career & Guidance",
    Icon: HeartHandshake,
    text: "Expert sessions, assessments, mentorship and exposure to diverse career pathways to help students make informed academic and career choices.",
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="section tint">
      <div className="wrap">
        <SectionHeading
          eyebrow="THE IEC DIFFERENCE"
          title="What sets us apart?"
        >
          At IEC, every student is offered a perfect blend of Academics,
          Co-curricular, Sports &amp; Fitness and Career &amp; Guidance.
        </SectionHeading>
        <div className="cards">
          {ITEMS.map(({ title, Icon, text }) => (
            <article className="feature" key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
