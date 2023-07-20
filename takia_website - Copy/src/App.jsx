import { WebHeader } from "./WebHeader";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Carousel } from "./components/Carousel";
import {slides} from "./data/carouselData.json";
import {SocMedia} from "./SocMedia";
import { WebFooter } from "./WebFooter";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from "./CartContext";

export default function App() {

  return (
    <>
  
      <CartProvider>
          <WebHeader/>
          <Carousel data={slides} />
          <SocMedia/>
          <WebFooter/>
      </CartProvider>

    </>
  )
}