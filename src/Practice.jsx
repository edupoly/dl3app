function Practice() {
  var students = [
    {
      firstname: "Jyothi",
      age: 20,
      gender: "Female",
    },
    {
      firstname: "Kaushik",
      age: 21,
      gender: "Male",
    },
    {
      firstname: "Sanjay",
      age: 16,
      gender: "Male",
    },
    {
      firstname: "Divya",
      age: 21,
      gender: "Female",
    },
    {
      firstname: "Sanjay",
      age: 22,
      gender: "Male",
    },
    {
      firstname: "Moukthika",
      age: 21,
      gender: "Female",
    },
    {
      firstname: "Harisha",
      age: 20,
      gender: "Female",
    },
  ];

  return (
    <div className="mybox">
      <h1>Lets understand JSX GenUI</h1>
      <table border="2" width="100%">
        {students.map((st) => {
          return (
            <tr>
              <td>{st.firstname}</td>
              <td>{st.age}</td>
              <td>{st.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Practice;
