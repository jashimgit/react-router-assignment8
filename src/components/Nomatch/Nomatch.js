import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Nomatch = () => {
    return (
        <div className="container mt-4">
            <div className="alert alert-warning mx-auto text-center">
                <h2 className="display-4 text-danger"> Sorry !! Requested Page NOT FOUND</h2>
                <h3 className="text-danger"> <FontAwesomeIcon icon={faExclamationCircle} /> Error 404 <FontAwesomeIcon icon={faExclamationCircle} /> </h3>
            </div>
        </div>
    );
};

export default Nomatch;