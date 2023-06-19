import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  // el tag link es como el tag a, pero para react-router-dom, el to es como el href
  // el tag outlet es como el tag div, pero para react-router-dom
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;