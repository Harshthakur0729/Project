import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Top breadcrumb */}
      <div className="text-sm p-4 sm:p-5" style={{ backgroundColor: "#f0f3fc" }}>
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <Link to="/" className="font-semibold text-purple-700">
            Home
          </Link>{" "}
          &gt; <span>About</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-3 sm:px-6 md:px-12 lg:px-20 py-10 min-h-screen">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-800 uppercase text-center mb-8 italic">
          We Are Category Creators
        </h1>

        {/* Paragraph Section */}
        <div className="max-w-6xl mx-auto text-base sm:text-lg md:text-xl text-gray-800 space-y-2 leading-relaxed px-2 sm:px-4">
          <p>
            Zupee didn’t enter a category, it created one. In 2018, we set out
            with a bold idea: to reimagine Ludo, India’s most iconic board game,
            for the digital generation. Not as a game of chance but one powered
            by skill, strategy and fairness.
          </p>
          <p>
            With this, Zupee became the pioneer of skill-based Ludo gaming in
            India.
          </p>
          <p>
            We introduced faster formats and move-based scoring, turning a
            passive experience into one that rewards skill-based play. As
            millions joined in, we scaled responsibly, building one of the
            safest, most transparent platforms in India’s gaming ecosystem.
          </p>
        </div>

        {/* Highlighted Subheading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-purple-800 italic text-center my-10 px-2">
          FROM THE HEART OF BHARAT, FOR THE FUTURE OF INDIA
        </h2>

        {/* Bullet Points */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
            Gaming That’s Rooted in Culture
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-base sm:text-lg md:text-xl">
            <li>
              <span className="font-bold">150M+</span> Registered Users
            </li>
            <li>
              <span className="font-bold">12.5BN+</span> Total Gameplays
            </li>
            <li>
              <span className="font-bold">7MN+</span> Daily Games played
            </li>
            <li>
              <span className="font-bold">2–10-minute</span> games
            </li>
          </ul>
        </div>

        {/* Meet The Team */}
        <div className="px-2 sm:px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold italic text-purple-800 text-center mb-12">
            Meet The Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="space-y-4">
              <div className="overflow-hidden transition-all duration-500 hover:rounded-br-[6rem] hover:rounded-tl-[6rem]">
                <img
                  src="https://static-perf1.zupee.com/wp-content/uploads/2022/07/Dilsher-malhi-300x300.webp"
                  alt="Dilsher Singh Malhi"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-800 uppercase italic">
                Dilsher Singh Malhi, Founder &amp; CEO
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Dilsher Singh Malhi is the Founder and Chief Executive Officer of Zupee, India’s leading free-to-play,
                skill-based online gaming platform with over 150 million registered users across India. An alumnus of
                the esteemed Indian Institute of Technology (IIT) Kanpur, Dilsher founded Zupee in 2018 at the age of 23,
                blending his innate business acumen with a deep conviction in skill-based gaming as a conduit for reviving
                culturally rooted games. Dilsher’s impactful contributions have earned him recognition on platforms such as
                Forbes Asia’s 30 Under 30 and the IDFC First-Hurun India Top 200 Self-Made Entrepreneurs. As Zupee continues
                its trailblazing journey. Dilsher's unwavering commitment to responsible leadership, both with regard to Zupee
                and the industry is an integral part of responsible, skilled and tech-led future for gaming in India. </p>
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <div className="overflow-hidden transition-all duration-500 hover:rounded-br-[6rem] hover:rounded-tl-[6rem]">
                <img
                  src="https://static-perf1.zupee.com/wp-content/uploads/2022/07/akansha-dhamija-300x300.webp"
                  alt="Akanksha Dhamija"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-800 uppercase italic">
                Ms. Akanksha Dhamija, Chief Operating Officer, Zupee
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Akanksha Dhamija is the Chief Operating Officer at Zupee, India’s leading free-to-play,
                skill-based online gaming platform with over 150 million users. A seasoned business leader,
                Akansha has played an integral role in Zupee’s growth trajectory. She believes that the true
                scalability of a brand is armored with resilience, trust and inclusivity. This vision has helped
                shape Zupee’s evolution into a trusted and responsible leader in skill-based gaming.  An alumna
                of BITS Pilani and an MBA by training, Akanksha exemplifies a new-age leadership approach,
                one that balances performance with purpose, structure with scale and culture with capability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="space-y-4">
              <div className="overflow-hidden transition-all duration-500 hover:rounded-br-[6rem] hover:rounded-tl-[6rem]">
                <img
                  src="https://static-perf1.zupee.com/wp-content/uploads/2022/07/Govind-mittal-300x300.webp"
                  alt="Govind Mittal"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-purple-800 uppercase italic">
                Mr. Govind Mittal, Chief of Staff, Zupee
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Govind Mittal is the Chief of Staff at Zupee, India’s leading free-to-play, skill-based online
                gaming platform with over 150 million users. Govind has been a key pillar in sculpting Zupee’s
                strategic architecture bracing governance framework, navigating regulatory adherence with finesse
                and inculcating a compliant culture.  An alumnus of the revered Institute of Chartered Accountants
                of India, Govind’s intellect is matched by his deep sense of purpose. He believes skill-based
                gaming is built on trust and responsible play, shaping Zupee’s approach to progress driven by purpose.
                Govind combines financial and legal acumen with strategic forethought. Under his leadership,
                Zupee continues to set benchmarks in responsible gaming, integrating safeguards that promote fair
                play and informed user participation.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="px-2 sm:px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800 text-center uppercase italic mb-8">
            Our Values
          </h2>
          <ul className="max-w-5xl mx-auto space-y-4 text-gray-800 list-disc list-inside text-base sm:text-lg md:text-xl ">
            <li>
              <span className="font-bold">Craft with Intent:</span> We obsess
              over detail and design experiences with the player at the center.
            </li>
            <li>
              <span className="font-bold">Take Ownership:</span> Everyone leads.
              Everyone’s work creates impact.
            </li>
            <li>
              <span className="font-bold">Stay Curious:</span> We question,
              experiment, learn and adapt every single day.
            </li>
            <li>
              <span className="font-bold">Collaborate to Win:</span> We move
              together, grow together and celebrate wins as one.
            </li>
          </ul>




          {/* Responsible Gaming */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800 text-center uppercase italic my-12">
            Responsible Gaming
          </h2>

          <div className="max-w-5xl mx-auto text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed space-y-4">
            <p>
              At Zupee, safe and fair play isn’t an afterthought; it’s core to
              who we are...
            </p>

            {/* Sections */}
            <ul className="list-disc list-inside space-y-6">
              <li>
                <span className="font-bold">Section 1: Fair Play, Always</span>
                <ul className="list-disc list-inside pl-5 space-y-2 text-gray-700">
                  <li>
                    <span className="font-bold">RNG Certification:</span> Every
                    move is governed by RNG...
                  </li>
                  <li>
                    <span className="font-bold">No-Bot Policy:</span> Every
                    match is human...
                  </li>
                  <li>
                    <span className="font-bold">
                      Blockchain-Backed Systems:
                    </span>{" "}
                    Transparency in outcomes.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Section 2: Designed for Informed Play
                </span>
                <ul className="list-disc list-inside pl-5 space-y-2 text-gray-700">
                  <li>Real-Time Play Limits...</li>
                  <li>Fair Play Focus...</li>
                  <li>Easy-to-Use Interface...</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">
                  Section 3: Player Protection Framework
                </span>
                <ul className="list-disc list-inside pl-5 space-y-2 text-gray-700">
                  <li>AIGF-Aligned...</li>
                  <li>24/7 Redressal Support...</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Milestones & Investors */}
        <div className="px-2 sm:px-6 md:px-12 lg:px-20 py-12">
          {/* Milestones */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800 text-center uppercase italic mb-8">
            Milestones
          </h2>
          <ul className="max-w-5xl mx-auto space-y-1  text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed list-disc list-inside">
            <li>2018 – Zupee is founded to reimagine skill-based gaming in India.</li>
            <li>11 Apr 2019 – Raised $1M seed funding to kickstart the vision</li>
            <li>8 Apr 2020 – Raised $8M in Series A (Part 1) at $33M valuation</li>
            <li>8 Jan 2021 – Raised $10M in Series A (Part 2), hits $100M valuation</li>
            <li>5 Jan 2022 – Raised $102M Series B funding at $600M valuation</li>
            <li>Nov 2024 – Crosses 100M users and 6.6B gameplays</li>
            <li>June 2025 – Hits 150M users and 12.5B gameplays</li>
          </ul>

          {/* Investors */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800 text-center uppercase italic mt-16 mb-6">
            Investors & Advisors
          </h2>
          <div className="max-w-5xl mx-auto text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            <p className="mb-4">
              We’re proud to be supported by investors who share our long-term
              vision...
            </p>
            <p className="font-bold mb-3">Our Investors Include:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Smile</li>
              <li>WestCap</li>
              <li>Nepean Capital</li>
              <li>Tomales Bay Capital</li>
              <li>Matrix Partners India</li>
              <li>Orios Venture Partners</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
