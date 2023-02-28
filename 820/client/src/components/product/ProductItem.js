import React, { Component, useEffect } from "react";
//import ReactTooltip from "react-tooltip";
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

class ProductItem extends Component{

    constructor(props){
    super(props);
                       
    }
    /*<div style={{ display: 'block', width: 250, padding: 30 }}>
                    <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                    <Tooltip {...props}>
                        {Detail}
                    </Tooltip>
                )}
                placement="bottom">
                    <img  className="img-fluid img-thumbnail" src={thumbnail}   />
                </OverlayTrigger>
                </div>*/
    /*<div data-tip data-for="Detail">
               
                    <ReactTooltip id="Detail" place="right" effect="solid" className="title">
                        {Detail}
                    </ReactTooltip>
                    </div>*/
    render(){
        const {productName, unitPrice, thumbnail , Detail, Kilocalories,} = this.props.product;

        return (
            <div className="col-md-3 col-sm-6">     
              <div style={{ display: 'block', width: 250, padding: 30 }}>
                    <OverlayTrigger
                    delay={{ hide: 100, show: 400}}
                    overlay={(props) => (
                    <Tooltip {...props} className="title" >
                        {Detail}
                    </Tooltip>
                )}
                placement="bottom">
                    <img  className="img-fluid img-thumbnail" src={thumbnail}   />
                </OverlayTrigger>
                </div>
                <h4 className="title text-center mt-2">{productName}</h4>  
                <p className="title text-right">{unitPrice} THB </p>
                <p className="title text-right">{Kilocalories} Kcals </p> 

                { this.props.onAddOrder &&
                <button className="btn btn-block btn-warning tittle"   Calories= {Kilocalories} value= {unitPrice} onClick={() => this.props.onAddOrder(this.props.product)}>
                    Buy
                </button>
                }

                { (this.props.onDelProduct || this.props.onEditProduct ) && 
                <button className="btn btn-warning col-5 tittle" onClick={() => this.props.onEditProduct(this.props.product)}>  
                    Edit
                </button>
                }

                { (this.props.onDelProduct || this.props.onEditProduct ) &&
                <button className="btn btn-danger btn-danger col-5 float-right tittle"  value= {unitPrice} Calories= {Kilocalories} onClick={() => this.props.onDelProduct(this.props.product)}>
                    Delete
                </button>
                }

                <hr />
            </div>
        )
    }
}

export default ProductItem;
