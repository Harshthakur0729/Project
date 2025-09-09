import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Ludoturbo = () => {



    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    const faqs = [
        {
            question: " Is Ludo Turbo free to play? ",
            answer: " Yes, Ludo Turbo is entirely free. Just select a format and start playing."
        },
        {
            question: " Can I play Turbo Ludo with friends and family?",
            answer: "Absolutely! You can set up 2-player duels or enjoy 4-player matches together."
        },
        {
            question: " What makes Turbo Ludo different from classic Ludo?",
            answer: "Turbo speeds up the game — no waiting for a 6, shorter match times, and more strategy."
        },
        {
            question: " How long does a typical Turbo Ludo match last?",
            answer: " Most matches wrap up in 5–10 minutes, perfect for short gaming sessions."
        },
        {
            question: "Is Turbo Ludo skill-based or luck-based?",
            answer: " It’s a skill-based version of Ludo where planning, safe zones, and timing matter more than luck."
        }, {
            question: "How many players can play the free Ludo Turbo on Zupee?",
            answer: "On Ludo Turbo, 2-4 players can join a game of Ludo. In a 2-player game, each player gets 30 moves, while in a 4-player game, each player has 18 moves."
        }
    ];
    return (
        <>
            {/* Top breadcrumb */}
            <div className="text-sm p-4 sm:p-5" style={{ backgroundColor: "#f0f3fc" }}>
                <div className="max-w-6xl mx-auto text-center md:text-left">
                    <Link to="/" className="font-semibold text-purple-800">
                        Home
                    </Link>{" "}
                    &gt; <span>Ludo </span>
                    &gt; <span>Ludo Turbo</span>

                </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-normal lg:ml-20 gap-10 p-5">
                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start justify-center p-5 lg:p-10 gap-5 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-[#342491] uppercase">
                        Ludo Turbo: Play Free Ludo Online
                    </h1>
                    <h1 className='p-3 text-xl'>
                        Ludo Turbo transforms the traditional board game into a fast, skill-driven,
                        and modern experience you can enjoy anytime.
                        Unlike the slow, drawn-out matches of the past, this format brings a refreshing pace where every move counts.</h1>
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
                    src="https://static-perf1.zupee.com/wp-content/uploads/2023/12/speed-ludo-online-games-apk-2.webp"
                    alt="Ludo Game"
                    className="h-[30rem] md:h-[35rem] lg:h-[40rem] object-contain"
                />
            </div>









            <div className="mx-auto p-5 lg:p-10 bg-yellow-300">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-purple-800 text-center mb-12">
                    Ludo Turbo Game: Advantages
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/speed-ludo-games-round-the-clock.webp"
                            alt="Play Anytime"
                            className="w-28 sm:w-36 md:w-40 lg:w-48"
                        />
                        <p className="mt-2 text-sm font-semibold text-purple-900">
                            Play Anytime
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/ludo-turbo-rng-certified.webp"
                            alt="RNG Certified"
                            className="w-28 sm:w-36 md:w-40 lg:w-48"
                        />
                        <p className="mt-2 text-sm font-semibold text-purple-900">
                            RNG Certified
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/speed-ludo-games-customer-support.webp"
                            alt="Customer Support"
                            className="w-28 sm:w-36 md:w-40 lg:w-48"
                        />
                        <p className="mt-2 text-sm font-semibold text-purple-900">
                            Customer Support
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/snakes-ladders-online-legal.webp"
                            alt="100% Legal Game"
                            className="w-28 sm:w-36 md:w-40 lg:w-48"
                        />
                        <p className="mt-2 text-sm font-semibold text-purple-900">
                            100% Legal Game
                        </p>
                    </div>
                </div>
            </div>












            <div className="px-6 md:px-20 py-12 space-y-16 text-gray-800">
                {/* Section 1 - Advantages */}
                <section>
                    <h2 className="text-2xl md:text-4xl font-extrabold italic text-center text-purple-800 mb-6">
                        FREE TURBO LUDO: ADVANTAGES
                    </h2>
                    <p className=" max-w-4xl mx-auto mb-6">
                        Turbo Ludo stands out because it takes the best parts of traditional Ludo and makes them faster
                        and more exciting. Players no longer have to wait endlessly for their turn, and the matches fit
                        perfectly into short breaks or quick get-togethers. The thrill lies in its ability
                        to blend skill-based gameplay with short bursts of fun, making it a hit for families and friends.
                    </p>
                    <ul className="list-disc list-inside space-y-3 max-w-3xl mx-auto">
                        <li><strong>Quick Matches</strong> – Enjoy rounds that finish in minutes.</li>
                        <li><strong>Skill-Based Gameplay</strong> – Outthink opponents with clever token moves.</li>
                        <li><strong>Play with Friends</strong> – Compete in 2 or 4-player battles anytime.</li>
                        <li><strong>Multiple Formats</strong> – Try Turbo, Supreme, or League for unique challenges.</li>
                        <li><strong>No Hassle</strong> – Clean, secure, and engaging gameplay.</li>
                        <li><strong>Easy Access</strong> – Lightweight, easy-to-install app for instant fun.</li>
                    </ul>
                </section>

                {/* Section 2 - How to Start Playing */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-purple-800 mb-6">
                        HOW TO START PLAYING FREE LUDO TURBO?
                    </h2>         <p className=" max-w-4xl mx-auto mb-6">
                        Getting into Ludo Turbo doesn’t require hours of learning or complicated rules. In fact, that’s what makes
                        it so appealing. The steps to play are simple, ensuring that anyone can jump in and enjoy a quick match without delay.
                        With all tokens starting in play, matches are faster and more interactive, giving players less waiting and more action.
                    </p>
                    <ol className="list-decimal list-inside space-y-3 max-w-3xl mx-auto">
                        <li>Choose the fast-paced Turbo format you want to try.</li>
                        <li>Select the number of players — 2-player or 4-player modes.</li>
                        <li>Start the game instantly! In Turbo, all tokens begin in play — no need for a 6.</li>
                        <li>Earn points with every move, strategize around safe zones, and aim to bring your tokens home faster than your rivals.</li>
                    </ol>
                </section>

                {/* Section 3 - Game Online + How to Play */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-purple-800 mb-6">
                        FREE TURBO LUDO GAME ONLINE
                    </h2>
                    <p className=" max-w-4xl mx-auto ">
                        The appeal of fast-paced Ludo games lies in how they bring variety and freshness to the age-old classic. Whether you like the quick bursts of Turbo, the tactical focus of Supreme, or the long-term
                        leaderboard grind of League, there’s a version for every mood. This ensures you’re never stuck with just one style of play.
                    </p>
                    <ul className="list-disc list-inside space-y-3 max-w-3xl mx-auto">
                        <li><strong>Ludo Supreme</strong> – Every move counts toward your score.</li>
                        <li><strong>Turbo Ludo</strong> – Matches under 10 minutes for quick fun.</li>
                        <li><strong>Ludo Supreme League</strong> – Multiple rounds with leaderboards for competitive spirits.</li>
                    </ul>

                    <h3 className="text-xl md:text-3xl font-extrabold text-center text-purple-800 mt-10 mb-4">
                        HOW TO PLAY FREE LUDO TURBO?
                    </h3>

                    <p className=" max-w-4xl mx-auto ">
                        The rules of Turbo are designed to make gameplay fast, fair, and fun. Unlike traditional Ludo, you don’t need to wait endlessly for a 6.
                        This lets the focus shift from luck to smart movement and timing.
                        With limited moves and a ticking timer, players need to think on their feet and adapt strategies on the go.
                    </p>



                    <ul className="list-disc list-inside space-y-3 max-w-3xl mx-auto">
                        <li>Pick your mode – 2-player or 4-player setups.</li>
                        <li>Tokens start in the open — no 6 required to move.</li>
                        <li>Points system: Every move = 1 point, tokens reaching home earn bonus points.</li>
                        <li>Extra turns: Rolling a 6, cutting an opponent’s token, or bringing one home.</li>
                        <li>Safe zones protect tokens from being cut.</li>
                        <li>Timer-based play ensures matches finish quickly, keeping the energy high.</li>
                    </ul>
                </section>

                <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">

                    {/* Section: Gameplay Points */}
                    <h2 className="text-3xl font-bold italic text-center text-purple-800 mb-6">
                        LUDO TURBO KEY GAMEPLAY POINTS
                    </h2>
                    <p className="mb-4">
                        While anyone can play Ludo Turbo,
                        improving your game takes practice and some clever thinking.
                        The trick is to balance aggression with defense, knowing when to push forward and
                        when to protect your tokens. These tips give you a competitive edge and make
                        every game feel more rewarding.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Immediate Play</strong> – All tokens start in the open position.</li>
                        <li><strong>Balanced Dice Rolls</strong> – Equal numbers for every player in varied sequences.</li>
                        <li><strong>Time-Limited Moves</strong> – 10 seconds per move keeps the energy alive.</li>
                        <li><strong>Penalties for Missing Turns</strong> – Skip more than three times and you’re out.</li>
                        <li><strong>Smart Strategy Wins</strong> – Blocking, safe zones, and calculated moves matter most.</li>
                    </ul>

                    {/* Section: 4 Tips and Tricks */}
                    <h2 className="text-3xl font-bold italic text-center text-purple-800 mt-12 mb-6">
                        TIPS AND TRICKS TO IMPROVE AT LUDO TURBO
                    </h2>
                    <p className="mb-4">
                        While anyone can play Ludo Turbo, improving your game takes practice and some clever thinking.
                        The trick is to balance aggression with defense, knowing when to push forward and when to protect your tokens.
                        These tips give you a competitive edge and make every game feel more rewarding.
                    </p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li><strong>Track Dice Rolls</strong> – Anticipate what might come next for rivals.</li>
                        <li><strong>Protect Advanced Tokens</strong> – They carry the most points, so safeguard them.</li>
                        <li><strong>Use Safe Boxes</strong> – Park tokens in safe zones whenever possible.</li>
                        <li><strong>Stay Ahead</strong> – Always try to keep a 7-box lead.</li>
                        <li><strong>Balance Offense & Defense</strong> – Don’t just chase points, block opponents too.</li>
                    </ol>
                </div>





                {/* Section 5 - Why Families Love */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-purple-800 mb-6">
                        WHY FAMILIES LOVE FREE TURBO LUDO
                    </h2>
                    <p className=" max-w-4xl mx-auto">
                        Ludo has always been a symbol of togetherness, and Turbo makes it even better by fitting into
                        modern life. Families can gather for a quick session, friends can challenge each other online,
                        and players of all ages can join without feeling left out. The short, skill-based matches make
                        it perfect for anyone who values fun and bonding over long waiting times.
                    </p>
                </section>
            </div>




















            <div style={{ backgroundColor: "#f0f3fc" }} className=" py-12 px-4 sm:px-8 text-black">
                <h2 className="text-center text-2xl sm:text-3xl font-extrabold italic text-purple-800 mb-10">
                    Ludo Turbo – FAQs
                </h2>

                <div className="w-full max-w-5xl mx-auto">
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

export default Ludoturbo