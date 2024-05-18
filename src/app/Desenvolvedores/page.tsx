'use client'
import React from "react";
import Link from "next/link";
import "./css/style.css"
import fotos from "./fotos.json"

interface dados{
    id: number;
    src: string;
    text: string;
    text2: string;
}
const Desenvolvedores = () => {
    return(
        <>
             <h1 className="titulo-desenvolvedores">Desenvolvedores</h1>
            <section className="secao-desenvolvedores">
                 <div className="layout-desenvolvedores">
                    {fotos.map ((item1 : dados) =>(

                        <div className="imagens-paginaInicial">
                            <div className="layout-quadrado-desenvolvedores">
                                <a className="layout-imagem-desenvolvedores">
                                    <img className="formatacao-imagem-desenvolvedores" src={item1.src} />
                                </a>
                                <ul className="texto-imagem-desenvolvedores">
                                    <li>{item1.text}</li>
                                </ul>
                                <ul className="texto-imagem-desenvolvedores">
                                    <li>{item1.text2}</li>
                                </ul>
                            </div>
                        </div> ))}
                </div>
                <button className="button-desenvolvedores" > 
                    <svg className="svg-github"  fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" href="https://github.com/Marcondezz/SalesForce">
                        <g stroke-width="0" id="SVGRepo_bgCarrier" href="https://github.com/Marcondezz/SalesForce"></g>
                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier"> <title>github</title> 
                        <rect fill="none" height="24" width="24"></rect> 
                        <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> 
                        </g></svg>
                        Continue with Github 
                </button>
            </section>
            </>
    )
}
export default Desenvolvedores;