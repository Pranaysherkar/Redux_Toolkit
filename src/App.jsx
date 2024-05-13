import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdelete, usercreate, userupdate } from "./reducer/UserReducer";

function App() {
  const { users } = useSelector((state) => state.Users);
  const dispatch = useDispatch();

  const createHandler = (User_name) => {
    const isNameAvailable = users.some(
      (user) => user.name.toLowerCase() === User_name.toLowerCase()
    );
    if (User_name.trim() === "") {
      alert("Please fill the Name");
    } else if (!isNameAvailable) {
      const id = Date.now();
      dispatch(usercreate({id, name: User_name }));
    } else {
      alert("This name already exist");
    }
  };
  const updateHandler = (id) => {
    const currentName = users.find(user => user.id === id)?.name || ""
    const edit_name = prompt(`edit name ${id}:`,currentName);
    dispatch(userupdate({id, edit_name}));
  };


  const deleteHandler = (User_index) => {
    dispatch(userdelete(User_index));
  };
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className=" h-auto w-1/2  bg-black text-white border px-5 py-5  ">
        <h1 className="font-semibold text-center text-4xl py-5 text-blue-400">
          User List
        </h1>
        <ul className="text-lg lowercase ">
          {users.map((elem, index) => (
            <li key={index} className="flex items-center mt-2">
              <h1 className="w-1/3"> * {elem.name} </h1>{" "}
              <div className="flex gap-8 ">
                <span
                  className="text-red-600 font-extrabold cursor-pointer border-2 px-2"
                  onClick={() => deleteHandler(index)}
                >
                  {" "}
                  X{" "}
                </span>
                <span
                  className="text-green-600 font-extrabold cursor-pointer border-2 px-2"
                  onClick={() => updateHandler(elem.id)}
                >
                  🖉
                </span>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="mt-5 px-2 py-1 bg-white text-black text-lg"
          onClick={() => createHandler(prompt("enter user name"))}
        >
          Add Users
        </button>
      </div>
    </div>
  );
}

export default App;
