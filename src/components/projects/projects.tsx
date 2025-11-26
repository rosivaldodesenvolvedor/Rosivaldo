"use client";

import React, { ReactNode, useState } from "react";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import { Plus } from "lucide-react";
import TextMotion from "../motionsCustom/text";

import { projects } from "./dataProjects";

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  technologies: any;
  details: string;
  link: string;
}

export default function PortfolioCard() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div id="projects" className="py-24 bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Experiências Profissionais em Projetos Corporativos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div className="card-base overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  alt={project.title}
                  src={project.image}
                  fill
                  loading="lazy"
                  className="object-cover w-full h-full"
                  sizes="100vw"
                  style={{
                    position: "absolute",
                    inset: 0,
                    color: "transparent",
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-gray-500 text-sm mt-4">
                  {project.technologies.map((tecnologia: any) => tecnologia)}
                </div>
                <a
                  type="button"
                  className="btn-outline mt-4 p-2 w-full text-sm font-semibold hover:bg-indigo-50"
                  onClick={() => setSelected(project)}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Detalhes
                </a>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelected(null)}
          >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalImage}>
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  loading="lazy"
                  className="object-cover w-full h-full"
                  sizes="100vw"
                  style={{
                    position: "absolute",
                    inset: 0,
                    color: "transparent",
                  }}
                />
              </div>
              <div className={styles.modalContent}>
                <p style={{ whiteSpace: "pre-wrap" }}>{selected.details}</p>
                <p>
                  Link do site:{" "}
                  <a
                    href={selected.link}
                    target="blank"
                    style={{ color: "#007bff" }}
                  >
                    {selected.link}
                  </a>
                </p>
              </div>
              <button
                className={styles.closeButton}
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
