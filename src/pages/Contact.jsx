import { Mail, MapPin, Phone } from "lucide-react";
import { CAMPUSES } from "../data/campuses";
import { SITE } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";
import PageBanner from "../components/ui/PageBanner";
import EnquiryForm from "../components/ui/EnquiryForm";

// Unique campuses for the contact list (PKMC appears twice in the campus data)
const BRANCHES = CAMPUSES.filter(
  (c, i, arr) => arr.findIndex((x) => x.name === c.name) === i,
);

export default function Contact() {
  usePageTitle("Contact Us");
  return (
    <>
      <PageBanner title="Contact Us" />
      <div className="wrap pageContent">
        <div className="contactgrid">
          <div>
            <h2>Ideal Education Center</h2>
            <p>
              Speak with our admissions team for campus visits and guidance.
            </p>
            <div className="contactlist">
              <p>
                <Phone size={18} />{" "}
                <span>
                  <b>Toll Free</b>
                  <br />
                  <a href={"tel:7843935876"}>+91-7843935876</a>
                  <br />
                  <a href={"tel:7843935876"}>+91-9936823573</a>
                </span>
              </p>
              <p>
                <Mail size={18} />{" "}
                <span>
                  <b>Email</b>
                  <br />
                  <a href={`mailto:${SITE.email}`}>
                    idealeducationcentre2@gmail.com
                  </a>
                </span>
              </p>
              <p>
                <MapPin size={18} />{" "}
                <span>
                  <b>Address</b>
                  <br />
                  ward no 8, shivli road, near darshani cold store, Shivarajpur,
                  Kanpur, Uttar Pradesh 209205
                </span>
              </p>
            </div>
          </div>
          <div>
            <h2 style={{ marginTop: 0 }}>Send us a message</h2>
            <EnquiryForm showBranch={false} />
          </div>
        </div>

        {/* <h2>Our Campuses</h2>
        <div className="branchGrid">
          {BRANCHES.map((c) => (
            <div className="branch" key={c.id}>
              <h3>{c.name}</h3>
              <p>{c.address}</p>
              <p>Mobile - {c.phone}</p>
              <p>
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </p>
            </div>
          ))}
        </div> */}

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.965338726369!2d80.13631057116395!3d26.681591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c2d041113ed11%3A0xa0bdb17b5be2b8a0!2sideal%20education%20centre!5e0!3m2!1sen!2sin!4v1789923760543!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe> */}

        <iframe
          className="mapFrame"
          title="NLK Inter College location"
          src={SITE.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
