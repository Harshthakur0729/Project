import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Ludosupreme = () => {



    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    const faqs = [
        {
            question: "Is Ludo Supreme free to play?",
            answer: "Yes, you can enjoy Ludo Supreme completely free. It’s designed to offer fun, quick matches without any financial commitments.",
        },
        {
            question: " How is Ludo Supreme different from traditional Ludo?",
            answer: "It’s faster, more engaging, and skill-based. Unlike traditional Ludo, you don’t need a 6 to start, and every move earns points.",
        },
        {
            question: "Can I play with my friends and family?",
            answer: "Absolutely! You can invite friends, create private rooms, or play multiplayer sessions.",
        },
        {
            question: "How long does a typical game last?",
            answer:
                "Depending on the mode you choose, matches can last between 2.5 and 10 minutes—perfect for short breaks.",
        },
        {
            question: "What makes Ludo Supreme skill-based?",
            answer: "Your success depends on strategy—choosing which token to move, when to block, and how to manage extra turns. Your strategy and skill ensure consistent wins.",
        }, {
            question: "What Ludo formats can I play?",
            answer: "Ludo Supreme offers a diverse range of game formats to cater to different preferences and play styles. In addition to the regular Ludo gameplay, players can explore various exciting formats such as Quick & Super Quick game modes for shorter sessions, 4-player mode for intense multiplayer battles, and 3-player mode that offers an innovative Ludo board design, adding new twists and challenges to the traditional game mechanics."

        }, {
            question: "Is Ludo Supreme Safe?",
            answer: "Ludo Supreme prioritizes the safety and security of its players. The platform implements robust security measures to safeguard users’ personal and financial information. Additionally, the game follows fair play practices, ensuring that all players have an equal chance of winning based on their skills and strategies."

        }
    ];
    return (
        <>
            {/* Top breadcrumb */}
            <div className="text-sm p-4 sm:p-5" style={{ backgroundColor: "#f0f3fc" }}>
                <div className="max-w-6xl mx-auto text-center md:text-left">
                    <Link to="/" className="font-semibold text-purple-700">
                        Home
                    </Link>{" "}
                    &gt; <span>Ludo </span>
                    &gt; <span>Ludo Supreme</span>

                </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-normal lg:ml-20 gap-10 p-5">
                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start justify-center p-5 lg:p-10 gap-5 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-[#342491] uppercase">
                        Play Free Ludo Supreme Online
                    </h1>
                    <h1 className='p-3 text-xl'>Double your fun with free Zupee Ludo Supreme!</h1>
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




         <div className="mx-auto p-5 lg:p-10 bg-yellow-300">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-purple-800 text-center mb-12">
    Why Play Free Ludo Supreme?
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/ludo-supreme-is-safe-to-play.webp"
        alt="Safe to Play"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">
        Safe to Play
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/play-games-anytime-on-ludo-supreme.webp"
        alt="Play Anytime"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">
        Play Anytime
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/ludo-supreme-gold-is-rng-certified.webp"
        alt="RNG Certified"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">
        RNG Certified
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/ludo-supreme-offers-instant-customer-support.webp"
        alt="Customer Support"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">
        Customer Support
      </p>
    </div>
  </div>
</div>






            <div className="max-w-5xl mx-auto px-5 py-10 text-[#342491]">
                {/* Section 1 */}
                <h1 className="text-2xl md:text-4xl font-bold italic text-center mb-4">
                    WHAT IS ZUPEE LUDO SUPREME?
                </h1>
                <p className="text-black text-lg">
                    Ludo Supreme, also known as Ludo Supreme Gold, is a mobile-based online Ludo game
                    developed by Zupee. This real-time multiplayer game introduces a modern twist to the
                    classic Ludo board game. Designed like a digital club for Ludo enthusiasts, it
                    offers intuitive graphics and fast-paced gameplay, delivering a skill-based experience for
                    2–4 players. So, what are you waiting for?
                    Start the free Zupee Ludo Supreme Gold APK download process today!
                </p>

                {/* Section 2 */}
                <h1 className="text-2xl md:text-4xl font-bold italic text-center mt-10 mb-4">
                    HOW TO PLAY LUDO SUPREME?
                </h1>
                <p className="text-black text-lg mb-4">
                    To play free Ludo Supreme (Ludo Gold), follow the steps below — for a
                    quick guide on how to play fun Ludo games like a pro.
                </p>

                <h2 className="font-bold mb-2 text-2xl">Choose the Ludo Format</h2>
                <p className="mb-3 text-black text-lg ">
                    Pick from quick or regular gameplay. Both offer timed sessions that keep things exciting.
                </p>

                <h2 className="font-bold mb-2 text-2xl">Select the Mode</h2>
                <p className="mb-3 text-black text-lg ">
                    Play in a 2-player, 3-player, or 4-player setup. Some matches allow multiple winners depending on the format.
                </p>

                <h2 className="font-bold mb-2 text-2xl">Start the Game</h2>
                <p className="mb-3 text-black text-lg ">
                    Tap the Ludo dice to begin. You don’t need a 6 to start—tokens are open from the beginning.
                </p>

                <h2 className="font-bold mb-2 text-2xl">Earn Points</h2>
                <ul className="list-disc list-inside mb-3 text-black text-lg ">
                    <li>Every box moved = 1 point.</li>
                    <li>
                        Bringing a token home earns additional points in 2-player and 4-player formats.
                    </li>
                    <li>
                        In 3-player games, token home points are adjusted to keep the scoring balanced.
                    </li>
                </ul>

                <h2 className="font-bold mb-2 text-2xl">Gain Additional Moves</h2>
                <ul className="list-disc list-inside mb-3 text-black text-lg ">
                    <li>Roll a 6 to get another turn.</li>
                    <li>
                        Bringing a token home or cutting an opponent’s token also gives you an extra turn.
                    </li>
                </ul>

                <h2 className="font-bold mb-2 text-2xl">Gameplay Duration</h2>
                <ul className="list-disc list-inside mb-3 text-black text-lg ">
                    <li>Regular mode: 2-player = 8 mins | 4-player = 10 mins</li>
                    <li>Quick mode: 2-player = 5 mins | 4-player = 7 mins | 3-player = 6 mins</li>
                    <li>Super Quick: 2-player = 2.5 mins | 4-player = 5 mins</li>
                </ul>
                <p className=" text-black text-lg ">
                    The objective is simple: score maximum points within the set time and
                    showcase your skill-based strategies.
                </p>

                {/* Section 3 */}
                <h1 className="text-2xl md:text-3xl font-bold italic text-center mt-12 mb-4">
                    KEY GAMEPLAY RULES OF LUDO SUPREME
                </h1>
                <h1 className='text-xl text-black'>
                    The following are specific rules and guidelines for playing free Ludo Supreme:
                </h1>
                <br />
                <ul className="list-disc list-inside mb-3 text-black text-lg ">
                    <li>No need to roll a 6 to start moving tokens.</li>
                    <li>
                        Rolling a 6, cutting an opponent’s token, or taking a token home gives
                        an extra turn.
                    </li>
                    <li>Rolling three consecutive 6s results in losing a turn.</li>
                    <li>Safe boxes protect your tokens from being sent back.</li>
                    <li>If an opponent lands on your token, it returns to the start point.</li>
                    <li>Skipping more than two turns eliminates you from the game.</li>
                </ul>



                <p className="mb-5 text-lg text-black">
                    <span className="font-bold text-black ">Want to play Ludo with friends?</span> Here’s
                    how you can make it even more exciting!
                </p>

                <h1 className='text-lg text-black mb-2'>Challenge your friends online in Ludo Supreme and enjoy the thrill of competitive and skill-based gameplay together.</h1>

                <ul className="list-disc list-inside mb-6 text-black">
                    <li><strong>Create Private Rooms: </strong> Invite your friends to play against each other.</li>
                    <li>
                        <strong>Join Multiplayer Tournaments: </strong> You and your friends compete for the top
                        spot.
                    </li>
                    <li>
                        <strong> Prove your Skills:</strong> Use your skills in every match as each player
                        battles independently for victory.
                    </li>
                    <li>
                        <strong>Track your Wins: </strong> Boast your high scores, and enjoy friendly competition
                        anytime.
                    </li>
                </ul>

                <p className='text-lg text-black'><span>Join the Zupee </span>
                    <strong>club,</strong>
                    <span> outsmart &amp; outplay opponents, and
                        become the ultimate Ludo Supreme Leader
                        champion!</span>
                </p>


                {/* Section 4 */}
                <h1 className="text-2xl md:text-3xl font-bold italic text-center mt-12 mb-4">
                    WHY IS FREE LUDO SUPREME SO POPULAR?
                </h1>

                <h1 className='text-lg text-black mb-3'> Free Ludo Supreme isn’t just another casual app you download and forget. Its popularity comes from a
                    mix of tradition, convenience, and modern upgrades that fit perfectly into today’s lifestyle. Here’s why millions of players keep coming back:</h1>

                <ol className=" list-inside space-y-3 mb-8  text-lg text-black">
                    <li>
                        <span className="font-bold text-purple-800 text-2xl ">1. Nostalgia Meets Digital Play</span> <br />
                        Almost every Indian household has a story around Ludo—festivals, vacations, family nights.
                        Free Ludo Supreme captures that same nostalgia,
                        but makes it easy to carry in your pocket. With one tap, those old memories come alive on your screen.
                    </li>
                    <li>
                        <span className="font-bold text-purple-800 text-2xl ">2. No Cost, No Barriers</span><br />
                        The best part? It’s completely free. Anyone, whether a homemaker or working professional, can play without worrying about cost.
                        It levels the playing field and keeps the focus on fun and skill.
                    </li>
                    <li>
                        <span className="font-bold text-purple-800 text-2xl ">3. Short, Engaging Matches</span> <br />
                        In a fast-moving world, not everyone has hours to spend playing
                        board games. Free Ludo Supreme matches usually wrap up in just a few minutes,
                        making it perfect for coffee breaks, metro rides, or winding down after work.
                        It requires your skills and strategy to keep you at the top of your game.
                    </li>
                    <li>
                        <span className="font-bold text-purple-800 text-2xl ">4. Play with Friends and Family Anytime</span> <br />{" "}
                        The spirit of Ludo has always been about connection. Online, you can challenge your friends,
                        bond with family members across cities,
                        or even meet new players in real time. It’s social, fun, and interactive.
                    </li>
                    <li>
                        <span className="font-bold text-purple-800 text-2xl">5. Accessible to Everyone</span> <br />
                        Free Ludo Supreme runs smoothly on most smartphones, without needing heavy data or storage. It’s lightweight, user-friendly, and engaging.
                    </li>
                </ol>

                {/* Section 5 */}
                <h1 className="text-2xl md:text-3xl font-bold italic text-center mt-10 mb-4">
                    PLAY WITH FRIENDS AND FAMILY
                </h1>
                <h1 className='text-black text-lg'>Want to enjoy free Ludo with loved ones? Here’s how:</h1>
                <ul className="  list-disc list-inside  text-black">
                    <li><strong>Challenge Friends Online: </strong> Compete in friendly matches.</li>
                    <li><strong>Create Private Rooms: </strong> Invite your circle to play together.</li>
                    <li>
                        <strong>Join Multiplayer Sessions: </strong> Experience strategy with 2–4 players.
                    </li>
                </ul>
                <h1 className='text-black text-lg'> <strong>Track Progress: </strong> See your wins and share them with friends.</h1>
            </div>






            <div style={{ backgroundColor: "#f0f3fc" }} className=" py-12 px-4 sm:px-8 text-black">
                <h2 className="text-center text-2xl sm:text-3xl font-extrabold italic text-purple-800 mb-10">
                    Ludo Supreme FAQs
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

export default Ludosupreme