"use client";

import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import "./header.css"


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

        function toggleMobileMenu() {
            const mobileNav = document?.querySelector('.mobile-nav-style');
            mobileNav?.classList.toggle('hidden');
            setMenuOpen(!menuOpen);
        }
  return (
  <header className="header fixed w-full top-0 left-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <a href="#inicio" className="text-2xl font-bold tracking-tight text-indigo-600">Portfólio</a>
            <nav className="hidden md:flex space-x-6">
                <a href="#start" className="nav-link text-gray-600 hover:text-indigo-600 font-medium">Início</a>
                <a href="#about" className="nav-link text-gray-600 hover:text-indigo-600 font-medium">Sobre</a>
                <a href="#skills" className="nav-link text-gray-600 hover:text-indigo-600 font-medium">Skills</a>
                <a href="#expirience" className="nav-link text-gray-600 hover:text-indigo-600 font-medium">Experiências</a>
                <a href="#projects" className="nav-link text-gray-600 hover:text-indigo-600 font-medium">Projetos</a>
                <a href="#contact" className="nav-link text-gray-600 hover:text-indigo-600 font-medium">Contato</a>
            </nav>
            <button onClick={() => toggleMobileMenu()} className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition duration-150" aria-label="Menu">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
         {/* Mobile Nav Overlay  */}
        <nav className="mobile-nav-style hidden md:hidden bg-white shadow-xl">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#start" onClick={() => toggleMobileMenu()} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">Início</a>
                <a href="#about" onClick={() =>toggleMobileMenu()} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">Sobre</a>
                <a href="#skills" onClick={() =>toggleMobileMenu()} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">Skills</a>
                <a href="#expirience" onClick={() =>toggleMobileMenu()} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">Experiências</a>
                <a href="#projects" onClick={() =>toggleMobileMenu()} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">Projetos</a>
                <a href="#contact" onClick={() =>toggleMobileMenu()} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">Contato</a>
            </div>
        </nav>
    </header>
  );
}
