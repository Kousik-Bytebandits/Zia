import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
export default function CookiePolicyPage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cookie Policy - Zia Herbal Pro</title>
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
          Cookie Policy
        </h1>
        <p className="text-[#676A5E] text-[14px] text-left mt-2">
          Last Updated: 10th July 2025
        </p>
      </div>

      <div className="px-6 md:px-20 py-10 text-left space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[31.5px]">
        <h1>COOKIE POLICY</h1>
        <p>
          This Cookie Policy explains how Zia Herbal Pro uses cookies and similar
          tracking technologies when you visit our website at www.ziaherbalpro.com.
        </p>
        <p>By using our website, you agree to our use of cookies as outlined below.</p>
        <hr />
        <h2>1. WHAT ARE COOKIES?</h2>
        <p>
          Cookies are small text files stored on your device by your web browser.
          They help websites remember your preferences, login sessions, and usage
          behavior to enhance your experience.
        </p>
        <hr />
        <h2>2. TYPES OF COOKIES WE USE</h2>

        <h3>2.1 Essential Cookies</h3>
        <ul className="list-disc ml-6">
          <li>Required for basic website functionality.</li>
          <li>Includes login, shopping cart, and secure payment features.</li>
        </ul>

        <h3>2.2 Performance Cookies</h3>
        <ul className="list-disc ml-6">
          <li>Collect anonymous data on how visitors use the website.</li>
          <li>Help us improve website functionality and navigation.</li>
        </ul>

        <h3>2.3 Functional Cookies</h3>
        <ul className="list-disc ml-6">
          <li>Remember choices you make (e.g., region, language).</li>
          <li>Improve personalization of your experience.</li>
        </ul>

        <h3>2.4 Marketing Cookies</h3>
        <ul className="list-disc ml-6">
          <li>Track browsing habits to show you relevant ads on third-party platforms.</li>
          <li>May be used by advertising partners like Facebook, Google, etc.</li>
        </ul>

        <hr />
        <h2>3. THIRD-PARTY COOKIES</h2>
        <p>
          We may allow third-party services to set cookies to:
          <ul className="list-disc ml-6">
            <li>Analyze site traffic (e.g., Google Analytics)</li>
            <li>Deliver personalized ads (e.g., Facebook Pixel)</li>
            <li>Manage email or push notifications</li>
          </ul>
        </p>
        <p>These third parties may have their own cookie policies.</p>

        <hr />
        <h2>4. HOW TO CONTROL COOKIES</h2>
        <p>
          Most browsers allow you to control cookie settings, including:
          <ul className="list-disc ml-6">
            <li>Blocking all cookies</li>
            <li>Deleting existing cookies</li>
            <li>Opting out of tracking</li>
          </ul>
        </p>
        <p>
          <strong>Note:</strong> Disabling cookies may affect site performance and
          prevent some features from functioning properly.
        </p>
        <p>
          To manage cookies, refer to your browser's help section or visit:{" "}
          <a
            href="https://www.allaboutcookies.org"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.allaboutcookies.org
          </a>
        </p>

        <hr />
        <h2>5. UPDATES TO THIS POLICY</h2>
        <p>
          We may update this Cookie Policy periodically to reflect changes in
          technology or legal requirements. Changes will be posted with a revised
          "Last Updated" date.
        </p>

        <hr />
        <h2>6. CONTACT</h2>
        <p>If you have questions or concerns, contact:</p>
        <p>
          <strong>Grievance Officer:</strong> Sabina <br />
          <strong>Address:</strong> Zia Herbal Pro -- Customer Support Team <br />
          ZIA HERBAL PRO PVT LTD., ISO 9001:2015 Certified Company <br />
          No. S-9, I Floor, Thiru Vi Ka Industrial Estate, Guindy, Chennai - 600032., Tamilnadu
          <br />
          <strong>Email:</strong> Ziaherbalpro@gmail.com <br />
          <strong>Phone:</strong> 89398 43483
        </p>
        <p><strong>Last Updated:</strong> 10th July 2025</p>
      </div>
      <Footer />
    </>
  );
}
