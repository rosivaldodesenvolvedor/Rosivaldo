"use client";

import React, { useEffect } from "react";
import styles from "./style.module.scss";
import {  FaJava } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { Code, Palette, GitFork, Database, Archive, Zap, Atom, Github, Container, Server, GitBranch, Type, Feather, ChevronRight, TestTube, Cloud, Coffee, ClipboardList} from "lucide-react";

import { FaDatabase } from "react-icons/fa";
import {createEffect} from "@/utils/createEffect";
import ImagenMotion from "@/components/motionsCustom/image";
import TextMotion from "@/components/motionsCustom/text";


export default function Skills() {
//   return (
//     <section className={styles.skillsSection}>
//       <h2><TextMotion>Habilidades</TextMotion></h2>

//       <div className={styles.grid}>
//         {skills.map((skill, index) => (
//           <div key={index} className={styles.card}>
//             <div className={styles.icon}><ImagenMotion>{skill.icon}</ImagenMotion></div>
//             <p><TextMotion>{skill.name}</TextMotion></p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );


useEffect(()=>{
    createEffect();
},[])


return (
            <div id="skills" className="py-24 bg-gray-50">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                    <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>
                        Habilidades
                    </div>
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-indigo-100 text-indigo-600">
                            <Code className="w-6 h-6" />
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                             <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>HTML5</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-indigo-100 text-indigo-600">
                             <Palette className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>CSS3</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-yellow-100 text-yellow-600">
                             <Zap className="w-6 h-6" />
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>JavaScript</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-sky-100 text-sky-600">
                             <Atom className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>React.js</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-purple-100 text-purple-600">
                             <Container className="w-6 h-6" />
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Redux</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-green-100 text-green-600">
                            <Server className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Nodejs</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-red-100 text-red-600">
                             <GitBranch className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Git</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-blue-100 text-blue-600">
                            <Type className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>TypeScript</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-gray-200 text-gray-900">
                             <ChevronRight className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Nextjs</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-pink-100 text-pink-600">
                             <TestTube className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>React Testing Library</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-blue-100 text-blue-600">
                            <ClipboardList className="w-6 h-6" />
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Jira</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-pink-200 text-pink-700">
                            <Feather className="w-6 h-6" />
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Sass</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-gray-700 text-white">
                            <Github className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>GitHub</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-blue-300 text-white">
                            <Archive className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>BitBucket</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-orange-200 text-orange-700">
                            <GitFork className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>GitLab</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                         <div className="p-3 mb-3 rounded-full bg-blue-100 text-blue-600">
                            <ClipboardList className="w-6 h-6" />
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Jira</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                        <div className="p-3 mb-3 rounded-full bg-red-200 text-red-700">
                            <Database className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>SQL</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                         <div className="p-3 mb-3 rounded-full bg-orange-100 text-orange-600">
                            <Coffee className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Java</div>
                        </p>
                    </div>
                    <div className="card-base text-center p-6 flex flex-col items-center justify-center hover:shadow-indigo-500/20">
                         <div className="p-3 mb-3 rounded-full bg-sky-200 text-sky-700">
                            <Cloud className="w-6 h-6"/>
                        </div>
                        <p className="text-md font-semibold text-gray-700">
                            <div className="max-w-xl fade-in" style={{opacity: '0', transform: 'translateY(60px)'}}>Azure</div>
                        </p>
                    </div>

                </div>
            </section>
        </div>
);
}
