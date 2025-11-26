"use client";

import styles from "./style.module.scss";
import { Mail, Github, Linkedin, MessagesSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <div id="contact" className="py-24 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          COMO ME ENCONTRAR
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card-base text-center p-8 flex flex-col items-center hover:shadow-indigo-500/20">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h3>
            <p className="text-gray-600">rosivaldoedeus@gmail.com</p>
          </div>

          <a
            href="https://github.com/rosivaldodesenvolvedor"
            target="_blank"
            className="block"
          >
            <div className="card-base text-center p-8 flex flex-col items-center hover:shadow-indigo-500/20 h-full">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 text-white">
                <Github  className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                GitHub
              </h3>
              <p className="text-gray-600">@rosivaldodesenvolvedor</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rosivaldo-sousa/"
            target="_blank"
            className="block"
          >
            <div className="card-base text-center p-8 flex flex-col items-center hover:shadow-indigo-500/20 h-full">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Linkedin
              </h3>
              <p className="text-gray-600">@rosivaldo-sousa</p>
            </div>
          </a>

          <a
            href="https://wa.me/5599984354285"
            target="_blank"
            className="block"
          >
            <div className="card-base text-center p-8 flex flex-col items-center hover:shadow-indigo-500/20 h-full">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white">
                <MessagesSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Whatsapp
              </h3>
              <p className="text-gray-600">55 (99) 98435-4235</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
