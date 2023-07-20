import React, {useState} from 'react'
import { Form } from "react-router-dom";
import { WebHeader } from "../WebHeader";
import {SocMedia} from "../SocMedia";
import { WebFooter } from "../WebFooter";
import { Row, Col, Container } from 'react-bootstrap';
import { productsArray } from './ProductStore';
import {ProductCard} from './ProductCard';
import {CartProvider} from "../CartContext";

export default function Products() {

  return (
    <>
      <CartProvider>
          <WebHeader/>
          

          <Row xs={1} md={3} className="g-4" style={{backgroundColor:'#FFEADD',margin:'0'}} >
            {productsArray.map((product, idx) => (
              <Col align="center" key={idx}>
              <h1> {product.title} </h1>
              <ProductCard product={product}/>
            </Col>
            ))}
          </Row>
          <SocMedia/>
          <WebFooter/>
      </CartProvider>

    </>
    )
}