import React, { useRef, useState } from "react";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import Products from "./components/Products";

function App() {
  const [inputs, setInputs] = useState({
    userid: "",
    name: "",
    email: "",
  });
  const { userid, name, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      userid: "apple",
      name: "김사과",
      email: "apple@apple.com",
      active: true,
    },
    {
      id: 2,
      userid: "banana",
      name: "반하나",
      email: "banana@banana.com",
      active: false,
    },
    {
      id: 3,
      userid: "orange",
      name: "오렌지",
      email: "orange@orange.com",
      active: false,
    },
    {
      id: 4,
      userid: "melon",
      name: "이메론",
      email: "melon@melon.com",
      active: false,
    },
  ]);
  const nextId = useRef(5);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      userid,
      name,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      userid: "",
      name: "",
      email: "",
    });
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const [showProducts, setShowProducts] = useState(true);

  return (
    <>
      <CreateUser
        userid={userid}
        name={name}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />

      <hr />
      <div>
        {showProducts && <Products />}
        <button onClick={() => setShowProducts((show) => !show)}>
          제품 보기
        </button>
      </div>
    </>
  );
}
export default App;
