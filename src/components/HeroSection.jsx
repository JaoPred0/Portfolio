import { motion } from "framer-motion";
import { } from "@heroicons/react/24/outline";
import { DocumentArrowDownIcon, EnvelopeIcon, GlobeAltIcon, MinusSmallIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid";
import CodeMockup from "./CodeMockup";

const HeroSection = () => {

    return (
        <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16">

            {/* Lado Esquerdo - Nome, Resumo e Contato */}
            <motion.div
                className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Nome */}
                <h1 className="text-5xl sm:text-7xl font-bold tracking-widest">
                    João Pedro
                </h1>

                {/* Resumo */}
                <p className="max-w-xl text-lg sm:text-xl">
                    Programador especializado em React, com experiência em interfaces modernas usando Tailwind, Bootstrap, DaisyUI e SCSS. Também domino Python, Node.js, SQL e JavaScript.
                </p>

                {/* Contato */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <EnvelopeIcon className="w-6 h-6" />
                        <p>joao.ferraz0494@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <PhoneArrowDownLeftIcon className="w-6 h-6" />
                        <p>+55 (67) 99661-0494</p>
                    </div>
                </div>

                {/* Botão de Baixar CV */}
                <div className="mt-6 z-40">
                    <a
                        href="/JoaoPedro_CV.pdf"
                        download
                        className="btn btn-primary flex items-center gap-2"
                    >
                        <DocumentArrowDownIcon className="w-5 h-5" />
                        Baixar CV
                    </a>
                </div>
            </motion.div>

            {/* Lado Direito - Animação 3D */}
            <motion.div
                className="lg:w-1/2 w-full flex justify-center items-center mt-10 lg:mt-0"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <CodeMockup />
            </motion.div>

        </section>
    );
};

export default HeroSection;
