import './App.css';
import { useState } from "react";
import Form from './ma3on 5idma/form';
import ListUsers from './ma3on 5idma/Users_list';
function App() {
  const [Users,setUsers] = useState([])
  const Add =(data) =>
  {
    setUsers([...Users,data]);
  }
  const Detele= (ind)=>
  {
    ind = parseInt(ind)
    setUsers(Users.filter((item,index)=>{
      return ind!==index;
    }))
  }
  return (
    <div className="container">
      <Form onSubmit={Add}/>
      {Users.length>0 ? <ListUsers onDelete={Detele} Users={Users}/>:<span></span>}
    </div>
  );
}

export default App;
