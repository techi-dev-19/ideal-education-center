import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BRANCH_OPTIONS } from '../../data/campuses';

const GRADES = ['Nursery', 'K1', 'K2', ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];

const EMPTY = { name: '', email: '', mobile: '', grade: '', branch: '', message: '' };

// Frontend-only form. Connect `handleSubmit` to your backend / email service / Google Form.
export default function EnquiryForm({ showBranch = true }) {
  const [values, setValues] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with a real API call, e.g.
    // await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(values) })
    console.log('Enquiry submitted:', values);
    setSent(true);
    setValues(EMPTY);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="enq-name">Name*</label>
      <input id="enq-name" name="name" required value={values.name} onChange={onChange} placeholder="Parent name" />

      <label htmlFor="enq-email">E-mail*</label>
      <input id="enq-email" name="email" type="email" required value={values.email} onChange={onChange} placeholder="Email address" />

      <label htmlFor="enq-mobile">Mobile*</label>
      <input id="enq-mobile" name="mobile" type="tel" required pattern="[0-9+\-\s]{10,15}" value={values.mobile} onChange={onChange} placeholder="Mobile number" />

      <label htmlFor="enq-grade">Grade*</label>
      <select id="enq-grade" name="grade" required value={values.grade} onChange={onChange}>
        <option value="">Select grade</option>
        {GRADES.map((g) => (
          <option key={g}>{g}</option>
        ))}
      </select>

      {showBranch && (
        <>
          <label htmlFor="enq-branch">Branch*</label>
          <select id="enq-branch" name="branch" required value={values.branch} onChange={onChange}>
            <option value="">Select branch</option>
            {BRANCH_OPTIONS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </>
      )}

      <label htmlFor="enq-message">Message</label>
      <textarea id="enq-message" name="message" rows="4" value={values.message} onChange={onChange} placeholder="Message" />

      {sent && <p className="formMsg">Thank you! Your enquiry has been recorded. (Demo: connect this form to your backend.)</p>}

      <button className="btn" type="submit">
        Submit <ArrowRight size={17} />
      </button>
    </form>
  );
}
