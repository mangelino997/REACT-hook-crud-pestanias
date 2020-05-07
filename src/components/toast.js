import React, { Component, Fragment } from 'react';

const Toast = () => {
    return (
        <Fragment>
            <div role="alert" aria-live="assertive" aria-atomic="true" className="toast" data-autohide="true">
                <div className="toast-header">
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    Usuario agregado!
                </div>
            </div>
        </Fragment>
    );
}

export default Toast;