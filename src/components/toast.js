import React, {Fragment } from 'react';

const Toast = () => {
    return (
        <Fragment>
            <div className="alert alert-success alert-dismissible fade show " role="alert">
                Agregado con éxito
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </Fragment>
    );
}

export default Toast;