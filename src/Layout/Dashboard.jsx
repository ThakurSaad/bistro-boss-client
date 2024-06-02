import {
  FaCalendar,
  FaCalendarDay,
  FaHome,
  FaPhone,
  FaShoppingCart,
} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdMenu, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-orange-400">
        <ul className="menu uppercase font-semibold">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart{" "}
              <div className="badge badge-secondary">+{cart.length}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdOutlineRateReview></MdOutlineRateReview>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaCalendarDay></FaCalendarDay>
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdMenu></MdMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBagShopping></FaBagShopping>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPhone></FaPhone>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 md:p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
