import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="md:text-2xl uppercase font-semibold">
        Hi, Welcome &nbsp;
        {user && user.displayName}
      </h2>
    </div>
  );
};

export default UserHome;
