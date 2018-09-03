import React from 'react';

const Page = (props) => {
    return (
        <div className={`container ${props.className} shadow px-5 py-3`} style={{borderRadius: "25px"}}>
            <div className="row" style={{minHeight: "100vh"}}>
                {props.children}
            </div>
        </div>
    );
};

export default Page;