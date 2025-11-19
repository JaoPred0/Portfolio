import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { SiReact, SiTailwindcss, SiDaisyui, SiJavascript, SiCharles, SiChartdotjs, SiFirebase, SiLucide, SiPycharm, SiPython } from "react-icons/si";
const projects = [
    // EducaShop
    {
        title: "EducaShop",
        description:
            "EducaShop Central oferece materiais didáticos inovadores, livros digitais, apostilas e simulados, tornando o ensino prático e acessível, apoiando mais de 2.500 professores com conteúdos personalizados e suporte especializado.",
        skills: [
            { name: "React", icon: <SiReact className="text-[#61dafb] w-6 h-6" /> },       // Azul React oficial
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38bdf8] w-6 h-6" /> }, // Azul Tailwind
            { name: "Firebase", icon: <SiFirebase className="text-[#ffcb2b] w-6 h-6" /> }, // Amarelo Firebase
        ],

        githubUrl: "https://github.com/JaoPred0/EducaShop-Central",
        pageUrl: "https://educa-shop.vercel.app",
    },
    // Dinna Fitness
    {
        title: "Dinna Fitness",
        description:
            "Dinna Fitness é uma loja online de roupas fitness, oferecendo produtos de alta qualidade, estilos modernos e conforto incomparável, feita especialmente para clientes fiéis que valorizam justiça e autenticidade.",
        skills: [
            { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
            { name: "Firebase", icon: <SiFirebase className="text-[#ffcb2b] w-6 h-6" /> },

        ],
        githubUrl: "https://github.com/JaoPred0/Dinna-Fitness",
        pageUrl: "https://dinna-fitness.vercel.app",
    },
    // Paixao Pixel
    {
        title: "Paixao Pixel",
        description:
            "Paixão Pixel é uma loja online de criação de sites e aplicativos personalizados para casais. Permite guardar memórias, criar templates exclusivos e compartilhar momentos especiais com links únicos, para namorados e casados.",
        skills: [
            { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
            { name: "Firebase", icon: <SiFirebase className="text-[#ffcb2b] w-6 h-6" /> },

        ],
        githubUrl: "https://github.com/JaoPred0/Paixao-Pixel",
        pageUrl: "https://paixao-pixel.vercel.app",
    },
    // Amor Eterno
    {
        title: "Amor Eterno",
        description:
            "Amor Eterno é um template de site de namoro da Paixão Pixel. Permite criar páginas personalizadas com fotos e cartas cheias de mensagens fofas, ideal para presentear e celebrar o amor de forma online.",
        skills: [
            { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },

        ],
        githubUrl: "https://github.com/JaoPred0/Amor-Eterno",
        pageUrl: "https://amor-eterno-five.vercel.app",
    },
    // Nossa História
    {
        title: "Nossa História",
        description:
            "Nossa História é um template da Paixão Pixel que permite registrar e compartilhar momentos especiais do casal, com fotos, textos e lembranças, criando uma página online personalizada e cheia de carinho.",
        skills: [
            { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },

        ],
        githubUrl: "https://github.com/JaoPred0/Nossa-Historia",
        pageUrl: "https://nossa-historia-one.vercel.app",
    },
    // Portal Imigrantes
    {
        title: "Portal Imigrantes",
        description:
            "Portal Imigrantes é um site desenvolvido para a feira de ciências do IFMS Campus Dourados, destinado a apresentar uma pesquisa sobre imigrantes. O portal reúne informações, dados e conteúdos educativos para facilitar o entendimento sobre migração e diversidade cultural, apoiando o aprendizado e a apresentação do projeto.",
        skills: [
            { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },

        ],
        githubUrl: "https://github.com/JaoPred0/portal-imigrantes",
        pageUrl: "https://portal-imigrantes.vercel.app",
    },
    // NeuroTouch
    {
        title: "NeuroTouch",
        description:
            "NeuroTouch é um sistema em Python que utiliza a câmera e o rastreamento do esqueleto da mão para criar um quadro interativo de filtros de imagem. O sistema reage em tempo real aos movimentos, tamanhos e distâncias dos dedos, gerando efeitos dinâmicos conforme a posição e gestos das mãos.",
        skills: [
            { name: "Python", icon: <SiPython className="text-[#306998] w-6 h-6" /> }

        ],
        githubUrl: "https://github.com/JaoPred0/NeuroTouch",
        pageUrl: false,
    },
    // Curso-Js
    {
        title: "Curso-Js",
        description:
            "Curso gratuito de JavaScript disponível no GitHub, dividido em módulos práticos, ideal para iniciantes e intermediários, oferecendo exercícios, projetos e aprendizado progressivo de forma acessível e organizada.",
        skills: [
            { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e] w-6 h-6" /> }
        ],
        githubUrl: "https://github.com/JaoPred0/Curso-Js",
        pageUrl: false,
    },
];

export const Projetos = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <div className="flex items-center my-8">
                <div className="flex-1 h-px bg-gray-500/30"></div>
                <span className="px-4 text-xl sm:text-2xl font-semibold text-white uppercase">
                    Projetos
                </span>
                <div className="flex-1 h-px bg-gray-500/30"></div>
            </div>


            <div className="flex flex-wrap justify-center gap-6 p-6">
                <AnimatePresence>
                    {projects
                        .slice(0, showMore ? projects.length : 3)
                        .map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="hover-3d my-12 mx-2 cursor-pointer w-full sm:w-80 md:w-96"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="card bg-black text-white 
                        bg-[radial-gradient(circle_at_bottom_left,#ffffff05_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff05_35%,transparent_36%)] 
                        bg-size-[4.95em_4.95em] w-full shadow-lg overflow-hidden"
                                >
                                    <div className="card-body p-4">
                                        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                                        <p className="text-sm mb-2 opacity-40">{project.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map((skill, i) => (
                                                <div key={i} className="flex flex-col items-center gap-1">
                                                    {skill.icon}
                                                    <span className="text-xs text-white">{skill.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </motion.div>
                        ))}
                </AnimatePresence>
                {/* BOTÃO "MOSTRAR MAIS" */}
                {!showMore && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setShowMore(true)}
                        className="mt-4 px-6 py-2 btn-primary hover:btn-secondary transition-colors rounded-lg text-white font-semibold"
                    >
                        Mostrar mais projetos
                    </motion.button>
                )}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="hover-3d fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/60 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="card text-white 
                        bg-[radial-gradient(circle_at_bottom_left,#ffffff05_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff05_35%,transparent_36%)] 
                        bg-size-[4.95em_4.95em] w-full shadow-lg overflow-hidden max-w-lg p-6 border-neutral-950 border-2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h2>
                                <p className="mb-4 text-gray-300 text-sm sm:text-base">{selectedProject.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.skills.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-3 py-1 text-sm sm:text-base hover:scale-105 transition-transform"
                                        >
                                            {skill.icon} {/* Renderiza o ícone */}
                                            <span>{skill.name}</span> {/* Nome da skill */}
                                        </div>
                                    ))}

                                </div>

                                <div className="flex flex-wrap gap-4 mb-6">
                                    {selectedProject.githubUrl && (
                                        <a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {selectedProject.pageUrl && (
                                        <a
                                            href={selectedProject.pageUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
                                        >
                                            Página
                                        </a>
                                    )}
                                </div>

                                <button
                                    className="px-4 py-2 bg-black border-neutral-950 border-2 hover:bg-primary transition-colors text-sm sm:text-base w-full sm:w-auto"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    Fechar
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
