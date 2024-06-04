import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };

      axiosPublic.post("/users", userInfo).then(() => {
        navigate("/");
      });
    });
  };

  return (
    <div>
      <div>
        <p className="pb-2">Or sign up with</p>
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="btn rounded-full btn-outline text-2xl mx-2 p-3"
          >
            <FaGoogle></FaGoogle>
          </button>
          <button className="btn rounded-full btn-outline text-2xl mx-2 p-3">
            <FaFacebook></FaFacebook>
          </button>
          <button className="btn rounded-full btn-outline text-2xl mx-2 p-3">
            <FaGithub></FaGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
