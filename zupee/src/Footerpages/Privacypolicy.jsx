import React from 'react';

const PrivacyPolicyIntro = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl mx-auto text-gray-800 space-y-6">

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl italic font-bold text-center text-purple-800">
                PRIVACY POLICY
            </h1>

            {/* Intro Paragraphs */}
            <p className="text-justify text-base sm:text-lg md:text-lg">
                This privacy policy (Privacy Policy) adopted by Cashgrail Private Limited (hereinafter referred to as “Company”, “We”, “Us” or “Our”)
                governs the collection, use and transfer of information capable of identifying a person (Personal Information) accessed or shared with Us
                by virtue of use or access of our mobile applications or websites (Platform). By agreeing to this Privacy Policy, or by accessing, or by
                using the Services (defined under the{' '}
                <a href="#" className="text-blue-600 underline font-medium">Terms and Conditions</a>
                ) through the Platform, you consent to the collection, transfer, adaptation, alteration, storage, disclosure, and other uses of your
                Personal Information as described in this Privacy Policy. If you have any concerns about providing data, or having it used in any manner
                permitted in this Privacy Policy, you should not use the Company Services. Unless specified otherwise, this Privacy Policy applies only to
                the Platform and services, features, software, and functionalities offered by Us, via the Platform.
            </p>
            <p className="text-justify text-base sm:text-lg md:text-lg">
                For the purposes of this Privacy Policy, personal data or sensitive personal data for processing, or to be stored or processed under a
                lawful contract or otherwise. This Privacy Policy incorporates the requirements under the applicable data protection laws.
            </p>

            <hr className="border-t border-gray-400 mt-6" />

            {/* Section I */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl italic font-semibold text-center text-purple-800 mt-8 sm:mt-10">
                I. OUR BUSINESS & POLICY APPLICABILITY
            </h2>

            <p className="text-justify text-base sm:text-lg md:text-lg mt-4">
                The Company develops and operates software & technology products/ platforms and associated services for enabling, conducting, and offering Services.
                By accessing our Platform, users and players (hereinafter referred to as <strong>“Users”/“You”/“Your”</strong>) can access our Services, which include the provision of access to
                various games available on the Platform. As set out in the terms and conditions relating to the Services (the <strong>“Terms“</strong>), you must be at least at a legal age
                (minimum age of 18 years) to access and/or use the Services. The Services are not directed to persons under the legal age of majority. We do not knowingly
                collect any Personal Information from children under legal age. In case, We become aware that a child under legal age has provided Personal Information, steps
                will be taken to remove such information and terminate such an account. If you become aware that any Personal Information of a child/minor is provided, please
                contact our Grievance Officer (defined below). For the purposes of this Privacy Policy, unless defined hereunder, all capitalized terms shall have the meaning
                ascribed to them under the Terms.  THIS PRIVACY POLICY DOES NOT APPLY TO MOBILE APPLICATIONS OR WEBSITES WHICH ARE NOT OWNED OR CONTROLLED BY COMPANY, INCLUDING THIRD PARTY LINKS AND APPLICATIONS
                WITH WHICH YOU MAY INTERACT WHILE USING THE PLATFORM. WE WILL NOT ASSUME ANY LIABILITY FOR ANY HARM CAUSED TO YOU BY ACCESSING ANY THIRD PARTY WEBSITES OR LINKS
                ADVERTISED ON THE PLATFORM. YOUR ACCESS AND USAGE OF ANY THIRD-PARTY WEBSITES OR APPS IS ENTIRELY AT YOUR OWN RISK. THE COMPANY SHALL NOT BE A PARTY TO ANY
                TRANSACTION BETWEEN YOU AND A THIRD-PARTY SERVICE.
            </p>

            <hr className="border-t border-gray-400 mt-6" />

            {/* Section II */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl italic font-semibold text-center text-purple-800 mt-8 sm:mt-10">
                II. COLLECTION & USE OF INFORMATION
            </h2>

            {/* A. Personal Information */}
            <div>
                <h3 className="font-bold text-lg sm:text-xl mt-4">A. Personal Information</h3>
                <p className="text-justify text-base sm:text-lg mt-2">
                    We obtain and you hereby consent to provide your Personal Information at the time of registration or from third-party service providers you interact with or engaged by us. Such Personal Information includes:
                </p>
                <ul className="list-decimal list-inside pl-4 sm:pl-6 space-y-1 text-base sm:text-lg mt-2">
                    <li><strong>Registration</strong> – phone number/Google email ID, name, location.</li>
                    <li><strong>Payment</strong> – bank account details, payment method name, KYC documents.</li>
                    <li><strong>Customer support correspondence</strong>  When you ask for assistance from Our customer support, the contact information you provide will be collected, as well as information about your gameplay or activity on the Service, your user ID number, your financial and payment information, and the correspondence. If available through the Services, you may provide Us with certain profile information which you consent to make public, such as a short biography, location, website, cell phone, a picture, information to customize your account, etc. Such contact information may be used to send you information about the Services or related information.</li>
                </ul>
            </div>

            {/* B. Non-Personal / Aggregated Data */}
            <div>
                <h3 className="font-bold text-lg sm:text-xl mt-6">B. Non-Personal / Aggregated Data</h3>
                <p className="text-justify text-base sm:text-lg mt-2">
                    Additionally, Company may use data management services to access device information; metadata of incoming and outgoing calls and messages; device storage, device identifiers, call related information and records, application history, etc. These permissions are collected to better understand how users access and use our Services, both on an aggregated and individualized basis, in order to improve our Platform, analyse player traffic and activity, respond to user desires and preferences, and for other research and analytical purposes. This includes:
                </p>
                <ul className="list-decimal list-inside pl-4 sm:pl-6 space-y-1 text-base sm:text-lg mt-2">
                    <li><strong>Ads</strong>: Advertisers on mobile devices sometimes use advertising identifiers to enable and optimize their advertising, to deliver tailored ads related to your interests (Interest-Based Advertising or IBA). These identifiers are non-permanent, non-personal, device identifiers. We and/or third parties may use your device’s advertising identifier and other information associated with it, to deliver ads that relate to your interests and to improve and measure the effectiveness of ad campaigns.</li>
                    <li><strong>Location Services</strong>:  We and/or third parties may use and store information about your location to provide special features, to deliver ads that relate to your interests and/or to improve and customize the Services and to ensure that you are not accessing the Platform from restricted states in India or outside the territorial limits of the Republic of India.</li>
                    <li><strong>Links</strong>:  We may keep track of how you interact with links across the Services, including email notifications, third-party services, and client applications, by redirecting clicks or through other means. </li>
                    <li><strong>Log Data Services</strong>:  Our backend servers automatically record information created by your use of the Services. This data may include information such as your IP address, browser type, operating system, the referring web page, pages visited, location, your mobile carrier, device and application IDs, search terms, and cookie information. Log data is received when you interact with the Services. This data is used to provide the Services and to measure, customize, and improve them.</li>
                    <li><strong>Third-party services</strong>:  We use a variety of third-party services to help the provision of the Services, such as hosting and other services. These third-party service providers may collect information sent by your browser as part of a web page request, such as cookies or your IP address, location and devices’ unique identifiers. Also, third-party ad partners may share information to measure ad quality and tailor ads, for example, to display ads about things you may have already shown interest in.</li>
                    <li><strong>Device Management Services</strong>:  The Device Management Services access device information; data, metadata of incoming and outgoing calls and messages; device storage, device identifiers, call related information and records, application history, etc. These permissions are collected to better understand how users access and use our Services, both on an aggregated and individualized basis, in order to improve our Services, analyze player traffic and activity, respond to user desires and preferences, and for other research and analytical purposes.</li>
                </ul>
            </div>

            {/* C. Sensitive Personal Data */}
            <div>
                <h3 className="font-bold text-lg sm:text-xl mt-6">C. Sensitive Personal Data/Personal Data or Information Collected</h3>
                <p className="text-justify text-base sm:text-lg mt-2">
                    Please note that We shall always take your express consent before collecting any Sensitive Personal Data/Personal Data or Information.
                </p>
                <p className="text-justify text-base sm:text-lg mt-2">
                    We are committed to keeping all such Sensitive Personal Data/Personal Data or Information safe at all times and ensure that such data/information is only transacted provided the highest possible degree of care available under the technology presently in use. Company will not use Your Sensitive Personal Data/Personal Data or Information for any purpose other than for such specific purposes as you have expressly consented to its use.
                </p>
                <p className="text-justify text-base sm:text-lg mt-2">
                    Where we permit any third parties to collect and use your Sensitive Personal Information/Personal Data, we, to the best of our knowledge, (i) ensure that such third parties maintain the same security standards that are adhered to by us and prescribed under applicable data protection laws for the protection of your Sensitive Personal Information/Personal Data and (ii) take reasonable measures to ensure that the third parties do not disclose the Sensitive Personal Information/Personal Data unless such disclosure has been expressly consented to by you.
                </p>
            </div>

            <hr className="border-t border-gray-400 mt-6" />

            {/* Section III */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl italic font-semibold text-center text-purple-800 mt-8 sm:mt-10">
                III. USE OF INFORMATION
            </h2>
            <p className="text-justify text-base sm:text-lg mt-4">
                Some of the Personal Information, for example, your name and/or username, may be listed publicly on the Services, including on your profile page and in search results.
                You agree that We and/or third parties on our behalf and/or our partners may use and store the Personal Information for the purposes of contacting you as part of
                customer support; to send you updates or information about the Services; managing your account and relationship with the Service, improving the in-app experience,
                facilitating seamless transaction, improving the Services, research, surveying, and engaging with you, for example by sending you communications for these purposes;
                marketing and promotion of the Services or other products; to personalize and optimize the Services, promotional content and/or advertising; to create reports,
                analysis or similar services for the purposes of research or business intelligence.
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl italic font-semibold text-center text-purple-800 mt-8 sm:mt-10">
                IV. INFORMATION SHARING AND DISCLOSURE
            </h2>

            <p className="text-justify text-base sm:text-lg mt-4">
                We may disclose your Personal Information in the circumstances set out below and you hereby consent to the same to be shared with:
            </p>

            <ol className="list-decimal pl-4 sm:pl-6 space-y-4 mt-4 text-base sm:text-lg text-justify">
                <li>
                    <span className="font-bold">Provision of Services:</span> any third-party service provider to whom disclosure is necessary to enable Us to provide You with the services which You wish to access on or through the Platform, for example, to process a disbursal instruction your Information has to be provided to the payment processors. Such companies shall be granted access to the Personal Information needed to perform their functions and include:

                    {/* Table */}
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full text-sm sm:text-base text-left border border-gray-400">
                            <thead className="bg-gray-200 font-semibold">
                                <tr>
                                    <th className="border px-4 py-2">Third-Party Data Recipient Entity Name</th>
                                    <th className="border px-4 py-2">Service/Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-stone-300'>
                                    <td className="border px-4 py-2">SMS OTP providers</td>
                                    <td className="border px-4 py-2">For the generation of OTP</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">IP Reverse Geolocation Providers</td>
                                    <td className="border px-4 py-2">To ascertain and act against Users from restricted jurisdictions</td>
                                </tr>
                                <tr className='bg-stone-300'>
                                    <td className="border px-4 py-2">Analytical and data management service providers</td>
                                    <td className="border px-4 py-2">To obtain services for smooth functioning of the Platform and customizing the Platform for the needs of the Users, sharing such data with data analytics services and tools which are run on</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Payment providers/payment aggregators</td>
                                    <td className="border px-4 py-2">For processing charges</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li>
                    <span className="font-bold">Law Enforcement:</span> (i) any person/entity to whom disclosure is necessary in accordance with applicable law;
                    (ii) any government or statutory authority or court of law or judicial forum to whom disclosure is necessary in accordance with applicable law;
                    (iii) in circumstances We believe necessary or appropriate to respond to valid claims and legal process, to protect the property and rights of Company,
                    to protect the safety of the public or any person or User, or to prevent or stop any illegal, unethical or legally actionable activity; and
                    (iv) any person/entity to whom disclosure is necessary to enable Us to enforce Our rights;
                </li>

                <li>
                    <span className="font-bold">Affiliates:</span> to Our associate companies, business partners, agents or third parties for the purposes of the services or any other
                    marketing and promotional activity is undertaken by or on behalf of the Company;
                </li>

                <li>
                    <span className="font-bold">Change in Control:</span> any entity that legally acquires the Company or its Platform. In the event that the Company is involved in a
                    bankruptcy, merger, acquisition, reorganization or sale of assets, your Personal Information may be sold or transferred as part of that transaction.
                    The undertakings in this Privacy Policy shall apply to the Personal Information as transferred to the new entity.
                </li>
            </ol>

            <hr className="border-t border-gray-400 mt-6" />

            {/* Section V */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl italic font-semibold text-center text-purple-800 mt-8 sm:mt-10">
                V. YOUR RIGHTS
            </h2>

            <p className="text-justify text-base sm:text-lg mt-4">
                We do not keep Your data for longer than is necessary unless we are required to do so under applicable law.
                We will use Your Personal Information only for so long as is necessary:
            </p>

            <ol className="list-decimal pl-4 sm:pl-6 space-y-2 mt-2 text-base sm:text-lg text-justify">
                <li>to achieve the purposes that have been specifically identified in this Privacy Policy or such purposes as having been identified in any agreement entered into with you;</li>
                <li>as required by applicable laws and regulations, or as may be required for evidentiary purposes;</li>
                <li>as deemed necessary for tax, fraud control, or mitigation, and to conduct a defence in relation to any disputes or claims whether potential or actual (taking into account statute of limitations under applicable laws).</li>
            </ol>

            <p className="mt-4 text-base sm:text-lg text-justify">
                You can review, modify, and delete the information You have provided to us at any time and/or withdraw Your consent from allowing us to collect,
                process or transfer Your information by contacting Our Grievance Officer (See Section VIII below). Please note that if You withdraw Your consent,
                we may be constrained to withdraw those features, functionalities, services etc. which cannot be provided, without the information You seek to
                withdraw consent for, or delete from our records. Please note that your requests with respect to your data shall not be complied with if it
                adversely affects another user, or prejudices such user’s rights.
            </p>

            <p className="mt-4 text-base sm:text-lg text-justify">
                Your right to withdraw consent relates to any further collection or processing, of your Sensitive Personal Information/Personal Data, however such
                withdrawal of consent shall not: (i) be retrospective or require the deletion of records required for statutory purposes; or (ii) operate where required
                for the discharge of ongoing contractual obligations unless the contract under which the Sensitive Personal Information/Personal Data is required
                to be collected is also terminated with the request for withdrawal of consent to collect such Sensitive Data/Personal Data.
            </p>

            <p className="mt-4 text-base sm:text-lg text-justify">
                Your data will be erased/deleted when it has served the purpose for which it was being collected and is no longer necessary, where consent has been withdrawn,
                or where retention of such data is contrary to or prohibited by applicable law.
            </p>

            <p className="mt-4 text-base sm:text-lg text-justify">
                You have the right to data portability, i.e., you have the right to receive a copy of your Personal Information in a commonly used and structured,
                machine-readable format and have it transferred to another service provider or third party after paying us a fee which shall be communicated upon your request.
            </p>

            <hr className="border-t border-gray-400 mt-6" />

            {/* Section VI */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl italic font-semibold text-center text-purple-800 mt-8 sm:mt-10">
                VI. PROTECTION OF INFORMATION
            </h2>

            <p className="text-justify text-base sm:text-lg mt-4">
                The Company maintains appropriate technical and physical safeguards to protect Information against accidental or unlawful destruction or loss, alteration,
                unauthorized disclosures or access, and any other unlawful forms of processing of the data in its possession (Security Practices). All information provided
                by You is stored and retained on a secure server located in India. Such Security Practices include, but are not limited to encryption, firewalls, password
                protection, limitation of access to specified personnel on a need to know basis, de-identification and encryption and other physical security measures to
                guard against unauthorized access to the server and systems and information residing on such server and systems. Company’s Security Practices are commensurate
                with the information assets being protected and with the nature of the business. By using the Platform, you accept that the Security Practice and procedures
                mentioned above, which are designed to protect the information provided by You, are reasonable. Information including Sensitive Personal Data/Personal Data or
                Information (other than such data that is subject to data localization due to statutory or regulatory obligations) may be transferred to third parties located
                and/or may be stored at worldwide destinations, outside India or the location from which your information has been collected which ensure a similar level of
                protection and security adhered to by us under applicable Indian laws. However, we do not guarantee that Personal Information cannot be accessed, disclosed, altered
                or destroyed by breach of any of the abovementioned safeguards. We take all steps reasonably necessary, including providing notice of breach to users, where required
                under applicable law, to ensure that Personal Information is treated securely and in accordance with this Privacy Policy. Irrespective of which country you reside
                in or supply information from, you authorize Us to store and/or use the Information according to this Privacy Policy in any country where We may operate.
                PLEASE UNDERSTAND THAT, WHILE WE STRIVE TO PROTECT YOUR PERSONAL INFORMATION AGAINST POTENTIAL RISKS AND EXPOSURES, THERE IS NO ABSOLUTE SECURITY IN THE ONLINE/
                INTERNET SPHERE. THEREFORE, YOU MUST NOT DISCLOSE ANY INFORMATION ON THE PLATFORM THAT IS SENSITIVE PERSONAL DATA/PERSONAL DATA OR INFORMATION WHICH IS NOT
                REQUIRED FOR YOU TO USE OUR SERVICES. YOU UNDERSTAND THAT THE TRANSMISSION OF INFORMATION OVER THE INTERNET IS NOT COMPLETELY SECURE AND THERE ARE RISKS ASSOCIATED
                WITH IT. ALTHOUGH WE STRIVE TO PROTECT YOUR PERSONAL INFORMATION, WE CANNOT GUARANTEE THE SECURITY OF THE SAME WHILE IT IS BEING TRANSMITTED TO OUR PLATFORM AND
                ANY TRANSMISSION IS AT YOUR OWN RISK.
            </p>

            <hr className="border-t border-gray-400 mt-6" />

            {/* Section VII */}
            <h2 className="text-center text-xl sm:text-3xl md:text-4xl italic font-bold text-purple-800 mt-8 sm:mt-10">
                VII. TERM
            </h2>

            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 mt-4">
                We may retain the Information for as long as is necessary to fulfil the
                purposes for which it was collected or as needed to provide the
                Services, even after you have discontinued or deleted any account, or
                after the end of the provision of the Services, if retention of such
                Personal Information is reasonably necessary to comply with legal
                obligations, meet regulatory requirements, resolve disputes between
                users, prevent fraud, or any other use. Subsequent to such a term, we
                will delete or anonymize your Personal Information once the purpose has
                been fulfilled.
            </p>

            <hr className="border-t border-gray-400 my-6" />

            {/* Section VIII */}
            <h2 className="text-center text-xl sm:text-3xl md:text-4xl italic font-bold text-purple-800 mt-8 sm:mt-10">
                VIII. CONTACT DETAILS
            </h2>



            <p className="text-base sm:text-lg mt-4">In case of any queries regarding our data processing activities or to exercise your rights with respect to your Personal Information, please contact the Grievance Officer <strong>Mr. Sumit Yadav</strong> at <a href="mailto:grievances@zupee.in">grievances@zupee.in</a> or the Nodal Officer <strong>Mr. Daksh Tyagi</strong> at <a href="mailto:nodal@zupee.in">nodal@zupee.in</a> for revoking your consent and requesting deletion of your Personal Information held with us. We will respond to your request as soon as possible, and in any event within 30 days or in accordance with the timeframe permitted under applicable law. and delete your Personal Information, except such information required by law to be retained. If any court or other competent authority finds any of this Privacy Policy to be invalid or unenforceable, the other terms of this Privacy Policy will not be affected. This Privacy Policy is governed by and interpreted in accordance with the laws of the Republic of India. Any dispute arising in connection with this Privacy Policy will be subject to the exclusive jurisdiction of the courts located in the city of New Delhi India. You consent to the jurisdiction and venue in such courts and waive any objection as to an inconvenient forum. We reserve the right to revise or amend this Privacy Policy from time to time.</p>
        </div>


    );
};

export default PrivacyPolicyIntro;
