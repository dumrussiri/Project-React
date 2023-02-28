import React, {Component} from 'react';

class Calculator extends Component {
    showOrders (orders) {
        if(!orders || orders.length == 0){
           return <li className="tex-right text-mute title">ไม่มีสินค้า</li>
        } else { 
            return orders.map(order =>{
                return (
                <li key={order.product.id} className="text-right text-success title">
                    {order.product.productName} x {order.quantity} = { order.product.unitPrice * order.quantity} THB 
                     { order.product.Kilocalories * order.quantity} Kcals
                    <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                </li>
                )
            })

        }
    }
    render(){

        const { totalPrice, totalCalories, orders } =this.props;
        return(
            <div>              
                <h1 className="text-right">{totalPrice} THB</h1>
                <div className="text-right">{totalCalories} Kcals</div>
                <hr />

                <ul className="list-unstyled">
                   {this.showOrders(orders)}                  
                </ul>
                <hr />
                <button className="btn btn-block btn-success tittle" onClick={() => this.props.onConfirmOrder()}>Accept</button>
                <button className="btn btn-block btn-danger " onClick={() => this.props.onCancelOrder()}>Cancel</button>
            </div>
        );
    }
}
export default Calculator;