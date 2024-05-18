'use client'
import React from "react";
import Logo from "./imgs/GroupLogo_SalesForce.svg"
import Menu from "./imgs/Menu.svg"
import "./css/Header.css"
import "../Pagina_Inicial/page"


//-----------------------------------------------------


const Header = () =>{
    return(
        <>
        <header>
          
          <section className="section-principal-header">
            <div className="div-principal-header">
              <img className="menu-header" src={ Menu.src }/>
              <div className="opcoes-logo-header">
                <h1 className="opcoes-header">TRAIL FINDER</h1>
                <img className="LogoSalesForce-header" src={ Logo.src}/>
                <h1 className="opcoes-header"> TRAIL BLAZERS</h1>
              </div>
            </div> 
          </section>
          
        </header>
        </>
    )
}
export default Header;