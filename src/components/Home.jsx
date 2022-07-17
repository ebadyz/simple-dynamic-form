import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((state) => state.data);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "100px",
        }}
      >
        {data.map((link, index) => (
          <Link
            key={index} // pass index is not a good approach
            to={`form/${link.path}`}
          >
            {link.form} page
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
