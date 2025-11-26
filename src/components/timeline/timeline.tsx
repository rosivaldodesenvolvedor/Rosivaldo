"use client";

import { GraduationCap, Briefcase } from "lucide-react";

export default function Timeline() {
  return (
    <div id="expirience" className="py-24 bg-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Linha do Tempo Profissional e Educacional
        </h2>

        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-icon-wrapper">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="timeline-content">
              <span className="text-xl font-bold text-indigo-600 mb-2 block">
                2017
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Técnico em Redes de Computadores
              </h3>
              <p className="text-gray-700">
                <strong>Instituição:</strong> UemaNet
              </p>
              <p className="text-gray-600 text-sm">
                Formação técnica de 2 anos.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-icon-wrapper">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="timeline-content">
              <span className="text-xl font-bold text-indigo-600 mb-2 block">
                2018
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Superior em Sistemas para Internet
              </h3>
              <p className="text-gray-700">
                <strong>Instituição:</strong> Pitágoras
              </p>
              <p className="text-gray-600 text-sm">
                Graduação tecnológica de 3 anos.
              </p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-icon-wrapper">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="timeline-content">
              <span className="text-xl font-bold text-indigo-600 mb-2 block">
                2019
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Professor do curso técnico em informática
              </h3>
              <p className="text-gray-700">
                <strong>Empresa:</strong> UemaNet
              </p>
              <p className="text-gray-600 text-sm">
                Experiência em ensino por 1 ano.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-icon-wrapper">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="timeline-content">
              <span className="text-xl font-bold text-indigo-600 mb-2 block">
                2021
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Desenvolvedor de Software
              </h3>
              <p className="text-gray-700">
                <strong>Empresa:</strong> MyPharma
              </p>
              <p className="text-gray-600 text-sm">
                Atuação como desenvolvedor de software por 1 ano.
              </p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-icon-wrapper">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="timeline-content">
              <span className="text-xl font-bold text-indigo-600 mb-2 block">
                2024
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Desenvolvedor de Front End
              </h3>
              <p className="text-gray-700">
                <strong>Empresa:</strong> Compass.uol
              </p>
              <p className="text-gray-600 text-sm">
                Mais de 3 anos e 6 meses de experiência em projetos de grande
                escala.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-icon-wrapper">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="timeline-content">
              <span className="text-xl font-bold text-indigo-600 mb-2 block">
                Atualmente
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Desenvolvedor de Front End
              </h3>
              <p className="text-gray-700">
                <strong>Empresa:</strong> Grupo Adriano Cobuccio
              </p>
              <p className="text-gray-600 text-sm">
                Posição atual em desenvolvimento Front-End sênior.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
