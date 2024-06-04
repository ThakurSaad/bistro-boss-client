import {
  FaCalendar,
  FaCalendarDay,
  FaHome,
  FaPhone,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdMenu, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { RiReservedFill } from "react-icons/ri";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin()

  // const isAdmin = false;
  console.log(isAdmin);

  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-orange-400">
        <ul className="menu uppercase font-semibold">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="text-xl"></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils className="text-xl"></FaUtensils>
                  Add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <MdMenu className="text-xl"></MdMenu>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <RiReservedFill className="text-xl"></RiReservedFill>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers className="text-xl" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome className="text-xl"></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar className="text-xl"></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart className="text-xl"></FaShoppingCart>
                  My Cart{" "}
                  <div className="badge badge-secondary">+{cart.length}</div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineRateReview className="text-xl"></MdOutlineRateReview>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBookings">
                  <FaCalendarDay className="text-xl"></FaCalendarDay>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome className="text-xl"></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdMenu className="text-xl"></MdMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBagShopping className="text-xl"></FaBagShopping>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPhone className="text-xl"></FaPhone>
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
