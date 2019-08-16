import React from 'react';

const Private = (props) => {

    setTimeout(() => {
        props.history.push('/')
    }, 1000);

    return(
        <div className="container">
            <h4 className="center">Private</h4>
                <h1 className='center'>GET OUT!</h1>
        </div>
    )

}

export default Private;