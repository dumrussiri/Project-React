import React from 'react';
import { Component } from 'react';
import Header from '../components/Header';
import Monitor from '../components/monitor/Monitor';
import Footer from '../components/Footer';
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component  {
    constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.productsFetch();
  }
  render (){
    return (
      <dir>
        <Header></Header>
        {this.props.products && Array.isArray(this.props.products) &&
        <Monitor products = {this.props.products}></Monitor>
       }
        <Footer Company = "KU" Email=""/>
      </dir>
    )
  }
}
function mapStateToProps({products}) {
  return { products }
}

export default connect(mapStateToProps, {productsFetch}) (Home);