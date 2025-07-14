import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy Policy - Zia Herbal Pro</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </Helmet>

      <div className="bg-[#ebfaf3] px-[30px] py-[100px]">
        <h1 className="text-[34px] md:text-[42px] font-black text-left">
          Privacy Policy
        </h1>
        <p className="text-[#676A5E] text-[14px] text-left mt-2">
          Last Updated: 10th July 2025
        </p>
      </div>

      <div className="px-6 md:px-20 py-10 text-left space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[31.5px]">
        <h2 className="font-bold">PRIVACY POLICY</h2>
        <p>
          Zia Herbal Pro is committed to being a responsible and transparent company
          that values your privacy. As an ISO 9001:2015 certified organization and a
          provider of natural herbal cosmetics, we are dedicated to safeguarding
          your personal data and respecting your rights.
        </p>

        <h2 className="font-bold">OUR PRIVACY PROMISE</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>We respect your privacy and your choices.</li>
          <li>We integrate privacy and security into everything we do.</li>
          <li>We do not send marketing messages unless you opt in. You can opt out anytime.</li>
          <li>We never sell or rent your personal data.</li>
          <li>We keep your data safe and only work with trusted partners.</li>
          <li>We are transparent about how we use your data.</li>
          <li>We only use your data as explained in this policy.</li>
          <li>We support your privacy rights and honor your requests where permitted by law.</li>
        </ol>

        <h2 className="font-bold">WHAT'S IN THIS POLICY?</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Who we are</li>
          <li>What is personal data?</li>
          <li>What data we collect and how we use it</li>
          <li>Who can access your data</li>
          <li>Where your data is stored</li>
          <li>How long we keep it</li>
          <li>How we keep it secure</li>
          <li>Use of cookies</li>
          <li>Your rights</li>
          <li>Contact information</li>
        </ol>

        <h2 className="font-bold">1. WHO WE ARE</h2>
        <p>
          Zia Trust the Nature is owned and operated by Zia Herbal Pro Private
          Limited, a company registered in India, committed to sustainable,
          herbal-based cosmetic products. We are the “data controller” of your personal data.
        </p>

        <h2 className="font-bold">2. WHAT IS PERSONAL DATA?</h2>
        <p>
          Personal data refers to any information that can directly or indirectly
          identify you — such as your name, email, phone number, address, IP
          address, and order history.
        </p>

        <h2 className="font-bold">3. WHAT DATA DO WE COLLECT AND HOW DO WE USE IT?</h2>
        <p><strong>Data We Collect:</strong></p>
        <ul className="list-disc ml-6">
          <li>Contact details (name, email, phone)</li>
          <li>Order and payment information (via Razorpay)</li>
          <li>Shipping information (via Shiprocket)</li>
          <li>Site usage (through cookies)</li>
        </ul>

        <p><strong>How We Use It:</strong></p>
        <ul className="list-disc ml-6">
          <li>To process and fulfill orders</li>
          <li>To communicate with you about your order</li>
          <li>To improve our website and services</li>
          <li>To send promotional material (if you’ve opted in)</li>
        </ul>

        <p><strong>Legal Bases:</strong></p>
        <ul className="list-disc ml-6">
          <li>Your consent</li>
          <li>Our legitimate interest in improving our service</li>
          <li>Contractual necessity (e.g., to deliver your order)</li>
        </ul>

        <p><strong>Profiling:</strong> We may personalize content and communication using your data, but you can opt out at any time.</p>

        <h2 className="font-bold">4. WHO CAN ACCESS YOUR DATA?</h2>
        <p>
          Only authorized employees and trusted third parties (like Razorpay for
          payments, Shiprocket for delivery) can access your personal data. All
          vendors are bound by confidentiality agreements.
        </p>

        <h2 className="font-bold">5. WHERE IS YOUR DATA STORED?</h2>
        <p>
          Your data is stored securely in India or in jurisdictions with proper
          legal safeguards. International transfers, if any, follow legal protocols.
        </p>

        <h2 className="font-bold">6. HOW LONG DO WE KEEP YOUR DATA?</h2>
        <p>We keep your data only as long as necessary for:</p>
        <ul className="list-disc ml-6">
          <li>Completing your transactions</li>
          <li>Customer service follow-up</li>
          <li>Legal compliance</li>
          <li>Analytics and security</li>
        </ul>
        <p>After that, we delete or anonymize your data securely.</p>

        <h2 className="font-bold">7. HOW DO WE SECURE YOUR DATA?</h2>
        <p>
          We use secure servers, encryption, and restricted access to protect your
          personal data. However, no online system is 100% secure.
        </p>

        <h2 className="font-bold">8. USE OF COOKIES</h2>
        <p>We use cookies to:</p>
        <ul className="list-disc ml-6">
          <li>Improve performance and user experience</li>
          <li>Analyze visitor behavior</li>
          <li>Serve personalized content or ads (if you consent)</li>
        </ul>
        <p>You can control cookies in your browser settings.</p>

        <h2 className="font-bold">9. YOUR RIGHTS</h2>
        <p>You have the right to:</p>
        <ul className="list-disc ml-6">
          <li>Access your personal data</li>
          <li>Correct or delete it</li>
          <li>Withdraw your consent</li>
          <li>Object to marketing or profiling</li>
        </ul>
        <p>
          Email us at <a href="mailto:Ziaherbalpro@gmail.com" className="text-blue-600 underline">Ziaherbalpro@gmail.com</a> to make a request.
        </p>

        <h2 className="font-bold">10. CONTACT</h2>
        <p>
          <strong>Grievance Officer:</strong> Sabina <br />
          <strong>Address:</strong> Zia Herbal Pro — Customer Support Team<br />
          ZIA HERBAL PRO PVT LTD., ISO 9001:2015 Certified Company<br />
          S-9, I Floor, Thiru Vi Ka Industrial Estate, Guindy, Chennai - 600032, Tamil Nadu<br />
          <strong>Email:</strong> Ziaherbalpro@gmail.com<br />
          <strong>Phone:</strong> 89398 43483
        </p>

        <p><strong>Last Updated: 10th July 2025</strong></p>
      </div>
      <Footer />
    </>
  );
}
