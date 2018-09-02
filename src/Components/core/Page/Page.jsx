import React from 'react';

const Page = (props) => {
    return (
        <div className={`container ${props.className}`}>
            <div className="row" style={{minHeight: "100vh"}}>
                {props.children}
            </div>
        </div>
    );
};

export default Page;