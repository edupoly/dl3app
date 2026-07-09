import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { updateUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  var [loginFn] = useLoginMutation();
  var dispatch = useDispatch();
  var navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      loginFn(values).then((res) => {
        if (res.data.token) {
          dispatch(updateUser(res.data));
          navigate("/cart");
        } else {
          alert("login failed");
        }
      });
      // Here you would typically dispatch an action to handle login
      console.log("Login values:", values);
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    id="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      formik.touched.password && formik.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    id="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
