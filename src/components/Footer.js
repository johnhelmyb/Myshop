import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col">
                        <h3>Service</h3>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className="col">
                        <h3>Service</h3>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className="col">
                        <h3>Service</h3>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    {/*Column4*/}
                    <div className="col">
                        <h3>Service</h3>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-small">
                        &copy;{new Date().getFullYear()} MYSHOP CO | Droit reservé | Conditions générales | Aide ?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
