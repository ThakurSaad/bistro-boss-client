import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle
          heading={"Manage All Items"}
          subHeading={"Hurry up"}
        ></SectionTitle>
      </div>
      <div>
        <h5 className="text-3xl uppercase font-semibold">
          Total Users:{menu.length}
        </h5>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-orange-400">
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <span
                        className="tooltip tooltip-left"
                        data-tip="Update Item"
                      >
                        <button className="btn btn-warning md:text-2xl text-xl text-white">
                          <FaEdit></FaEdit>
                        </button>
                      </span>
                    </Link>
                  </td>
                  <td>
                    <span
                      className="tooltip tooltip-left"
                      data-tip="Delete Item"
                    >
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="btn btn-error md:text-2xl text-xl text-white"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
