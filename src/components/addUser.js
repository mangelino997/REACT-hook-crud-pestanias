import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form'  //mediante npm install react-hook-form
import Toast from './toast'
const AddUser = (props) => {
    const { register, errors, handleSubmit } = useForm();
    const [showToast, setShowToast] = useState(false)

    const onSubmit = (data, e) => {
        e.preventDefault()
        props.addUser(data)
        setShowToast(true)
        e.target.reset()
    }


    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        placeholder="Ingrese nombre de usuario"
                        className="form-control"
                        name="name"
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
                    Agregar
                                    </button>
            </form>
            <div className="p-2">
                {showToast ? <Toast></Toast> : ''}
            </div>
        </Fragment>
    );
}

export default AddUser;