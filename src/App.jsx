import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { validation, getUsers } from "./utils/functions";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [nation, setNation] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState('');

  useEffect(() => {
    let u = getUsers();
    setUsers(u);
  }, []);

  function handleRadio(value) {
    setNation(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validation(name, age, email, pass, nation);
    if (isValid) {
      const user = {
        name: name,
        age: age,
        email: email,
        pass: pass,
        nat: nation,
        id: nanoid(),
      };

      let copied = JSON.parse(JSON.stringify(users));
      copied.push(user);
      localStorage.setItem("users", JSON.stringify(copied));
      setName("");
      setAge(0);
      setEmail("");
      setPass("");
    }
  }
  function handleUpdate(e) {
    e.preventDefault()
    const isValid = validation(name, age, email, pass, nation);
    if (isValid) {
      const user = {
        name: name,
        age: age,
        email: email,
        pass: pass,
        nat: nation,
        id: updateId,
      }
      let copied = JSON.parse(JSON.stringify(users));
     copied = copied.map(el => {
      if (el.id == updateId) {
        el = user
      }
      return el;
     })
      setUsers(copied);
      localStorage.setItem('users', JSON.stringify(copied))
      setName("");
      setAge(0);
      setEmail("");
      setPass("");
    }
  }
  function handleUpdateItem(user) {
    setName(user.name)
    setAge(user.age)
    setEmail(user.email)
    setPass(user.pass)
    setNation(user.nat)
  setIsUpdate(true)
  setUpdateId(user.id)
}
  return (
    <>
      <h4 className="text-center">About Users</h4>
      <div className="forma w-50 mx-auto">
        <form
          className="d-flex flex-column border p-4 mb-2">
          <div className="mb-1">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ismingizni kiriting
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Yoshingiz kiriting
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Emailingiz kiriting
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Parolingiz kiriting
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="******"
              id="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className="d-flex gap-5 mb-2 flex-wrap">
            <div className=" form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Uzbek
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="nation"
                id="uzbek"
                value="uzbek"
                checked = {nation == 'uzbek' ? true : false }
                onChange={(e) => {
                  handleRadio(e.target.value);
                }}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                English
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="nation"
                checked = {nation == 'english' ? true : false }
                id="english"
                value="English"
                onChange={(e) => {
                  handleRadio(e.target.value);
                }}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Russian
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="nation"
                id="russian"
                checked = {nation == 'russian' ? true : false }
                value="Russian"
                onChange={(e) => {
                  handleRadio(e.target.value);
                }}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Korean
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="nation"
                id="korean"
                checked = {nation == 'korean' ? true : false }
                value="Korean"
                onChange={(e) => {
                  handleRadio(e.target.value);
                }}
              />
            </div>
          </div>
          {
            !isUpdate && <button onClick={handleSubmit} type="submit" className="btn btn-primary">
            Submit
          </button>
          }
          {
            isUpdate && <button onClick={handleUpdate} type="submit" className="btn btn-success">
            Update
          </button>
          }
        </form>
      </div>
      <div className="table w-75 mx-auto">
        <div className="table-row">
          <table className="table border table-hover">
            <thead>
              <tr className="table-primary">
                <th scope="col">T/r</th>
                <th scope="col">Ism</th>
                <th scope="col">Yosh</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Tillar</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>{user.pass}</td>
                      <td>{user.nat}</td>
                      <td>
                        <i className="fa-solid fa-trash "></i>{" "}
                        <i onClick={() => {handleUpdateItem(user)}} className="fa-solid fa-pen-to-square"></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
