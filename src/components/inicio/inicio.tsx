"use client";

import React, { useEffect } from "react";
import { createEffect } from "@/utils/createEffect";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import Rosivaldo from "@/assets/rosivaldo.jpeg";
import Image from "next/image";
import "./inicio.css";

export default function Hero() {
  useEffect(() => {
    createEffect();
  }, []);

  return (
    <div id="start">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white rounded-xl shadow-xl border border-gray-100/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Esquerdo  */}
          <div>
            <div className="hero-content">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                <div
                  className="max-w-xl"
                  style={{ opacity: "0", transform: "translateY(60px)" }}
                >
                  Olá, eu sou o <br />
                  <span className="text-indigo-600">Rosivaldo :)</span>
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10">
                <div
                  className="max-w-xl"
                  style={{ opacity: "0", transform: "translateY(60px)" }}
                >
                  Desenvolvedor Front-End | Next.js | React.js | Node.js
                </div>
              </p>
              <div
                className="max-w-xl"
                style={{ opacity: "0", transform: "translateY(60px)" }}
              >
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="/assets/ROSIVALDO_SILVA.pdf"
                    download=""
                    className="btn-primary"
                  >
                    <FaDownload className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
                  <a href="#contact" className="btn-outline">
                    <FaEnvelope className="w-5 h-5 mr-2" />
                    Entrar em contato
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Avatar (Direita) */}
          <div className="flex justify-center items-center">
            <div className="p-1.5 bg-indigo-200 rounded-full w-80 h-80 sm:w-96 sm:h-96 flex justify-center items-center">
              <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-white transform hover:scale-[1.02] transition duration-500 ease-in-out">
                <div
                  className="relative w-full h-full fade-in-scale"
                  style={{ opacity: "0", transform: "scale(0.9)" }}
                >
                  {/* Placeholder Imagem Original */}
                  {/* <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                   
                  </div> */}
                  {/* Mantendo as tags originais (ajustadas para Tailwind/melhorias)  */}
                  <Image
                    alt="Foto de perfil"
                    src={Rosivaldo}
                    width={380}
                    height={380}
                    className="object-cover w-full h-full"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
