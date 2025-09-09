import React from 'react'
import { Link } from 'react-router-dom'
const Tnc = () => {
    return (
        <>
            {/* Top breadcrumb */}
            <div className="text-sm p-4 sm:p-5" style={{ backgroundColor: "#f0f3fc" }}>
                <div className="max-w-6xl mx-auto text-center md:text-left">
                    <Link to="/" className="font-semibold text-purple-700">
                        Home
                    </Link>{" "}
                    &gt; <span className='font-bold'>Terms & Conditions</span>
                </div>
            </div>



             <div className="max-w-5xl mx-auto px-4 py-10 text-black text-sm leading-relaxed">
      <h1 className="text-4xl font-bold text-center text-purple-800 italic mb-6 uppercase">
        Terms and Conditions – Rewards Scheme
      </h1>

      <p className="mb-4 text-lg">
        Cashgrail Pvt. Ltd. (hereinafter referred to as "Zupee", "Company", "We", "Our", "Us") is introducing a limited time Rewards Scheme ("Scheme"/"Policy"),
        wherein registered end-users of the Platform (hereinafter referred to as "User", "You" or "User") can get an opportunity to receive certain cashback and rewards,
        from Zupee while engaging with the games on the Platform, subject to the terms mentioned below ("Scheme Policy").
      </p>

      <p className="mb-4 text-lg">
        Except as specifically set out under this Scheme Policy, the terms of use (
        <a href="https://www.zupee.com/terms-and-conditions/" target="_blank" className="text-blue-600 underline">https://www.zupee.com/terms-and-conditions/</a>
        ) ("Terms of Use") shall apply mutatis mutandis to this Scheme Policy. The capitalized terms defined under the Terms of Use shall have the same meanings assigned under the Terms of Use.
      </p>

      <p className="mb-4 text-lg">
        This Scheme applies exclusively to registered Users, above the age of 18 (eighteen).
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Scheme Rewards:</h2>
      <ol className="list-decimal pl-6 space-y-2 text-lg">
        <li>
          Users who successfully earn cash contests on the Platform as per the rules displayed on the Platform, may be eligible for certain free rewards on the Platform ("Cashback"/"Rewards").
        </li>
        <li>
          Exclusively for such Users, Zupee offers a reward in the form of cash or in kind entailing credit to the User’s wallet on the Platform, which shall be governed by the Zupee Rewards T&Cs. Each such reward is limited to a one-time cash winning experience for a User on the Platform.
        </li>
        <li>
          Kind Prizes: It is also hereby clarified that in the event a User is eligible for any prizes in kind from third-party partners, the terms provided under Clause 2 below shall apply.
        </li>
      </ol>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Terms for Kind Prizes</h2>
      <p className="mb-2 text-lg">
        The prizes/rewards shall be provided to the winners on an “as is basis” and without any warranty or guarantee concerning the quality, suitability, etc. Zupee makes no representation and/or warranties regarding the prizes, including but not limited to their quality or merchantability, and does not accept any liability or responsibility arising out of any defect in the prize and/or the use of the prize. If the User is dissatisfied with the Reward Scheme or with any terms of use of the Scheme, the User’s sole and exclusive remedy is to not participate in the Scheme.
      </p>

      <ol className="list-decimal pl-6 space-y-1 text-lg">
        <li>Zupee has listed the kind of prizes on the Platform (as applicable).</li>
        <li>Zupee undertakes to provide a similar product (if the exact product is not available).</li>
        <li>Zupee shall not be held responsible or liable for any product defects, warranties, merchantability, delivery timelines, inadequacy, insufficiencies, injuries, or damages caused due to the use of the kind reward.</li>
        <li>
          In case of non-acceptance or return of the kind reward (due to any reason), no alternate reward will be provided.
        </li>
        <li>
          Zupee reserves the right to provide a reward of similar nature and equal value in the event of unforeseen circumstances.
        </li>
        <li>
          The rewards will not be transferred, assigned or redeemed for cash by the winner.
        </li>
        <li>
          In the event that a winner, for a prize in kind or digital, this choice is final and irrevocable, prohibiting any substitution or exchange for cash or other compensation in kind. If an individual opts out, they forfeit their prize. Notwithstanding the foregoing, the Company reserves the right, at its sole discretion, to alter, suspend, or cancel this reward without prior notice.
        </li>
        <li>
          In the event the prize is lost, damaged, or not intact, the winner shall bear full responsibility for coordinating any necessary insurance claim, where it may be applicable. The Company shall have no further liability or responsibility in this regard.
        </li>
        <li>
          In case of any related taxes, fees (except for the rewards of up to ₹20,000/- as defined), the plan, the prize acknowledgment, and agreed to these terms and the Terms of Use. Taxes, specifically if incurred due to such kind rewards, shall be borne by the winner and applicable as per Indian Laws.
        </li>
        <li>
          The Company may either directly or through a third-party service provider, initiate delivery. The Company will not be liable for any delay in delivery, loss, or non-delivery of the reward items due to external factors such as logistical breakdowns, availability of the prize, and other relevant issues, unless expressly stated by the Company.
        </li>
        <li>
          All prizes in kind must be physically accepted by the winner based on the declared address and identification documents.
        </li>
        <li>
          Prizes will not be made available via pickup options.
        </li>
        <li>
          The winner shall provide all requested documentation in order to claim the prizes, including proof of identity, contact number, billing address, PAN card (if applicable).
        </li>
        <li>
          The delivery of prize(s) is contingent upon the winners providing complete address information and availability at the specified location. If for any reason, the delivery attempt is unsuccessful, the prize may stand forfeited. Zupee shall not be liable for the same. The responsibility of receiving the product lies solely with the winner.
        </li>
        <li>
          The winner shall ensure correct contact details, address, and availability during prize delivery. Any errors or failure to receive the prize due to incorrect data will result in forfeiture.
        </li>
        <li>
          The winners will be subject to PVC verification before handing over the prize(s).
        </li>
        <li>
          If the reward leads to any applicable taxes, the taxes shall be applicable as per the applicable taxation laws, appropriate taxes are required to be borne by the winners.
        </li>
      </ol>

      <p className="font-semibold mt-4">a. Rewards:</p>
      <p className="mb-2">
        In case the user opts out to obtain cash reward, the applicable TDS provisions are provided as detailed in the <span className="italic">Terms and Conditions</span>.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Requirement to obtain PAN:</h2>
      <ol className="list-decimal pl-6 space-y-2 text-lg">
        <li>
          To claim any rewards in cash, in kind, or win a prize (only with valid PAN, regardless of the value of the prize), the User must furnish a valid PAN. Users are required to submit a scanned copy/photo of their original PAN along with other requested documents for validation and verification.
        </li>
        <li>
          The user acknowledges that if a valid PAN is not submitted within the stipulated time for claiming the prize, Zupee will not be liable if the prize is not credited/dispatched, or delivered.
        </li>
        <li>
          Zupee reserves the right to block/forfeit such winnings and prizes from time to time, for any incomplete, fake, wrong, or invalid document submissions by the user.
        </li>
      </ol>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Miscellaneous:</h2>
      <ol className="list-decimal pl-6 space-y-2 text-lg">
        <li>Users acknowledge and agree that they are not entitled to win any Scheme Rewards and that Zupee has made no assurances regarding the Scheme or winning any prizes.</li>
        <li>
          The Scheme is run purely on a ‘best effort basis’ and participation in this Scheme is voluntary and at your sole discretion and risk. By participating in the Scheme, you will be legally bound hereby, to release from liability, and hold harmless Zupee, and any of its affiliates, employees, or agents representing or related to the Company and its services/products.
        </li>
        <li>
          Each User acknowledges that the decision of Zupee with respect to the Scheme, including without limitation the eligibility of any participant, and prize distribution shall be final and binding on all users. No challenge to the same shall be entertained.
        </li>
        <li>
          The User shall be bound by all applicable policies of Zupee including but not limited to its terms of use, privacy policy, and any terms provided for the Scheme. The User also understands that participation through any third party is prohibited and may result in disqualification or blocking by Zupee at any point of time.
        </li>
        <li>
          This Scheme Policy and the Scheme itself shall be governed in accordance with the laws of India and subject to the exclusive jurisdiction of the courts at New Delhi.
        </li>
        <li>
          Zupee reserves the right to modify, cancel, or withdraw the Scheme or Scheme Policy at its sole discretion at any time.
        </li>
        <li>
          Users who participate in the Scheme hereby grant Zupee and its partners the right to use their name, likeness, voice, image, or any other attributes for marketing, promotion, or advertising without compensation or notice.
        </li>
        <li>
          The Company shall not be liable for any delay/failure due to circumstances beyond its control including but not limited to natural calamities, government restrictions, legal/regulatory approvals, or actions of third parties.
        </li>
        <li>
          Users hereby agree and acknowledge that Zupee does not guarantee uninterrupted or error-free rewards experience.
        </li>
        <li>
          If a User is dissatisfied with the Reward Scheme or the Reward Scheme rules and/or any content or any requirements of the Contest form, the markets served, or practices followed by Zupee in operating the Scheme, the sole and exclusive remedy is to not participate in the Scheme itself.
        </li>
        <li>
          Company shall not be accountable/liable for any disruptions/delays/restrictions or cancellation of the Reward Scheme due to any government rules/laws.
        </li>
      </ol>
    </div>
        </>
    )
}

export default Tnc