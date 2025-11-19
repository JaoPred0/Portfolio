import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contato = () => {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        mensagem: "",
    });

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: form.nome,
                    from_email: form.email,
                    message: form.mensagem,
                },
                publicKey
            );

            setSent(true);
            setForm({ nome: "", email: "", mensagem: "" });
        } catch (error) {
            alert("Erro ao enviar email. Veja o console.");
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <>
            <div className="flex items-center my-8">
                <div className="flex-1 h-px bg-gray-500/30"></div>
                <span className="px-4 text-xl sm:text-2xl font-semibold text-white uppercase">
                    Contato
                </span>
                <div className="flex-1 h-px bg-gray-500/30"></div>
            </div>
            <section className="min-h-screen w-full flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="
          w-full max-w-4xl
          backdrop-blur-xl 
          p-10 
          shadow-2xl 
        "
                >
                    {/* TÍTULO */}

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* CARD DE INFORMAÇÕES */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="
              p-8
              shadow-xl 
              border border-primary/20 
              hover:border-primary 
              transition-all duration-300
            "
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">Informações</h3>

                            <div className="flex items-center gap-4 mb-5">
                                <Mail className="text-primary" />
                                <span className="text-base-content/80">
                                    joao.ferraz0494@gmail.com
                                </span>
                            </div>

                            <div className="flex items-center gap-4 mb-5">
                                <Phone className="text-primary" />
                                <span className="text-base-content/80">+55 (67) 99661-0494</span>
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <MapPin className="text-primary" />
                                <span className="text-base-content/80">
                                    Mato Grosso do Sul, Brasil
                                </span>
                            </div>

                            {/* BOTÃO WHATSAPP */}
                            <a
                                href="https://wa.me/5567996610494"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                btn 
                w-full 
                bg-green-600 
                hover:bg-green-700 
                text-white 
                border-none 
                shadow-lg 
                shadow-green-600/40 
                hover:shadow-green-600/60
                transition-all 
                duration-300 
                flex 
                gap-2
              "
                            >
                                <MessageCircle size={20} />
                                Falar no WhatsApp
                            </a>
                        </motion.div>

                        {/* FORMULÁRIO */}
                        <motion.form
                            onSubmit={sendEmail}
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="
              p-8 
              shadow-xl 
              border border-primary/20 
              hover:border-primary 
              transition-all duration-300
            "
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">Mensagem</h3>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base-content/70">Seu nome</span>
                                </label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={form.nome}
                                    onChange={handleChange}
                                    className="input input-bordered input-primary bg-base-300/50"
                                    placeholder="Digite seu nome"
                                    required
                                />
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base-content/70">Seu email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="input input-bordered input-primary bg-base-300/50"
                                    placeholder="Digite seu email"
                                    required
                                />
                            </div>

                            <div className="form-control mb-6">
                                <label className="label">
                                    <span className="label-text text-base-content/70">Mensagem</span>
                                </label>
                                <textarea
                                    name="mensagem"
                                    value={form.mensagem}
                                    onChange={handleChange}
                                    className="textarea textarea-bordered textarea-primary bg-base-300/50 min-h-[120px]"
                                    placeholder="Digite sua mensagem..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full flex items-center gap-2"
                                disabled={loading}
                            >
                                {loading ? "Enviando..." : "Enviar"} <Send size={18} />
                            </button>

                            {sent && (
                                <p className="text-green-500 mt-4 text-center font-semibold">
                                    Mensagem enviada com sucesso! ✔️
                                </p>
                            )}
                        </motion.form>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Contato;
