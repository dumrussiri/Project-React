import React, { Component } from "react";
import { Link } from "react-router-dom"

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
        
    }

    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000)
    }

    componentDidUpdate(){}
      componentWillUnmount(){
        clearInterval(this.timeID);
    }

    tick(){
        this.setState({date : new Date()});
    }

    render (){
        return (
            <div className="container-fulid">
                <div className="row">
                    <div className="Col-md-8 text-left">
                        <h1 className="text-success"><img style={{height : 70}} src="images/logo/h.png" alt="" /> Damrus CAFE</h1>
                    </div>
                    <div className="col-md-8 text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>

                        <ul className="list-inline">
                            <li className="list-inline-item title"><Link className="btn btn-info title" to="/">HOME</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link className="btn btn-info title" to="/orders">ORDER</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link className="btn btn-info title" to="/products">PRODUCT</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link className="btn btn-info title" to="/about">MY PAGE</Link></li>                            
                        </ul>
                    </div>
                </div>
                <hr />
            </div>    
        )
    }
}

export default Header;