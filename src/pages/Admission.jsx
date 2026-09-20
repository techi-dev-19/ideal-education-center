import {
  ADMISSION_NOTES,
  ADMISSION_RESULT_NOTE,
  ADMISSION_STEPS,
  ADMISSION_TESTS,
  ADMISSION_TEST_NOTE,
} from '../data/admission';
import { usePageTitle } from '../hooks/usePageTitle';
import PageBanner from '../components/ui/PageBanner';
import EnquiryForm from '../components/ui/EnquiryForm';

export default function Admission() {
  usePageTitle('Admission');
  return (
    <>
      <PageBanner title="Admission" />
      <div className="wrap pageContent">
        <h2>Dear Parents,</h2>
        <p className="lead">
          A warm welcome. Thank you for choosing our school and considering it as the right place for your child.
        </p>

        <h3>Admission Procedure</h3>
        <div className="steps">
          {ADMISSION_STEPS.map((s, i) => (
            <div key={i}>
              <span>{i + 1}</span>
              <p>{s}</p>
            </div>
          ))}
        </div>

        <div className="noteBox">
          <h3>Please Note:</h3>
          <ol>
            {ADMISSION_NOTES.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
            <li>
              A test will be conducted as follows:
              <ul className="testList">
                {ADMISSION_TESTS.map((t) => (
                  <li key={t.grade}>
                    <b>{t.grade}:</b> {t.detail}
                  </li>
                ))}
              </ul>
              <p>{ADMISSION_TEST_NOTE}</p>
            </li>
            <li>{ADMISSION_RESULT_NOTE}</li>
          </ol>
        </div>

        <h2>Enquire Now</h2>
        <div style={{ maxWidth: 680 }}>
          <EnquiryForm />
        </div>
      </div>
    </>
  );
}
