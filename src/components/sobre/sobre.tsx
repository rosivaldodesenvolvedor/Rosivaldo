"use client";

import React, { useEffect } from "react";
import { createEffect } from "@/utils/createEffect";
import Front from "@/assets/front.png";
import Image from "next/image";
import "./sobre.css";

export default function Hero() {
  useEffect(() => {
    createEffect();
  }, []);

  return (
    <div id="about" className="py-24 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-bold text-center text-gray-900 mb-16"
          style={{ justifyItems: "center" }}
        >
          <div
            className="max-w-xl"
            style={{ opacity: "0", transform: "translateY(60px" }}
          >
            Construindo Soluções Digitais
          </div>
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image (Reestilizada com Card e Sombra)  */}
          <div className="flex justify-center">
                  <Image
                    alt="Desenvolvimento Front-End"
                    src={Front}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority={false}
                    loading="lazy"
                  />
          </div>

          {/* Right: Content (Texto Original)  */}
          <div className="space-y-6 text-lg text-gray-600">
            <div
              className="max-w-xl"
              style={{ opacity: "0", transform: "translateY(60px" }}
            >
              <p>
                Sou Desenvolvedor Front-End com foco em soluções escaláveis,
                performáticas e centradas na experiência do usuário. Tenho
                experiência sólida em e-commerce, atuando com React, Next,
                Redux, JavaScript e integrações com Oracle Commerce e Adobe
                Experience Manager (AEM). Já desenvolvi no Open Storefront
                Framework (OSF) da Oracle e personalize o painel de
                administração do AEM com Java.
              </p>
              <p>
                Também possuo vivência em desenvolvimento Full Stack com
                Node.js, integração de APIs, criação de componentes
                reutilizáveis e testes para garantir qualidade e desempenho.
                Trabalho em equipes ágeis, participo de code reviews e sigo as
                melhores práticas para entregar soluções robustas e eficientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
