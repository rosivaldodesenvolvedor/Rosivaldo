"use client";

import { Link } from "react-scroll";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import style from "./style.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={style.header}>
      <div className={style.container}>
        {/* Logo */}
        <a href="#inicio" className={style.logo}>
          Portfólio
        </a>

        {/* Menu Desktop */}
        <nav className={style.nav}>
          <Link to="start" smooth={true} duration={1000}>
            Início
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            Sobre
          </Link>
          <Link to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
          <Link to="expirience" smooth={true} duration={1000}>
            Experiências
          </Link>
          <Link to="projects" smooth={true} duration={1000}>
            Projetos{" "}
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            Contato
          </Link>
        </nav>

        {/* Botão Hamburguer Mobile */}
        <button
          className={style.menu_toggle}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <nav className={`${style.mobile_nav} ${menuOpen ? style.open : ""}`}>
        <Link to="start" smooth={true} duration={1000} onClick={toggleMenu}>
          Início
        </Link>
        <Link to="about" smooth={true} duration={1000} onClick={toggleMenu}>
          Sobre
        </Link>
        <Link to="skills" smooth={true} duration={1000} onClick={toggleMenu}>
          Skills
        </Link>
        <Link
          to="expirience"
          smooth={true}
          duration={1000}
          onClick={toggleMenu}
        >
          Experiências
        </Link>
        <Link to="projects" smooth={true} duration={1000} onClick={toggleMenu}>
          Projetos
        </Link>
        <Link to="contact" smooth={true} duration={1000} onClick={toggleMenu}>
          Contato
        </Link>
      </nav>
    </header>
  );
}
