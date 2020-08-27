import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Enroll = (props) => {
    const enroll = props.enroll;
    const total = enroll.reduce((total, cousre) => total + cousre.fee,0)
    return (
        <div>
            <h3 className='text-success mt-5'>Get Coueses</h3>
            <p className='mt-5'>Enroll Course Item : {enroll.length}</p>
            <p>Total Fee : {total}</p>
        </div>
    );
};

export default Enroll;