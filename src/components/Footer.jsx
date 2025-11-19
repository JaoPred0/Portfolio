import React from "react";
import { motion } from "framer-motion";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import {
    Facebook,
    Instagram,
    Github,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="text-base-content pt-16 pb-8 px-6">
            <div className="divider"></div>
            {/* SEÇÕES DO FOOTER */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
            >

                {/* Sobre */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Sobre</h3>
                    <p className="opacity-70 leading-relaxed">
                        Desenvolvedor React especializado em interfaces modernas,
                        animações e soluções escaláveis. Criando experiências digitais
                        rápidas, elegantes e profissionais.
                    </p>
                </div>

                {/* Navegação */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Navegação</h3>
                    <ul className="space-y-2 opacity-80">
                        <li>
                            <a href="#home" className="hover:text-primary duration-200 cursor-pointer">Home</a>
                        </li>
                        <li>
                            <a href="#projetos" className="hover:text-primary duration-200 cursor-pointer">Projetos</a>
                        </li>
                        <li>
                            <a href="#timeline" className="hover:text-primary duration-200 cursor-pointer">Timeline</a>
                        </li>
                        <li>
                            <a href="#contato" className="hover:text-primary duration-200 cursor-pointer">Contato</a>
                        </li>
                    </ul>
                </div>


                {/* Contato */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Contato</h3>

                    <div className="flex items-center gap-3 mb-3 opacity-80">
                        <EnvelopeIcon className="h-5 w-5 text-primary" />
                        <span>joao.ferraz0494@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3 mb-3 opacity-80">
                        <PhoneIcon className="h-5 w-5 text-primary" />
                        <span>+55 (67) 99661-0494</span>
                    </div>

                    <div className="flex items-center gap-3 opacity-80">
                        <MapPinIcon className="h-5 w-5 text-primary" />
                        <span>Mato Grosso do Sul, Brasil</span>
                    </div>
                </div>

                {/* Redes sociais */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Redes sociais</h3>

                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://www.instagram.com/jaoo.predo"
                            target="_blank"
                            className="p-3 bg-base-200 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <Instagram size={22} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/JaoPred0"
                            target="_blank"
                            className="p-3 bg-base-200 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            <Github size={22} />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* LINHA DE BAIXO */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 pt-6 border-t border-base-100/30 text-center opacity-60"
            >
                <p className="text-sm">
                    © {new Date().getFullYear()} João Pedro — Todos os direitos reservados.
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
