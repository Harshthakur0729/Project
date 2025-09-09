import React, { useState } from 'react'
import img from "../assets/img.png"
import { Link } from "react-router-dom"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";



const Ludo = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    const faqs = [
        {
            question: "Is playing Ludo online free on Zupee?",
            answer: "Yes, Zupee offers completely free versions of Ludo.",
        },
        {
            question: " How long do matches last?",
            answer: "Most games finish within 5–10 minutes, depending on the format.",
        },
        {
            question: "What are some common misspellings of the word Ludo?",
            answer: "While searching for online Ludo games, many users mistakenly type “Ludo” in different ways. Common misspellings include Loddo, Lido, Lubo, Leedo, Ledo, Luda, and Lufo. All of these refer to the same traditional board game. If you've typed any of these, you're still in the right place to enjoy the digital version of the game. Just make sure to search accurately to find the best free Ludo game experiences online.",
        },
        {
            question: "What is the difference between offline Ludo and online Ludo?",
            answer:
                "Ludo offline is the physical board game we've all grown up playing with family and friends. Ludo offline is nothing but classic Ludo. In contrast, online Ludo versions like those on the free Ludo app Zupee bring that same fun to your screen. The online version is faster, more competitive, helps in skill development, more strategy and gives you a seamless experience.",
        },
        {
            question: "What are the common misspellings of Zupee Ludo?",
            answer: "Many users search for Zupee using incorrect spellings like Zupi, Zuppy, Jupi, Zupe, Zupp, Zeepee, Zuppi, Zoopi, Zuppee, Up Ludo, or even UP game. These variations all refer to the same skill-based gaming platform—Zupee. To avoid confusion or downloading the wrong app, always search for Zupee Ludo on the official app store or visit the Zupee website..",
        },
    ];



    return (

        <>


            {/* Top breadcrumb */}
            <div className="text-sm p-4 sm:p-5" style={{ backgroundColor: "#f0f3fc" }}>
                <div className="max-w-6xl mx-auto text-center md:text-left">
                    <Link to="/" className="font-semibold text-purple-700">
                        Home
                    </Link>{" "}
                    &gt; <span>Ludo</span>
                </div>
            </div>

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
                    src={img}
                    alt="Ludo Game"
                    className="h-[30rem] md:h-[35rem] lg:h-[40rem] object-contain"
                />
            </div>

            <div className="bg-white text-black flex flex-col items-center p-10">
                {/* Top Paragraph */}
                <p className="max-w-6xl mb-12 text-xl leading-relaxed font-sans">
                    Play your favourite Ludo board game on Zupee—completely free! Challenge
                    real players, enjoy fast-paced matches, and experience seamless gaming.
                    The best part? Free games give you the thrill of strategy, skill and
                    competition. Whether you want to be the Ludo King or Queen in your
                    circle, this is your chance. Keep playing, keep improving, and master
                    Ludo the smart way
                </p>

                {/* Heading */}
                <h2 className="text-2xl font-extrabold italic text-purple-800 mb-6 it text-center ">
                    ABOUT THE LUDO GAME ONLINE
                </h2>

                {/* Content */}
                <div className="max-w-6xl text-justify space-y-4 font-sans text-xl leading-relaxed">
                    <p>
                        Ludo is a strategy-based board game for two to four players, where
                        tokens race from start to finish based on dice rolls. Originating from
                        the ancient Indian game Pachisi, it has remained a favorite for
                        generations. Interestingly, many users often misspell it online as
                        Loddo, Lido, Lubo, Leedo, Ledo, Luda, or Lufo—but no matter the
                        spelling, its popularity never fades.
                    </p>

                    <p>
                        With mobile platforms, Ludo has transformed into a digital experience.
                        Playing Ludo online lets you carry the board in your pocket. With
                        Zupee, the same joy is accessible anytime, anywhere—bringing families,
                        friends, and communities together on a single platform.
                    </p>

                    <p>
                        Zupee offers quick 2-player duels or intense 4-player matches, with
                        multiple gameplay modes. So whether you’re a seasoned strategist or
                        just starting, Zupee’s free online Ludo gives you a new way to enjoy a
                        timeless classic with modern speed and excitement.
                    </p>
                </div>
            </div>


            <div className="bg-white text-black flex flex-col items-center p-10 space-y-16">
                {/* Section 1 */}
                <div className="max-w-6xl space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold italic text-purple-800 text-center">
                        HOW TO PLAY FREE LUDO ONLINE ON ZUPEE
                    </h2>

                    <p className="text-lg sm:text-xl leading-relaxed font-sans">
                        Whether you’ve been the master of Ludo among friends or are just a
                        beginner, Zupee’s version of free Ludo keeps things fresh while
                        respecting the traditional charm. The platform adds a competitive edge
                        to the gameplay while keeping the essence of strategy and skill
                        intact. Whether you are a fresher or a King or Queen of Ludo among
                        your friends, family and foes, Zupee offers an exciting take on the
                        game that rewards quick thinking, skill, strategy and smart token
                        moves.
                    </p>
                    <p className="text-lg sm:text-xl leading-relaxed font-sans">
                        Here are the steps on how to play free Ludo online on one of the top
                        Ludo apps available:
                    </p>

                    {/* Steps */}
                    <div className="space-y-10 mt-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold italic text-purple-800 text-center mb-3">
                                STEP 1: CHOOSE YOUR FORMAT
                            </h3>
                            <p className="text-lg sm:text-xl leading-relaxed font-sans">
                                Select your preferred free Ludo format: Ludo Supreme, Ludo Turbo,
                                or Ludo Supreme League. Each version provides unique challenges,
                                from fast matches to multi-round strategic battles.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold italic text-purple-800 text-center mb-3">
                                STEP 2: START PLAYING
                            </h3>
                            <p className="text-lg sm:text-xl leading-relaxed font-sans">
                                Once you choose your format, begin your match. No need to wait for
                                a 6—all tokens are open from the start. Every move counts, so plan
                                your strategy wisely.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold italic text-purple-800 text-center mb-3">
                                STEP 3: SCORE POINTS
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-lg sm:text-xl leading-relaxed font-sans">
                                <li>
                                    In Ludo Supreme and Turbo, every token move earns you 1 point.
                                </li>
                                <li>
                                    Bringing a token home gives you bonus points (varies by format).
                                </li>
                                <li>
                                    In the Ludo Supreme League, each token on the board carries fixed
                                    points.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold italic text-purple-800 text-center mb-3">
                                STEP 4: UNLOCK EXTRA MOVES
                            </h3>
                            <p className="text-lg sm:text-xl leading-relaxed font-sans">
                                Rolling a 6 gets you an additional move. Capturing an opponent’s
                                token gives you an extra chance, too.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold italic text-purple-800 text-center mb-3">
                                STEP 5: AIM FOR THE HIGHEST SCORE
                            </h3>
                            <p className="text-lg sm:text-xl leading-relaxed font-sans">
                                Each format is about scoring as many points as possible within
                                time or moves. Quick thinking, sharp planning, and smart moves will
                                get you to the top.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="max-w-6xl space-y-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold italic text-purple-800 text-center">
                        THREE EXCITING VARIATIONS OF FREE LUDO ONLINE
                    </h2>

                    <p className="text-lg sm:text-xl leading-relaxed font-sans">
                        Are you trying to decide which format of the Zupee free Ludo game to
                        play? There are 3 exciting options to choose from. Each offers unique
                        gameplay and involves different strategies. Let’s take a look and find
                        the perfect online Ludo game for you!
                    </p>

                    <div className="space-y-10 mt-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold italic text-purple-800 text-center mb-3">
                                LUDO SUPREME
                            </h3>
                            <p className="text-lg sm:text-xl leading-relaxed font-sans">
                                Ludo Supreme is a time-based mode on the popular free Ludo app
                                Zupee, where your goal is to score the highest points within a
                                fixed time limit. You don’t have to take all your tokens
                                home—instead, every move counts toward your total score. It’s fast,
                                smart, and all about sharp decision-making.
                            </p>
                            <p className="text-lg sm:text-xl leading-relaxed font-sans">
                                This format is available in a 2, 3, and 4 player setup. If you
                                enjoy fast games, the super quick Ludo format keeps things exciting
                                with limited time and a lot of strategic and skilled gameplay.
                                Perfect for players who like short and strategic sessions!
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold italic text-purple-800 text-center mb-3">
                                LUDO TURBO
                            </h3>
                            <p className="text-lg sm:text-xl leading-relaxed font-sans">
                                As the name suggests, Ludo Turbo adds speed to the classic Ludo
                                game, making it more exciting. The gameplay lasts under 10 minutes.
                                This fast-paced free Ludo game offers quick, action-packed rounds
                                for an adrenaline-filled experience.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold italic text-purple-800 text-center mb-3">
                                LUDO SUPREME LEAGUE
                            </h3>
                            <p className="text-lg sm:text-xl leading-relaxed font-sans">
                                Supreme League is an exciting online Ludo game by Zupee. In this
                                version of the game, you can play various rounds on the board alone
                                to compete to rank on the leaderboard with other players. The
                                leaderboard displays the top players with the highest scores. In
                                this game, players receive a limited number of moves, making each
                                move crucial to reach the top.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Ludo is So Popular Section */}
            <div className="bg-white text-black flex flex-col items-center p-10 space-y-12">
                <div className="max-w-6xl space-y-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold italic text-purple-800 text-center">
                        WHAT MAKES FREE LUDO ONLINE GAMES SO POPULAR?
                    </h2>

                    <p className="text-lg sm:text-xl leading-relaxed font-sans">
                        Free online Ludo has now become everyone’s favorite. There are several reasons behind its popularity—from childhood memories to simple gameplay and the joy of connecting with friends/family. Let’s explore the key factors that make this game so well-loved:
                    </p>

                    <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl font-sans">
                        <li>
                            <strong>Nostalgia in a Modern Avatar</strong> <br /> Ludo has always been a household favorite, deeply tied to childhood memories and family gatherings. Free online Ludo captures this nostalgia but adds modern convenience. People can now enjoy the same familiar board game without needing a physical board, making it accessible at the tap of a button.
                        </li>
                        <li>
                            <strong>No Cost Involved</strong> <br />One of the biggest reasons for the popularity of free Ludo online is that it doesn’t cost anything to play. Anyone can join without financial barriers, making it inclusive for players of all ages. This attracts casual gamers who just want to have fun without the pressure of spending money.
                        </li>
                        <li>
                            <strong>Quick and Convenient Gameplay</strong> <br /> Traditional Ludo matches can drag on for hours, but online versions are faster. Free Ludo games usually wrap up within 5–10 minutes, making them perfect for short breaks. Players love that they can sneak in a game while commuting, during office breaks, or simply relaxing at home.
                        </li>
                        <li>
                            <strong>Social and Interactive</strong> <br />Ludo has always been about connection, and the online version keeps that spirit alive. Free Ludo allows players to challenge friends, family, or even strangers in real time. This social factor makes it fun, engaging, and a great way to bond over quick matches.
                        </li>
                        <li>
                            <strong>Accessible for Everyone</strong> <br /> Free online Ludo games are lightweight and easy to download. They run smoothly on almost any smartphone, which makes them widely accessible. From kids to older players, anyone can start playing instantly without complicated instructions.
                        </li>
                    </ul>

                    <p className="text-lg sm:text-xl leading-relaxed font-sans">
                        What makes free online Ludo stand out is how seamlessly it blends casual fun with skill. Every roll of the dice opens up choices that test planning, anticipation, and smart play. And when these skills are shared in a social setting, with friends, family, or even new players, the game becomes more than just a quick match. It turns into a shared experience of bonding, learning, and playful competition that keeps people coming back again and again.                          </p>
                </div>
            </div>

            {/* Tips & Tricks Section */}
            <div className="bg-white text-black flex flex-col items-center p-10 space-y-12">
                <div className="max-w-6xl space-y-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold italic text-purple-800 text-center">
                        TIPS AND TRICKS TO IMPROVE AT LUDO
                    </h2>

                    <p className="text-lg sm:text-xl leading-relaxed font-sans">
                        Ludo isn’t just a game of luck; it’s also about smart strategy, skills and perfect timing. To stay ahead of your friends and family in every match, you need more than just rolling the dice. A few simple tips and tricks can strengthen your gameplay, improve your decisions, and give you a winning edge in every online Ludo match. By combining skill with strategy, you can turn Ludo into a game of smart moves rather than chance.                    </p>

                    <ul className="list-disc pl-6 space-y-4 text-lg sm:text-xl font-sans">
                        <li>
                            <strong>Focus on Safe Zones to Protect Your Tokens</strong> <br />In most Ludo variations, there are designated safe zones where opponents cannot capture your tokens. Prioritize moving your pieces into these zones whenever possible. This reduces the risk of losing progress and forces your opponents to rethink their moves.
                        </li>
                        <li>
                            <strong>Prioritize Moving All Tokens Instead of One at a Time</strong> <br />It may feel tempting to rush one token toward the finish, but spreading out your tokens is a safer strategy. Having multiple tokens in play gives you flexibility and more options when rolling the dice. It also lowers the chances of being cornered by your opponent.
                        </li>
                        <li>
                            <strong>Keep an Eye on Your Opponents’ Positions</strong> <br /> Awareness is a powerful skill in Ludo. Watch how close your opponent’s tokens are to yours. If they’re a few steps behind, move strategically to avoid capture. On the flip side, if you’re close to one of their tokens, plan to take advantage and capture it for an extra move.
                        </li>
                        <li>
                            <strong>Use Extra Moves Smartly, Especially After Rolling a 6</strong> <br />Rolling a 6 gives you a golden opportunity, but it can backfire if not used wisely. Instead of rushing, think about whether you should bring a new token into play, move an existing one closer to a safe zone, or make a tactical capture. Every extra move should add to your advantage.
                        </li>
                        <li>
                            <strong>Adapt Your Strategy to Each Format for Maximum Fun</strong> <br />Not all Ludo formats are the same. For example, shorter matches demand aggressive play, while longer matches reward patience and planning. Learn to adjust your strategy depending on whether you’re playing a quick duel or a detailed game. Flexibility is often what separates winners from casual players.
                        </li>
                    </ul>
                </div>
            </div>





            <div style={{backgroundColor:"#f0f3fc"}} className=" py-12 px-4 sm:px-8 text-black">
                <h2 className="text-center text-2xl sm:text-3xl font-extrabold italic text-purple-800 mb-10">
                    FREE ONLINE LUDO - FAQS
                </h2>

                <div className="w-full max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b-2 border-gray-300">
                            {/* Question Row */}
                            <div
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center p-4 cursor-pointer"
                            >
                                <h1 className="font-bold text-lg md:text-2xl">{faq.question}</h1>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-purple-800" />
                                ) : (
                                    <FaChevronDown className="text-purple-800" />
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


        </>
    )
}

export default Ludo