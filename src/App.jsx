import { useState } from 'react'
import './App.css'



function App() {
 
  function validation(name, age, email, password, nation) {
    
  }

   function handleSubmit(e) {
    e.preventDefault()
    
    const isValid = validate

   }


  return (
    <>
      <h4 className="text-center">About Users</h4>
      <div className="forma w-50 mx-auto">
        <form onSubmit={handleSubmit} className="d-flex flex-column border p-4 mb-2">
          <div className="mb-1">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ismingizni kiriting
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder='Enter name'
            />
          </div>

          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Yoshingiz kiriting
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Emailingiz kiriting
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder='example@gmail.com'
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Parolingiz kiriting
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder='******'
            />
          </div>
          <div className="d-flex gap-5 mb-2 flex-wrap">
            <div className=" form-check">
              <input
                type="radio"
                className="form-check-input"
                name="jins"
                id="erkak"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Uzbek
              </label>
            </div>
            <div class="form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                English
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="jins"
                id="ayol"
              />
            </div>
            <div class="form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Russian
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="jins"
                id="ayol"
              />
            </div>
            <div class="form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Franch
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="jins"
                id="ayol"
              />
            </div>
            <div class="form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Korean
              </label>
              <input
                type="radio"
                className="form-check-input"
                name="jins"
                id="ayol"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
        <div className="table w-75 mx-auto">
          <div className="table-row">
            <table class="table border table-hover">
              <thead >
                <tr className='table-primary'>
                  <th scope="col">T/r</th>
                  <th scope="col">Ism</th>
                  <th scope="col">Yosh</th>
                  <th scope="col">Jinsi</th>
                  <th scope="col">Izoh</th>
                  <th scope="col">Tillar</th>
                  <th scope="col">Holati</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td width={370}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quam.</td>
                  <td>Otto</td>
                  <td>Turmush qurgan</td>
                  <td><i class="fa-solid fa-trash "></i> <i class="fa-solid fa-pen-to-square"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}

export default App
