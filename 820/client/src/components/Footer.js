import React from "react";

const  Footer = (props) => {
    const {Company, Email} = props
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-danger"> Powered By {Company} </span> | <span className="text-muted">Contract By Email : damrussiri@ku.th{Email} </span>
               </small>
            </div>
        </div>
    )
}

export default Footer;