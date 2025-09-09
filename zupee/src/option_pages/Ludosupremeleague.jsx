import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Ludosupremeleague = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "Is the Zupee Ludo Supreme League real or fake? ",
            answer: " The Zupee Ludo Supreme League is indeed real. It offers genuine opportunities for players to compete in exciting Ludo tournaments."
        },
        {
            question: " How to join a Ludo Supreme League game?",
            answer: "You can join a Ludo Supreme League tournament in a few easy steps. To start playing, go to your Zupee app and select Ludo Supreme League. Once it’s installed, go to the lobby page and take your pick. You can see all the details about the game there. "
        },
        {
            question: "How to win Ludo Supreme League in Zupee?",
            answer: "Focus on scoring the highest points in the limited moves with skills by cutting opponents’ tokens to earn points. Click on the opponents’ tokens to check the score and capture them to get those points. Move your tokens to the home base for extra turns. "
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
                    &gt; <span>Ludo Supreme League</span>

                </div>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-normal lg:ml-20 gap-10 p-5">
                {/* Left Section */}
                <div className="flex flex-col items-center lg:items-start justify-center p-5 lg:p-10 gap-5 text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-[#342491] uppercase">
                        Play Ludo Supreme League
                    </h1>
                    <h1 className='p-3 text-xl'>
                        Dominate the Ludo Leaderboard: Score High, Rank Higher, and Win Free Game!</h1>
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
                    src="https://static-perf1.zupee.com/wp-content/uploads/2024/03/Ludo-supreme-league-picture-gameplay.webp"
                    alt="Ludo Game"
                    className="h-[30rem] md:h-[35rem] lg:h-[40rem] object-contain"
                />
            </div>

           









           <div className="mx-auto p-5 lg:p-10 bg-yellow-300">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-purple-800 text-center mb-12">
    WHY PLAY LUDO SUPREME LEAGUE?
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/supreme-ludo-league-is-safe-to-play.webp"
        alt="Safe to Play"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">Safe to Play</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/play-games-anytime-on-ludo-supreme-league.webp"
        alt="Play Anytime"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">Play Anytime</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/ludo-supreme-league-is-rng-certified.webp"
        alt="RNG Certified"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">RNG Certified</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <img
        src="https://static-perf1.zupee.com/wp-content/uploads/2024/06/ludo-supreme-league-offers-instant-customer-support.webp"
        alt="Customer Support"
        className="w-28 sm:w-36 md:w-40 lg:w-48"
      />
      <p className="mt-2 text-sm font-semibold text-purple-900">Customer Support</p>
    </div>
  </div>
</div>























            <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">

                {/* Section: Download Process */}
                <h2 className="text-4xl font-bold italic text-center text-purple-800 mb-6">
                    LUDO SUPREME LEAGUE DOWNLOAD PROCESS
                </h2>
                <p className="mb-4 text-lg">
                    Download and play the Ludo leaderboard game right from this page. Just follow these simple Ludo Supreme League APK installation steps:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Tap the Download button to start installing the Zupee app on your phone.</li>
                    <li>If a security prompt appears, click “OK” to proceed.</li>
                    <li>Find the downloaded file in your notifications or under “My Files → Downloads.”</li>
                    <li>Install the app and complete the sign-up process.</li>
                    <li>Open the app, select the Ludo Supreme League format to start playing.</li>
                </ul>

                {/* Section: What is Ludo Supreme League */}
                <h2 className="text-4xl font-bold italic text-center text-purple-800 my-10">
                    WHAT IS LUDO SUPREME LEAGUE?
                </h2>
                <p className="mb-6 font-medium">
                    Ludo Supreme League is a skill-based <span className="text-blue-600 font-semibold">online Ludo game</span> by Zupee. In the Ludo Supreme League, you play alone and try to get a high score to move up a leaderboard where many players are listed. This leaderboard shows who has the highest scores, and players compete to win in this free game format. Players receive a limited number of moves and a set time for each move. The game involves strategic token movement and cutting, with the goal of maximizing points. This league blends the nostalgic elements of Ludo with a competitive tournament style, providing a fresh and challenging experience for Ludo Players.
                </p>

                {/* Section: How to Play */}
                <h2 className="text-3xl font-bold italic text-center text-purple-800 mb-6">
                    HOW TO PLAY LUDO SUPREME LEAGUE?
                </h2>
                <p className="mb-4 text-lg  font-semibold">To play Ludo Supreme League, follow the steps below:</p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li><strong>Open the App:</strong>  Click on the Zupee app and tap on Ludo Supreme League format. Now choose from the “Tournament/Leaderboard” format.</li>
                    <li><strong>Begin the Game:</strong>  No need to roll a 6 to start the game. Besides your yellow tokens, there are 12 others on the board: 4 green, 4 red, and 4 blue. These tokens remain fixed in position for all players. Out of these 12 tokens, 6 are located at the start points for each color and cannot be moved. Players can only cut the remaining 6 tokens.</li>
                    <li><strong>Score Points:</strong>  You get 1 point for moving one box. Moreover, each of the tokens on the board carries specific points. Tap on the tokens to find out how many points you can earn by cutting them.</li>
                    <li><strong>Earn Extra Moves:</strong>Get an extra turn every time your Ludo token reaches home. Cut as many tokens as you can for even more turns.</li>
                    <li><strong>Count your Remaining Moves:</strong> You get 36 moves in a game and 15 seconds to move your token, every time. If you run out of time, your time bank of 60 seconds will be activated, which can be used throughout the game. If you exhaust your Timebank, you will be kicked out of the game, and the points scored till then will be considered the final score..</li>
                    <li><strong>Win the Free Game:</strong> Aim to score the highest to move up the leaderboard and win the match!</li>
                </ul>

                {/* Section: Gameplay Points */}
                <h2 className="text-3xl font-bold italic text-center text-purple-800 my-10">
                    LUDO SUPREME LEAGUE KEY GAMEPLAY POINTS
                </h2>
                <p className="mb-4 text-lg font-semibold">Here are the rules to play Ludo League on Zupee:</p>

                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Matches with 36 moves per game.</li>
                    <li>Play with yellow tokens that are already in an open position.</li>
                    <li>Total 12 tokens on the board. Cut only 6; the rest remain fixed at the start boxes, inaccessible for cutting.</li>
                    <li>Tokens carry varying point values, with additional moves earned upon cutting.</li>
                    <li>Roll the dice and move the tokens on the board. No minimum roll is needed to start.</li>
                    <li>Players must make moves within 15 seconds; a 60-second time bank is available. Exceeding the time bank leads to elimination; final scores are based on points earned.</li>
                    <li>Each box moved gets you 1 point; taking all tokens home ensures a high score.</li>
                    <li>Get an extra move every time a token is taken home.</li>
                    <li>Aim to achieve the highest points to dominate the leaderboard and emerge victorious.</li>
                </ul>

                {/* Section: Tips */}
                <h2 className="text-3xl font-bold italic text-center text-purple-800 my-10">
                    LUDO SUPREME LEAGUE TIPS
                </h2>

                <p className="mb-4 text-lg font-semibold">Take a look at the Ludo Supreme League tips & tricks:</p>

                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Maximize Score:</strong> Cut as many tokens on the board as possible to score high and win the free league.</li>
                    <li><strong>Focus on Taking Tokens Home:</strong>  Aim to bring home as many tokens as possible to boost your score.</li>
                    <li><strong>Token Color:</strong> Your token is always Yellow, so concentrate on cutting non-yellow tokens.</li>
                    <li><strong>Point Values:</strong> Tokens’ points are determined by their distance from the start point; prioritize cutting high-value tokens for leaderboard advancement.</li>
                    <li><strong>No Opponent Interference:</strong>  This version lacks opponents cutting your token, allowing full focus on earning points.</li>
                    <li><strong>Bonus Turns:</strong>  Earn an extra turn upon reaching home or cutting the opponent’s token; plan strategically.</li>
                    <li><strong>Time Management: </strong>Aim to utilize not more than 90% of your Timebank to maintain efficiency.</li>
                </ul>

                {/* Section: Comparison Table */}
                <h2 className="text-3xl font-bold italic text-center text-purple-800 my-10">
                    LUDO SUPREME LEAGUE VS. LUDO SUPREME
                </h2>
                <p className="mb-4">
                    Zupee offers both Ludo Supreme League and Ludo Supreme, each with multiplayer features but different gameplay mechanics and competitive structures. In Ludo Supreme, players compete directly in real-time, while in Ludo Supreme League, players aim to achieve high scores on a leaderboard over multiple games. This leaderboard system creates a lasting competitive atmosphere, focusing on sustained performance across various sessions. Here is a brief comparison in table form:                </p>

                {/* Responsive Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-400 text-sm md:text-base">
                        <thead className='bg-stone-200'>
                            <tr>
                                <th className="border p-2 text-left">Features</th>
                                <th className="border p-2 text-left">Ludo Supreme League</th>
                                <th className="border p-2 text-left">Ludo Supreme</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr >
                                <td className="border p-2">Format</td>
                                <td className="border p-2">Multiplayer with Leaderboard</td>
                                <td className="border p-2">Direct Multiplayer</td>
                            </tr>
                            <tr  className='bg-stone-200'>
                                <td className="border p-2">Number of players</td>
                                <td className="border p-2">Multiple players, not directly interacting but competing for leaderboard ranks.</td>
                                <td className="border p-2">2 to 4</td>
                            </tr>
                            <tr>
                                <td className="border p-2">Objective</td>
                                <td className="border p-2">Accumulate the highest total score over multiple games to rank on the leaderboard.</td>
                                <td className="border p-2">Score the most points in a single game by moving tokens and cutting opponents.</td>
                            </tr>
                            <tr className='bg-stone-200'>
                                <td className="border p-2">Gameplay</td>
                                <td className="border p-2">Within 36 moves players need to score points to rank high on the leaderboard.</td>
                                <td className="border p-2">Players get 5 to 10 minutes to score points, depending on the game mode.</td>
                            </tr>
                            <tr>
                                <td className="border p-2">Winning Criteria</td>
                                <td className="border p-2">Top positions on the leaderboard based on cumulative scores.</td>
                                <td className="border p-2">Highest scorer in each game.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

















            <div style={{ backgroundColor: "#f0f3fc" }} className=" py-12 px-4 sm:px-8 text-black">
                <h2 className="text-center text-2xl sm:text-3xl font-extrabold italic text-purple-800 mb-10">
                    Ludo Supreme League FAQs
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

export default Ludosupremeleague