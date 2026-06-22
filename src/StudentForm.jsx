import { useFormik } from "formik";
import * as Yup from "yup";
function StudentForm() {
  //form setup//configuration
  var sform = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("Ye babu legu")
        .min(3, "muddu perlu vaddu")
        .max(8, "Antha vaddu, kocham thagginchu"),
      password: Yup.string().matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
        "Yo Chuskobadla",
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  return (
    <div className="mybox">
      <h1>StudentForm</h1>
      <p>{JSON.stringify(sform.errors)}</p>
      <form onSubmit={sform.handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />

        <div>{sform.touched.firstname && sform.errors.firstname}</div>
        <input
          type="text"
          name="lastname"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <br />
        <input
          type="text"
          name="age"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <br />
        <input
          type="text"
          name="password"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
