import React, { useState } from 'react';
import './App.css';
import AddUser from './components/addUser';
import Tabs from './components/tabs';
import UpdateUser from './components/updateUser';
import LitsUser from './components/listUser';
import shortid from 'shortid' //npm install shortid

function App() {

  const [user, setUser] = useState()
  const [users, setUsers] = useState([])
  const [action, setAction] = useState('add')

  //agrega un usuario 
  const addU = (data) => {
    data.id = shortid.generate()
    console.log(data)
    setUsers([
      ...users, // con los ... estamos haciendo una copia del array que teníamos antes, gracias a eso
      //evitamos que se limpie el array en cada setUsers (estamos concatenando)
      data
    ])
  }

  //actualiza la lista de usuarios
  const updateU = (data) => {
    console.log(data)
    setUsers(users.map((user, index) => (user.id === data.id ? users[index] = data : user)))
    console.log(users)
  }

  //elimina un usuario 
  const deleteU = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="App">
      <section id="tabs" className="project-tab">
        <div className="container">
          <div className="row justify-content-center">
            <h1>Gestión de usuarios con pestañas</h1>
            <div className="col-md-6">
              <Tabs></Tabs>
              <br />
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-add" role="tabpanel" aria-labelledby="nav-add-tab">
                  <AddUser addUser={addU}></AddUser>
                </div>
                <div className="tab-pane fade" id="nav-update" role="tabpanel" aria-labelledby="nav-update-tab">
                  <UpdateUser list={users} updateUser={updateU}></UpdateUser>
                </div>
                <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                  <LitsUser list={users} deleteUser={deleteU}></LitsUser>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
