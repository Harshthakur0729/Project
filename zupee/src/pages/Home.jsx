import React, { useState } from 'react'
// import img from "../assets/img.png"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Is playing free-to-play online games on Zupee safe?",
            answer: "Yes. Playing games on Zupee is safe. We ensure a secure gaming experience.",
        },
        {
            question: "Do I need an internet connection to play free-to-play online games on Zupee?",
            answer:
                "Yes, since it’s a real-time multiplayer game, a stable internet connection is required.",
        },
        {
            question: "What devices support Zupee?",
            answer:
                "Zupee works on most Android and iOS smartphones. For the best experience, keep your app updated to the latest version.",
        },
    ];

    return (
        <>
            <div>
                <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-normal lg:ml-20 gap-10 p-5">
                    {/* Left Section */}
                    <div className="flex flex-col items-center lg:items-start justify-center p-5 lg:p-10 gap-5 text-center lg:text-left">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-[#342491]">
                            PLAY ONLINE LUDO GAME
                        </h1>

                        {/* Download Button */}
                        <div className="relative rounded-full flex justify-center w-full md:w-[25rem] lg:w-[30rem] bg-[#4b0fbf] overflow-hidden">
                            <a
                                href="https://your-download-link.com"
                                target="_blank"
                                className="flex items-center space-x-2 p-4 relative z-10"
                            >
                                <img
                                    src="https://static-perf1.zupee.com/wp-content/uploads/2024/01/android-icon-001-51.gif"
                                    alt="Android Icon"
                                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                                />
                                <span className="text-white font-semibold">Download App</span>
                            </a>

                            {/* Shining Overlay */}
                            <div className="absolute inset-0  pointer-events-none overflow-hidden">
                                <div className="absolute -top-1/2 -left-1/2 w-[120%] h-[300%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 shine"></div>
                            </div>

                            {/* Inline Keyframes */}
                            <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(60deg);
          }
          100% {
            transform: translateX(100%) rotate(130deg);
          }
        }
        .shine {
          animation: shine 2.5s ease-in-out infinite;
        }
      `}</style>
                        </div>




                    </div>

                    {/* Right Section (Fixed Image Size) */}
                    <img
                        src="https://static-perf1.zupee.com/blog-images/uploads/2025/08/Mobview_Feature_graphics.webp"
                        alt="Ludo Game"
                        className="h-[30rem] md:h-[35rem] lg:h-[40rem] object-contain"
                    />
                </div>


                <div className="lg:p-10 p-5 gap-5 text-center lg:text-left">
                    <div className="flex flex-col items-center lg:items-center gap-8 justify-center">
                        {/* Intro Section */}
                        <p className="font-sans leading-relaxed">
                            Zupee is a popular platform for free-to-play exciting online games. Our
                            game selection includes beloved classics with a twist, like Ludo in
                            exciting variations, Snakes &amp; Ladders, and the IPL-based cricket card
                            game Trump Cards Mania. These free-to-play online games let players test
                            their skills, compete, and enjoy seamless gaming. With Zupee, every game
                            is an opportunity to play for free and win, bringing the excitement to
                            your fingertips!
                        </p>

                        {/* Heading */}
                        <h1 className="text-2xl md:text-3xl italic font-bold text-[#342491]">
                            FREE ONLINE GAMES ON ZUPEE
                        </h1>

                        <p className="font-sans leading-relaxed">
                            Zupee offers different kinds of free online games that are easy to play,
                            help in skill development and enjoyable at the same time. The games are
                            based on popular classics but designed for shorter and faster formats.
                            Each game is simple to learn, helps in skill enhancement and has clear
                            instructions.
                            <br />
                            <br />
                            Here are the free-to-play games available on Zupee:
                        </p>

                        {/* Games Sections */}
                        <h1 className="text-2xl md:text-3xl italic font-bold text-[#342491] mt-6">
                            LUDO
                        </h1>
                        <p className="font-sans leading-relaxed">
                            Ludo is one of the most loved board games, and Zupee has reimagined it
                            with exciting formats. Instead of long matches, you get shorter and faster
                            games. Players have limited time to play and every step counts as you
                            collect points. The player with the highest score wins. It is designed to
                            keep the match quick and engaging.
                        </p>

                        <h1 className="text-2xl md:text-3xl italic font-bold text-[#342491] mt-6">
                            SNAKE &amp; LADDERS PLUS
                        </h1>
                        <p className="font-sans leading-relaxed">
                            Snakes &amp; Ladders is a childhood classic that many people still enjoy.
                            Zupee has added new twists to make it more interactive. In this version,
                            you start with multiple tokens. Every move adds points. If you cut an
                            opponent’s token, you score extra. Reaching the 100th square gives a big
                            bonus. Matches are short, and you can finish them in just a few minutes.
                            This makes it one of the most fun games to play in quick breaks.
                        </p>

                        <h1 className="text-2xl md:text-3xl italic font-bold text-[#342491] mt-6">
                            TRUMP CARDS MANIA
                        </h1>
                        <p className="font-sans leading-relaxed">
                            Trump Cards Mania is a cricket-based card game on Zupee. You get 11 cards
                            featuring top IPL batsmen divided into Gold, Silver, and Bronze tiers.
                            Each round, you pick a stat to challenge your opponent. Higher stats win
                            points, and special captain and vice-captain rounds give bonus scores.
                            <br />
                            These categories show how Zupee combines classic board and card games with
                            digital speed thereby helping in skill enhancement. You can enjoy them as
                            free games to play online anytime. Some people enjoy them casually, while
                            others focus on high scores.
                        </p>

                        <h1 className="text-2xl md:text-3xl italic font-bold text-[#342491] mt-6">
                            COMING SOON - YOUR NEXT BIG DESTINATION FOR ENTERTAINMENT TV
                        </h1>
                        <p className="font-sans leading-relaxed">
                            Something new is on the way! Very soon, you will see TV and short videos
                            come together in one place. But there’s a twist – something different,
                            something fresh, something you have never experienced before. What is it?
                            That’s the mystery. Stay tuned, because the surprise will be revealed
                            soon, and it’s going to be worth the wait.
                        </p>
                        <div style={{ backgroundColor: "#f0f3fc" }} className="w-full py-10 px-4 sm:px-6 lg:px-8">
                            {/* Heading */}
                            <h1 className="text-center text-2xl md:text-3xl italic font-bold text-[#342491] mb-8">
                                FAQS ABOUT ONLINE GAMES:
                            </h1>

                            {/* FAQ Content */}
                            <div className="w-full max-w-3xl mx-auto">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b-2 border-gray-300">
                                        {/* Question Row */}
                                        <div
                                            onClick={() => toggle(index)}
                                            className="flex justify-between items-center p-4 cursor-pointer"
                                        >
                                            <h1 className="font-bold text-lg md:text-2xl text-gray-900">{faq.question}</h1>
                                            {openIndex === index ? (
                                                <FaChevronUp className="text-[#342491]" />
                                            ) : (
                                                <FaChevronDown className="text-[#342491]" />
                                            )}
                                        </div>

                                        {/* Answer */}
                                        <div
                                            className={`transition-all duration-500 ease-in-out transform ${openIndex === index
                                                    ? "max-h-96 opacity-100 translate-y-0"
                                                    : "max-h-0 opacity-0 -translate-y-2"
                                                } overflow-hidden`}
                                        >
                                            <p className="p-4 text-gray-700 text-base md:text-lg">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                    </div>
                </div>








            </div>
        </>
    )
}

export default Home