import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const SnakesAndLaddersPlus = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "Is it safe to play the free Snakes and Ladders game online?",
            answer: "Yes. It is safe to play the Snakes and Ladders online game on Snakes and Ladders Plus. You can play the game by installing the Zupee App. Zupee uses secure payment systems to protect your information and provide good customer service."
        },
        {
            question: "How many players can play Snakes and Ladders online?",
            answer: "In total, 2-3 players can play the Snakes and Ladders Plus online game on Zupee. In a 2-player game, each player gets 15 moves, whereas in a 3-player game, each player gets 10 moves."
        }, {
            question: "How to download Snakes and Ladders?",
            answer: "To download and play the Snakes and Ladders game on Snakes and Ladders Plus, visit the Zupee website and hit the download button. Get access to free online games, such as "
        }, {
            question: "Is Snakes and Ladders a skill-based game or luck-based?",
            answer: "Snakes and Ladders combines both chance and strategy. While dice rolls are luck-driven, smart moves—like protecting advanced tokens and cutting opponent tokens—require skill."
        }, {
            question: "Do I need to roll a six to start playing?",
            answer: "No. In Zupee’s Snakes and Ladders Plus, all tokens are in an open position from the beginning, so you can start moving without waiting for a six."
        }, {
            question: "How long does an online Snakes and Ladders match take?",
            answer: "On Zupee, a Snakes and Ladders game usually lasts less than 10 minutes, making it perfect for quick entertainment."
        },
    ];
    return (
        <>
            {/* Top breadcrumb */}
            <div className="text-sm p-4 sm:p-5" style={{ backgroundColor: "#f0f3fc" }}>
                <div className="max-w-6xl mx-auto text-center md:text-left">
                    <Link to="/" className="font-semibold text-purple-800">
                        Home
                    </Link>{" "}
                    &gt; <span>Snakes and Ladders Plus </span>

                </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-normal lg:ml-20 gap-10 p-5">
                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start justify-center p-5 lg:p-10 gap-5 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-[#342491] uppercase">
                        SNAKES AND LADDERS ONLINE
                    </h1>
                    <h1 className='p-3 text-xl'>
                        Play Free Snakes and Ladders online on Zupee. Gameplay time is less than 10 minutes! Download App
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
                    src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/play-snakes-and-ladders-game-updated.webp"
                    alt="Ludo Game"
                    className="h-[30rem] md:h-[35rem] lg:h-[40rem] object-contain"
                />
            </div>





            <div className="mx-auto p-5 lg:p-10 bg-yellow-300">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-purple-800 text-center mb-12">
    PLAY SNAKES AND LADDERS PLUS ONLINE
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
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

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/play-snakes-and-ladders-game-all-day.webp"
        alt="Play Anytime"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">
        Play Anytime
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/snakes-and-ladders-plus-rng-certified.webp"
        alt="RNG Certified"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">
        RNG Certified
      </p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/online-snakes-ladders-game-customer-support.webp"
        alt="Customer Support"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">
        Customer Support
      </p>
    </div>
  </div>
</div>























            <div className="bg-white text-black px-6 py-12 max-w-5xl mx-auto space-y-12">

                {/* Download Section */}
                <section>
                    <h2 className="text-4xl text-center font-bold text-purple-800 mb-4 uppercase">How to Download Snakes and Ladders?</h2>
                    <p className="mb-4 text-lg font-semibold">
                        <span>Download Snakes and Ladders Plus free online game. Install the Zupee   <a className='text-purple-800 underline' href="">online gaming app</a>  to play for free and win.</span>
                    </p>
                    <p className=" text-lg fon">
                        STEPS TO DOWNLOAD FREE SNAKES AND LADDERS
                    </p>
                    <ol className="list-decimal space-y-2 pl-5 text-lg">
                        <li>Click on the download button on this page to play Snakes and Ladders online.</li>
                        <li>A general warning message will pop up. Ignore it.</li>
                        <li>Locate the Zupee App on your mobile phone. Install & Register it!</li>
                        <li>Select the Snakes and Ladders Plus game on the app.</li>
                        <li>Play and win free Snakes and Ladders.</li>
                    </ol>
                </section>

                {/* What is Snakes and Ladders */}
                <section>
                    <h2 className="text-4xl font-bold text-purple-800 mb-4 text-center uppercase">What is Snakes and Ladders?</h2>
                    <p className="mb-2 text-lg ">Snakes and Ladders is an Indian board game with gridded, numbered squares and a number of ladders and snakes connecting these squares. The objective is to reach the last square by avoiding the snakes and using the ladders based on the throw of a die.</p>
                    <p className='text-lg'>Generally, while playing the classic Snakes and Ladders game, each player gets one token to race to the 100th box. But the gameplay of Zupee free Snakes and Ladders Plus is slightly different. To make the online game more interesting, each player gets 3 tokens. Moreover, the game involves an element of time which adds to the excitement and competition.</p>
                </section>

                {/* How to Play Section */}
                <section>
                    <h2 className="text-4xl text-center font-bold text-purple-800 mb-4 uppercase">How to Play Free Snakes and Ladders?</h2>

                    <p className="mb-4 mt-4 text-lg font-semibold">
                        Learn how to play the free Snakes and Ladders Plus Online game:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Select the Snakes and Ladders formats. You can choose to play a 2-player format or even a 3-player format.</li>
                        <li>Roll the dice and make your moves. Remember, you have 3 tokens to play. So, prioritize which snake and ladder token to move based on your strategy.</li>
                        <li>Race your tokens to the 100th position. All tokens are in an open position. So, you can start playing without having to roll a six.</li>
                        <li>All players can get any number of 1, 2, 3, 4, 5 & 6 on their dice</li>
                        <li>For each move, you get 12 seconds to play.</li>
                        <li>Climbing ladders will help move up faster, and landing on a snake's head will bump the token down to the tail.</li>
                        <li>Earn maximum points within limited moves. For every square moved, you get 1 point.</li>
                        <li>For every token that reaches the 100th square or home, you get an extra 100 points.</li>
                        <li>The 2-player game format has 15 moves, and the 3-player format has 10 moves.</li>
                        <li>Cut the opponent's tokens to reduce their points and get an extra move. When a token is cut, it goes back to the starting position, and all points made by that token are lost.</li>
                        <li>Get an extra move when you roll a 6 on your dice.</li>
                        <li>There is an option to skip a turn. Just hit the 'Skip move' button.</li>
                        <li>If you skip your turn 3 times, you will be disqualified from the game.</li>
                        <li>The player who earns the maximum points wins this free Snakes and Ladders online game.</li>
                    </ul>
                </section>

                {/* Key Gameplay Points */}
                <section>
                    <h2 className="text-4xl text-center font-bold text-purple-800 mb-4 uppercase">Snakes and Ladders Online: Key Gameplay Points</h2>
                    <p className="mb-4 mt-4 text-lg font-semibold">
                        Here are the rules to play Snakes and Ladders Plus:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Each player gets 3 Snakes and Ladders tokens.</li>
                        <li>The tokens are in an open position, so there is no need to roll a 6 to begin playing.</li>
                        <li>You get 12 seconds to play your turn.</li>
                        <li>If an opponent's token lands on your token, your token will go back to the starting point, and you will lose all the points made on that token.</li>
                        <li>The opponent's token cannot cut two tokens on a single square of the same player.</li>
                        <li>All players can get any number of dice values on their dice in a random order.</li>
                        <li>Rolling a 6 gets you an extra turn.</li>
                        <li>Every player gets an equal number of moves in the Snakes and Ladders game. In a two-player game, you get 15 moves, and in a three-player game, you get 10 moves each</li>
                        <li>You get an extra move in three cases:</li>
                        <ul className=' pl-6 space-y-2 list-disc text-lg'>
                            <li>When you cut an opponent's token</li>
                            <li>When one of your tokens reaches home</li>
                            <li>When you roll a 6</li>
                        </ul>
                    </ul>
                </section>

                {/* Tips */}
                <section>
                    <h2 className="text-4xl text-center font-bold text-purple-800 mb-4 uppercase">Snakes and Ladders Tips</h2>
                    <p className="mb-4 mt-4 text-lg font-semibold">
                        Here are free Snakes and Ladders tips and tricks to win the game:                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Don't go easy on the opponent. Remember, everyone wants to be a winner.</li>
                        <li>Strategize right from the start.</li>
                        <li>Always safeguard the token that has advanced the most in the game</li>
                        <li>Play with multiple tokens to mitigate your risk</li>
                        <li>Check the profile of the opponent to look at their wins and losses so far. You may get an idea of how good a player your opponent is.</li>
                    </ul>
                </section>

                {/* Fun Facts */}
                <section>
                    <h2 className="text-4xl text-center font-bold text-purple-800 mb-4 uppercase">Snakes and Ladders Game Facts</h2>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Snakes and Ladders was invented as a game of a karmic journey. The squares with ladders meant virtue, and the ones with snakes meant evil.</li>
                        <li>It is believed that the Snakes and Ladders game was invented in the 2nd century BC.</li>
                        <li>Snakes and Ladders was brought to England and was patented in 1892 by a famous toymaker, Frederick Henry Ayres.</li>
                        <li>A Victorian version of Snakes and Ladders named 'Kismet' is placed in the Victoria and Albert Museum's collection.</li>
                        <li>A Victorian version of Snakes and Ladders named 'Kismet' is placed in the Victoria and Albert Museum's collection.</li>
                        <li>A form of Snakes and Ladders called Paramapadam is played during Vaikuntha Ekadasi, a festival celebrated in the states of Tamil Nadu, Telangana, Andhra Pradesh, and Karnataka. The game is especially played to stay awake at night.</li>
                        <li>The phrase "back to square one" is heavily influenced by the game of Snakes and Ladders.</li>
                    </ul>
                </section>
            </div>
















            <div style={{ backgroundColor: "#f0f3fc" }} className=" py-12 px-4 sm:px-8 text-black">
                <h2 className="text-center text-2xl sm:text-3xl font-extrabold italic text-purple-800 mb-10">
                    SNAKES AND LADDERS GAME: FAQS
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

export default SnakesAndLaddersPlus