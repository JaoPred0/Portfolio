import React, { useRef, useEffect, useState } from "react";

export default function Timeline() {
    const containerRef = useRef(null);
    const [hovering, setHovering] = useState(false);

    const eventos = [
        { data: "Agosto 2022", desc: "Comecei com HTML & CSS" },
        { data: "Dez 2022", desc: "Aprendi JavaScript" },
        { data: "Fev 2023", desc: "Primeiro projeto com HTML/CSS/JS" },
        { data: "Mar 2023", desc: "Criei +20 projetos front-end" },
        { data: "Abr 2023", desc: "Comecei a aprender React" },
        { data: "Out 2023", desc: "Primeira landing page em React" },
        { data: "Abr 2024", desc: "Minha 1ª loja online (React + dados locais)" },
        { data: "Jun 2024", desc: "Estudo de Banco de Dados" },
        { data: "Set 2024", desc: "Primeiro site usando Firebase" },
        { data: "Jan 2025", desc: "Primeiros sites grandes com design avançado" },
        { data: "Mar 2025", desc: "Comecei com React Native" },
        { data: "Jun 2025", desc: "1º App em React Native + MongoDB" },
        { data: "Set 2025", desc: "Minha 1ª loja para cliente (Fitness)" }
    ];

    // === Scroll suave ===
    useEffect(() => {
        const box = containerRef.current;
        if (!box) return;

        const handleWheel = (e) => {
            if (!hovering) return;

            const scrollLeft = box.scrollLeft;
            const maxScroll = box.scrollWidth - box.clientWidth;

            const atStart = scrollLeft <= 0;
            const atEnd = scrollLeft >= maxScroll - 1;

            if (atStart && e.deltaY < 0) return;
            if (atEnd && e.deltaY > 0) return;

            e.preventDefault();
            const speed = 2;
            const movement = e.deltaY * speed;

            let start = null;
            const startLeft = box.scrollLeft;
            const target = startLeft + movement;

            const animate = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / 120, 1);
                box.scrollLeft = startLeft + (target - startLeft) * progress;
                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        box.addEventListener("wheel", handleWheel, { passive: false });
        return () => box.removeEventListener("wheel", handleWheel);
    }, [hovering]);

    return (
        <>
            <div className="flex items-center my-8">
                <div className="flex-1 h-px bg-gray-500/30"></div>
                <span className="px-4 text-xl sm:text-2xl font-semibold text-white uppercase">
                    Timeline
                </span>
                <div className="flex-1 h-px bg-gray-500/30"></div>
            </div>
            <div className="relative w-full py-10">

                {/* Fade esquerdo */}
                <div className="
        pointer-events-none absolute left-0 top-0 h-full w-32 
        bg-gradient-to-r from-black/80 to-transparent z-30">
                </div>

                {/* Fade direito */}
                <div className="
        pointer-events-none absolute right-0 top-0 h-full w-32 
        bg-gradient-to-l from-black/80 to-transparent z-30">
                </div>

                {/* Container rolável */}
                <div
                    ref={containerRef}
                    className="w-full overflow-x-auto overflow-y-hidden no-scrollbar relative z-10"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                >
                    <ul className="timeline timeline-horizontal w-max">
                        {eventos.map((ev, index) => {
                            const isTop = index % 2 === 0;
                            const isFirst = index === 0;
                            const isLast = index === eventos.length - 1;

                            return (
                                <li key={index} className="min-w-[180px] select-none">

                                    {!isFirst && <hr />}

                                    <div className="timeline-middle">
                                        <div className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
                                    </div>

                                    {isTop ? (
                                        <div className="timeline-start timeline-box p-3 rounded-xl text-sm max-w-[180px] shadow-md">
                                            <p className="font-bold text-primary">{ev.data}</p>
                                            <p className="opacity-80">{ev.desc}</p>
                                        </div>
                                    ) : (
                                        <div className="timeline-end timeline-box p-3 rounded-xl text-sm max-w-[180px] shadow-md">
                                            <p className="font-bold text-primary">{ev.data}</p>
                                            <p className="opacity-80">{ev.desc}</p>
                                        </div>
                                    )}

                                    {!isLast && <hr />}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
