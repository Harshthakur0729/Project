import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const TrumpCardsMania = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "What is an online card game and how does it work?",
            answer: "A free online card game is a type of game that is played over the internet. It works by allowing players to join a virtual game room where they can play cards with other players. The rules of the game depend on the specific game being played."
        }, {
            question: "How do trump cards function in online card games?",
            answer: "Trump cards in online card games function similarly to those in traditional card games. The trump cards are the highest ranking cards in a game. If a trick, or a round of play, includes a trump card, the highest trump played wins the trick. One variation of the trump cards is Free Trump Cards Mania by Zupee. The game allows you to compare cricket card stats with opponents, and the higher stat wins the round."
        }, {
            question: "How to win a free online cards game on Trump Cards Mania?",
            answer: "To win a free online cards game on Trump Cards Mania, follow the game rules and score maximum points. Moreover, take advantage of the two most important rounds in the game (Captain and Vice-Captain Round), to score 3x and 2x points."
        }, {
            question: "How many players can play the Trump Cards Mania Online?",
            answer: "In total, 2 players can play the cricket IPL-based Trump Cards Mania online on Zupee for free. Both players get 11 cards – 4 Gold, 3 Silver, and 4 Bronze, in that order."
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
                    &gt; <span>Trump Cards Mania </span>

                </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-normal lg:ml-20 gap-10 p-5">
                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start justify-center p-5 lg:p-10 gap-5 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-[#342491] uppercase">
                        Free Trump Cards Online Game
                    </h1>
                    <h1 className='p-3 text-xl'>
                        Play Trump Cards Mania. A free online cards game where you win matches with skills and strategies.                    </h1>
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
                    src="https://static-perf1.zupee.com/wp-content/uploads/2023/12/play-cards-game-online.webp"
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















            <div className="max-w-6xl mx-auto px-4 py-10 text-black">
                {/* Section 1: Steps to Download */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-purple-800 italic mb-6">
                        STEPS TO DOWNLOAD ONLINE TRUMP CARDS GAME
                    </h2>
                    <ol className="list-decimal pl-6 space-y-2 text-lg">
                        <li>Click the “Download App” button to start playing Trump Cards Mania.</li>
                        <li>Ignore the general warning message (it’s a safe app). Tap “OK” to continue.</li>
                        <li>Locate, Install, and register on Zupee App.</li>
                        <li>Search for Trump Cards Mania, and start playing free matches.</li>
                    </ol>
                </section>

                {/* Section 2: Online Cards Game */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-purple-800 italic mb-6">
                        ONLINE CARDS GAME
                    </h2>
                    <p className="text-lg mb-4">
                        Online card games are a popular form of digital entertainment, uniting players in fun and skill-based competition. Among them are trick-taking games, where players use strategy and quick thinking to outscore opponents.
                    </p>
                    <p className="text-lg">
                        Simply put, trick-taking games are card games where players collect sets of cards to earn tricks. Trump cards hold higher value, allowing them to outrank others and add excitement to every round.
                    </p>
                </section>

                {/* Section 3: Trump Cards Mania */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-purple-800 italic mb-6">
                        TRUMP CARDS MANIA: AN ONLINE CARDS GAME
                    </h2>
                    <p className="text-lg mb-4">
                        With the rise of mobile gaming, you can now play Trump Cards Mania online for free! It’s a cricket-themed card game where players compete using skill, strategy, and tactics.
                    </p>
                    <p className="text-lg">
                        Trump Cards Mania is designed for cricket lovers and trump card fans who enjoy quick, strategy-driven matches. Based on IPL stats till 2024, this game lets you outsmart opponents and showcase your cricket knowledge anytime, anywhere.
                    </p>
                </section>

                {/* Section 4: How to Play */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-purple-800 italic mb-6">
                        HOW TO PLAY ONLINE TRUMP CARDS GAME?
                    </h2>
                    <p className="text-lg mb-4">
                        To play Trump Cards Mania online for free, install the Zupee App. It’s a 2-player skill-based card game where strategy and quick thinking decide the winner.
                    </p>
                    <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                        Steps to Play Trump Cards Mania:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Select the online Trump Cards tournament.</li>
                        <li>Get 11 cards featuring the all-time top 100 IPL batsmen. The card tier is based on the player’s total runs:</li>
                        <ul className='list-disc pl-6 space-y-2 text-lg'>
                            <li>4 Gold</li>
                            <li>3 Silver</li>
                            <li>4 Bronze</li>
                        </ul>
                        <li>Choose captain and vice-captain cards in 60 seconds.</li>
                        <li>Select a stat on the card to challenge the opponent. Get 15 seconds to choose. If the time runs out, don’t worry! Both players get a time bank of extra 30 seconds which they can use throughout the game.</li>
                        <li>OOnce the opponent chooses a stat, their card is revealed. Both cards are compared and the higher stat wins. The winner gets 1 point.</li>
                        <li>Earn more points in two important rounds:</li>
                        <ul className='list-disc pl-6 space-y-2 text-lg'>

                            <li>The captain round, where your online captain card is pitted against the opponent’s card. If you win, you get 3 times more points.</li>
                            <li>The vice-captain round, where your online vice-captain card is pitted against the opponent’s card. If you win, you get 2 times more points.</li>
                        </ul>
                        <li>The player with the higher score by the end of 11 rounds is the winner of the online trump cards game.</li>
                    </ul>
                    <p className='text-lg mt-6'>To ensure fair play, both players play online cards from the same tier in each round. For example, your gold tier card will always be pitted against the opponent’s gold tier card.</p>
                </section>

                {/* Section 5: Rules */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-purple-800 italic mb-6">
                        TRUMP CARDS MANIA ONLINE RULES
                    </h2>
                    <p className="text-lg mb-4">
                        To win online cards game on Trump Cards Mania you need to understand the rules of the game:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Trump Cards Mania is a 2 player free online card game.</li>
                        <li>Each player gets a total of 11 online cards from 3 tiers – 4 Gold, 3 Silver, and 4 Bronze, in that order.</li>
                        <li>Both players play cards from the same tier in each round.</li>
                        <li>Players get 60 seconds to choose the captain and the vice-captain online card failing which they will not get the 3x captain round and 2x vice-captain round.</li>
                        <li>Players get 15 seconds to choose cricket stats.</li>
                        <li>Stats once selected, can’t be unselected – so, choose wisely.</li>
                        <li>A player with a higher stat, wins 1 point.</li>
                        <li>In the 3x round, the winner gets 3 times more points and in the 2x round, the winner gets 2 times more points.</li>
                        <li>The 30-second time bank can be used throughout the game. Exhausting the 30-second time bank will land the respective player out of the game.</li>
                        <li>The higher scorer wins the free online trump cards game.</li>
                    </ul>
                </section>

                {/* Section 6: Tips to Win */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-purple-800 italic mb-6">
                        TRUMP CARDS - HOW TO WIN THE GAME
                    </h2>
                    <p className="text-lg mb-4">
                       Here are the tips and tricks on how to win free online Trump cards game:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Trump Cards Mania is a 2 player free online card game.Consider all your cards before you choose captain and vice-captain.ach player gets a total of 11 online cards from 3 tiers – 4 Gold, 3 Silver, and 4 Bronze, in that order.</li>
                        <li>Make sure you choose your captain and vice-captain within 30 seconds. If you miss, you will not get the 3x captain round and the 2x vice-captain round, where you have the opportunity to score the most.</li>
                        <li>Online cricket Cards from all tiers gold, silver, and bronze can make a great Captain or Vice-Captain.</li>
                        <li>Use your stat within 15 seconds and choose carefully. Once selected, you can’t unselect.</li>
                        <li>Try not to use the time bank seconds till you absolutely have to.</li>
                        <li>Be very careful when you have used about 90% of 30 seconds in the extra time bank.</li>
                        <li>Running out of a 30-second time bank will land you out of the game.</li>
                        
                    </ul>
                </section>

                {/* Section 7: Facts */}
                <section>
                    <h2 className="text-3xl font-bold text-center text-purple-800 italic mb-6">
                        TRUMP CARDS ONLINE FACTS
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>A trump card in general is a card that holds more powers as compared to the rest of the deck.</li>
                        <li>Trump comes from Trionfi which is a type of 15th-century Italian playing card.</li>
                        <li>Trump card as a game is still widely popular as an educational game.</li>
                        <li>A trump card pack can be themed on cars, pets, books, dinosaurs, cricket, films, and TV shows among other themes.</li>
                        <li>Trump Cards Mania card statistics are based on IPL top 100 all-time batsmen till IPL 2024, ranked by total runs scored by them.</li>
                    </ul>
                </section>
            </div>

































            <div style={{ backgroundColor: "#f0f3fc" }} className=" py-12 px-4 sm:px-8 text-black">
                <h2 className="text-center text-2xl sm:text-3xl font-extrabold italic text-purple-800 mb-10">
                    Online Cards Game: FAQs
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

export default TrumpCardsMania