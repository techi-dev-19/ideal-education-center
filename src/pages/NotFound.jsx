import { usePageTitle } from '../hooks/usePageTitle';
import AppLink from '../components/ui/AppLink';
import PageBanner from '../components/ui/PageBanner';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <>
      <PageBanner title="Page not found" />
      <div className="wrap pageContent">
        <div className="notFound">
          <strong>404</strong>
          <p>The page you are looking for doesn't exist.</p>
          <AppLink to="/" className="btn">Go to Home</AppLink>
        </div>
      </div>
    </>
  );
}
