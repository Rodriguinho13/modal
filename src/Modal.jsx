import React from "react";

const Modal = ({ isOpen,children }) => {
    return (
        <div>
            {isOpen ? (
            <div className="modal">
                {children}
                <div>
                    <h2>Estas seguro que quieres eliminar esta cuenta?</h2>
                    <div className="confirm">
                        <button>Si</button>
                        <button>No</button>
                    </div>
                </div>
                </div>
                ) : null}
        </div>
    );
};

export default Modal;