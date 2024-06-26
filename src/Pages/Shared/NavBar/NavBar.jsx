import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
  const [cart] = useCart();
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact us</Link>
      </li>
      {user && isAdmin && (
        <>
          <li>
            <Link to="/secret">Secret</Link>
          </li>
          <li>
            <Link to="/dashboard/adminHome">Dashboard</Link>
          </li>
        </>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <Link to="/dashboard/cart">
        <button className="btn text-xl">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </Link>
      {user ? (
        <>
          <li>
            <Link to="/" className="md:text-xl font-semibold uppercase">
              {user.displayName}
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost text-xl font-semibold uppercase"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed max-w-screen-2xl z-10 bg-opacity-10 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-black font-semibold uppercase menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-xl font-semibold uppercase menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
