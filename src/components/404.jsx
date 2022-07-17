import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <main dir="ltr">
        <h1>Page not found</h1>
        <p>
          Sorry we can't find that page. <Link to="/">Return to home</Link>
        </p>
      </main>
    </>
  );
}

export default NotFound;
