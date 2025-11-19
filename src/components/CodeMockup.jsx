import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CodeMockup = () => {
    const lines = [
        { type: "typing", prefix: "$", text: "npm init -y", color: "text-white" },
        { type: "status", prefix: ">", text: "creating package.json...", color: "text-yellow-400" },
        { type: "status", prefix: ">", text: "Done! 🎉", color: "text-green-500" },
        { type: "typing", prefix: "$", text: "npm i chalk", color: "text-white" },
        { type: "status", prefix: ">", text: "resolving dependencies...", color: "text-yellow-400" },
        { type: "status", prefix: ">", text: "package chalk installed successfully", color: "text-green-500" },
        { type: "typing", prefix: "$", text: "touch hello.js", color: "text-white" },
        { type: "status", prefix: ">", text: "file hello.js created", color: "text-green-500" },
        { type: "typing", prefix: "$", text: "nano hello.js", color: "text-white" },
        { type: "status", prefix: ">", text: "writing code...", color: "text-yellow-400" },
        { type: "typing", prefix: "", text: "import chalk from 'chalk';", color: "text-blue-400" },
        {
            type: "typing",
            prefix: "",
            text: `<h1 class="text-4xl font-bold text-green-500">Hello, World!</h1>`,
            color: "text-white"
        },
        { type: "typing", prefix: "$", text: "node hello.js", color: "text-white" },
        { type: "status", prefix: ">", text: "Program executed successfully 🚀", color: "text-blue-400" },
        { type: "link", prefix: ">", text: "Local: http://localhost:3000", color: "text-blue-500" }, // link clicável
    ];

    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const containerRef = useRef(null);
    const runningRef = useRef(false);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const typeLine = async (line) => {
        if (line.type === "status" || line.type === "link") {
            setDisplayedLines(prev => [...prev, { ...line }]);
            await sleep(700);
        } else if (line.type === "typing") {
            let text = "";
            setCurrentLine({ prefix: line.prefix, text, color: line.color });

            for (let i = 0; i < line.text.length; i++) {
                text += line.text[i];
                setCurrentLine({ prefix: line.prefix, text, color: line.color });
                await sleep(60);
            }

            setDisplayedLines(prev => [...prev, { ...line }]);
            setCurrentLine(null);
            await sleep(400);
        }
    };

    useEffect(() => {
        if (runningRef.current) return;
        runningRef.current = true;

        const run = async () => {
            for (let i = 0; i < lines.length; i++) {
                await typeLine(lines[i]);
            }
        };
        run();
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [displayedLines, currentLine]);

    return (
        <div className="space-y-6">
            {/* Terminal */}
            <div
                ref={containerRef}
                className="mockup-code w-full p-6 font-mono text-sm rounded-xl"
                style={{
                    background: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    width: "400px",
                    overflowY: "auto", // scroll interno
                }}
            >
                {displayedLines.map((line, i) => (
                    <motion.pre
                        key={i}
                        data-prefix={line.prefix}
                        className={line.color + (line.type === "link" ? " cursor-pointer underline" : "")}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => line.type === "link" && setModalOpen(true)}
                    >
                        <code>{line.text}</code>
                    </motion.pre>
                ))}

                {currentLine && (
                    <motion.pre
                        data-prefix={currentLine.prefix}
                        className={currentLine.color}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <code>
                            {currentLine.text}
                            <span className="animate-blink">|</span>
                        </code>
                    </motion.pre>
                )}

                <style>{`
          .animate-blink {
            display: inline-block;
            width: 1ch;
            background: currentColor;
            animation: blink 1s steps(2, start) infinite;
          }
          @keyframes blink {
            0%, 50% { background: currentColor; }
            50.01%, 100% { background: transparent; }
          }
        `}</style>
            </div>

            {/* Modal do Browser */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 backdrop-blur-md bg-black/60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-3xl h-full sm:h-[80%] rounded-xl p-2 sm:p-4"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <div className="mockup-browser border bg-black w-full h-full rounded-lg overflow-hidden flex flex-col">
                                {/* Barra do mockup */}
                                <div className="mockup-browser-toolbar bg-black p-2 relative flex justify-between items-center">
                                    <div className="input text-sm sm:text-base truncate">
                                        http://localhost:3000
                                    </div>
                                    <button
                                        className="absolute top-2 right-3 font-bold text-xl hover:text-red-500 transition-colors"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        ×
                                    </button>
                                </div>

                                {/* Conteúdo central */}
                                <div className="flex-1 grid place-content-center text-center px-2">
                                    <h1 className="text-3xl sm:text-4xl font-bold text-green-500">
                                        Hello, World!
                                    </h1>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default CodeMockup;
