import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";

const SignUp = () => {
  //   const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  //   useEffect(() => {
  //     loadCaptchaEnginge(6);
  //   }, []);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then(() => {
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log(res.data);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for joining us",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((err) => console.log(err));
    });
  };

  //   const handleValidateCaptcha = () => {
  //     const user_captcha_value = captchaRef.current.value;
  //     if (validateCaptcha(user_captcha_value)) {
  //       setDisabled(false);
  //     } else {
  //       setDisabled(true);
  //     }
  //   };

  return (
    <div>
      <Helmet>
        <title>Bistro boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold md:text-xl">
                    Name
                  </span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold md:text-xl">
                    Photo URL
                  </span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-500">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold md:text-xl">
                    Email
                  </span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold md:text-xl">
                    Password
                  </span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-500">
                    Password should be at least 6 characters
                  </p>
                )}
              </div>

              {/* captcha validation
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="Type the word above"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-4"
                >
                  Validate
                </button>
              </div> */}

              <div className="form-control mt-6">
                <input
                  //   disabled={disabled}
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>

            <div>
              <p className="text-center text-orange-400 mb-4">
                Already registered?{" "}
                <Link to="/login">
                  <span className="font-semibold">Go to login</span>
                </Link>
              </p>
            </div>
            <div className="text-center mb-4">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
