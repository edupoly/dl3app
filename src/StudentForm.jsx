import { useFormik } from "formik";

function StudentForm() {
  //form setup//configuration
  var sform = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="mybox">
      <h1>StudentForm</h1>
      <form onSubmit={sform.handleSubmit}>
        <input type="text" name="firstname" onChange={sform.handleChange} />
        <br />
        <input type="text" name="lastname" onChange={sform.handleChange} />
        <br />
        <input type="text" name="age" onChange={sform.handleChange} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;
