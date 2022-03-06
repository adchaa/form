import { useState } from "react";
import Error from "./Error";
import verif from "./verif";
function Form({ onSubmit }) {
  const [error, setError] = useState([]);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const add = (e) => {
    e.preventDefault();
    const data = {
      frist_Name: fName,
      last_Name: lName,
      Username: Username,
      Password: Password,
    };
    const v=verif(data);
    setError(v);
    if (v.length===0)
    {
      onSubmit(data);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={(e) => add(e)}>
        <h2 className="title">REGISTER</h2>
        <div className="input">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setfName(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setlName(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Error Elist={error} />
        <input type="submit" className="btn" value="Sign Up" />
      </form>
    </div>
  );
}

export default Form;
