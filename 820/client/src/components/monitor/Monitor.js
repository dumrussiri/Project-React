import React, {Component} from 'react';
import Calculator from './Calculator';
import ProductList from '../product/ProductList';
import axios from 'axios';

class Monitor extends Component{

    constructor(props) {
        super(props);
        this.state = {totalPrice: 0, totalCalories: 0, orders: [], confirm: false, msg: ''};
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancleOrder = this.cancleOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }
    
        addOrder(product){
            let FindOrder = this.state.orders.find(order => order.product.id == product.id);
            if(FindOrder){
                FindOrder.quantity++;
            } else {
                this.state.orders.push({product: product, quantity: 1});
            }
    
            const totalPrice = this.state.totalPrice +parseInt(product.unitPrice);
            const totalCalories = this.state.totalCalories +parseInt(product.Kilocalories);

            this.setState({totalPrice: totalPrice, orders: this.state.orders, confirm: false});
            this.setState({totalCalories: totalCalories, orders: this.state.orders, confirm: false});

        }
    
    
        delOrder(product){
            let findOrder = this.state.orders.find(order => order.product.id == product.id);
            let resultOrder = this.state.orders.filter(order => order.product.id != product.id);
            const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
            this.setState({totalPrice: totalPrice, orders: resultOrder, confirm: false});
            const totalCalories = this.state.totalCalories - (findOrder.quantity * parseInt(findOrder.product.Kilocalories));
            this.setState({totalCalories: totalCalories, orders: resultOrder, confirm: false});
        }
    
        confirmOrder(){
            const { totalPrice, totalCalories, orders} = this.state;
            if(orders &&  orders.length > 0)  {
            axios.post("  http://localhost:3001/orders", {orderedDate : new Date(), totalPrice, totalCalories, orders})
            .then(res => {
                this.setState({totalPrice: 0, totalCalories: 0, orders: [], confirm : true, msg: ' บันทึกรายการสั่งซื้อเรียบร้อย '});
            })
        } else {
            this.setState({totalPrice: 0, totalCalories: 0, orders: [], confirm : true, msg: ' เลือกสินค้าก่อนนะครับ '});
        }
    }
        cancleOrder(){
            this.setState({totalPrice: 0, totalCalories: 0,  orders: [], confirm: false});
        }
    
        render() {
            return(
                <div className="container-fluid">
                    { this.state.confirm &&
                    <div className="alert alert-secondary title text-right" role="alert">
                        {this.state.msg}
                    </div>
                    }
                    <div className="row">
                        <div className="col-md-9">
                            <ProductList products = {this.props.products} onAddOrder={this.addOrder}/>
                        </div>
                        <div className="col-md-3">
                            <Calculator totalPrice={this.state.totalPrice} totalCalories={this.state.totalCalories} orders={this.state.orders} onDelOrder={this.delOrder} onConfirmOrder={this.confirmOrder}  onCancelOrder={this.cancleOrder}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default Monitor;