import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form'  //mediante npm install react-hook-form

const UpdateUser = (props) => {

    const { register, errors, handleSubmit } = useForm();
    const u = {
        id: '', 
        name: '', 
        lastname: ''
    }
    const [user, setUser] = useState(u)

    const onSubmit = (data, e) => {
        e.preventDefault()
        data.id = user.id
        props.updateUser(data)
        e.target.reset()
        setUser(u)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        userSelected(props.list[e.target.value])
    }
    //recibe el usuario a actualizar
    const userSelected = (data) => {
        console.log(data)
        data? setUser(data) : setUser(u)
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select className="form-control form-control-sm" onChange={handleChange}>
                <option>Seleccione un usuario</option>

                    {props.list.map((user, index) =>
                        <option key={user.id} value={index}>{user.name} {user.lastname}</option>
                    )
                    }
                </select><br />
                <div className="form-group">
                    <input
                        placeholder="Ingrese nombre de usuario"
                        className="form-control"
                        name="name"
                        defaultValue={user.name}
                        ref={register({
                            required: {
                                value: true,
                                message: 'Nombre es requerido'
                            },
                            maxLength: {
                                value: 10,
                                message: 'No más de 5 carácteres!'
                            },
                            minLength: {
                                value: 4,
                                message: 'Mínimo 2 carácteres'
                            }
                        })}
                    ></input>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.name?.message}
                    </span>
                </div>
                <div className="form-group">
                    <input
                        placeholder="Ingrese apellido de usuario"
                        className="form-control"
                        name="lastname"
                        defaultValue={user.lastname}
                        ref={register({
                            required: {
                                value: true,
                                message: 'Apellido es requerido'
                            },
                            maxLength: {
                                value: 10,
                                message: 'No más de 5 carácteres!'
                            },
                            minLength: {
                                value: 4,
                                message: 'Mínimo 2 carácteres'
                            }
                        })}
                    ></input>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.lastname?.message}
                    </span>
                </div>
                <button
                    type="submit"
                    className="btn btn-success">
                    Actualizar
                                    </button>
            </form>
        </Fragment>
    );
}

export default UpdateUser;