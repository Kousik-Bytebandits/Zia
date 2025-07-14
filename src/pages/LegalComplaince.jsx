import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
export default function LegalCompliancePage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Legal Compliance - Zia Herbal Pro</title>
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

      {/* Header */}
      <div className="bg-[#ebfaf3] px-[30px] py-[100px]">
        <h1 className="text-[34px] md:text-[42px] font-black text-left">
          Legal Compliance
        </h1>
        <p className="text-[#676A5E] text-[14px] text-left mt-2">
          Last Updated: 10th July 2025
        </p>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-20 py-10 text-left space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[31.5px]">
        <h1>LEGAL COMPLIANCE</h1>
        <p>
          At Zia Herbal Pro, we are committed to operating in full compliance with
          applicable laws, regulations, and standards governing the manufacture,
          marketing, and sale of cosmetic products in India.
        </p>

        <hr />
        <h2>1. BUSINESS REGISTRATION</h2>
        <p>
          Zia Herbal Pro is a legally registered entity operating under the name
          <strong> Zia Herbal Pro</strong>, with GST and applicable business licenses
          issued by local and national authorities.
        </p>
        <ul className="list-disc ml-6">
          <li><strong>GSTIN:</strong> 33AABCZ9392A1ZA</li>
          <li><strong>Company PAN:</strong> AABCZ9392A</li>
          <li><strong>Business Registration No:</strong> U52312TN2022PTC151229</li>
          <li><strong>Registered Address:</strong> S-9, I Floor, Thiru Vi Ka Industrial Estate, Guindy, Chennai - 600032, Tamil Nadu</li>
        </ul>

        <hr />
        <h2>2. COSMETIC COMPLIANCE (India)</h2>
        <p>
          We comply with the <strong>Drugs and Cosmetics Act, 1940</strong> and <strong>Rules, 1945</strong> as prescribed by the <strong>Central Drugs Standard Control Organization (CDSCO)</strong> and the <strong>Ministry of AYUSH</strong> (where applicable).
        </p>
        <h3>2.1 Labeling & Packaging</h3>
        <p>
          Our labels conform to regulatory requirements including:
        </p>
        <ul className="list-disc ml-6">
          <li>Ingredient disclosure</li>
          <li>Net quantity</li>
          <li>Batch number</li>
          <li>Manufacturing and expiry dates</li>
          <li>Usage instructions and precautions</li>
        </ul>

        <hr />
        <h2>3. ENVIRONMENTAL & SAFETY STANDARDS</h2>
        <ul className="list-disc ml-6">
          <li>No animal testing</li>
          <li>Recyclable packaging where possible</li>
          <li>No harmful chemicals like parabens, sulfates, or synthetic dyes</li>
        </ul>

        <hr />
        <h2>4. DATA PROTECTION & PRIVACY</h2>
        <p>
          We comply with data protection laws, including:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Information Technology Act, 2000</strong></li>
          <li><strong>Personal Data Protection Bill (India)</strong> <em>(as applicable)</em></li>
        </ul>
        <p>
          Your data is handled as per our Privacy Policy. We do not sell or misuse your information.
        </p>

        <hr />
        <h2>5. CONSUMER PROTECTION</h2>
        <p>
          We uphold your rights under the <strong>Consumer Protection Act, 2019 (India)</strong>. This includes:
        </p>
        <ul className="list-disc ml-6">
          <li>Clear return/refund and complaint policies</li>
          <li>Transparent communication on product use, safety, and limitations</li>
        </ul>

        <p>
          For grievances or legal inquiries, you may contact:
        </p>
        <p>
          <strong>Grievance Officer:</strong> Sabina <br />
          <strong>Address:</strong> Zia Herbal Pro -- Customer Support Team <br />
          ZIA HERBAL PRO PVT LTD., ISO 9001:2015 Certified Company <br />
          S-9, I Floor, Thiru Vi Ka Industrial Estate, Guindy, Chennai - 600032, Tamil Nadu <br />
          <strong>Email:</strong> Ziaherbalpro@gmail.com <br />
          <strong>Phone:</strong> 89398 43483
        </p>

        <hr />
        <h2>6. INTELLECTUAL PROPERTY</h2>
        <p>
          All product formulations, brand names, trademarks, and website content are protected under:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Copyright Act, 1957</strong></li>
          <li><strong>Trade Marks Act, 1999</strong></li>
        </ul>
        <p>Unauthorized use will lead to legal action.</p>

        <hr />
        <p><strong>Last Updated: 10th July 2025</strong></p>
      </div>
      <Footer />
    </>
  );
}
