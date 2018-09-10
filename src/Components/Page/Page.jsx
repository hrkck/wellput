import React from 'react';

const Page = (props) => {
    return (
        <div className={`container shadow px-4 px-md-5 py-4 py-md-3 ${props.className}`}>
            <div className="row minHeight-75">
                {props.children}
            </div>
        </div>
    );
};

export default Page;