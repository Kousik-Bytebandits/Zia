import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
export default function ReturnRefundPolicyPage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Return & Refund Policy - Zia Herbal Pro</title>
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
          Return & Refund Policy
        </h1>
        <p className="text-[#676A5E] text-[14px] text-left mt-2">
          Last Updated: 10th July 2025
        </p>
      </div>

      <div className="px-6 md:px-20 py-10 text-left space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[31.5px]">
        <h2 className="font-bold">RETURN & REFUND POLICY</h2>
        <p>
          At Zia Herbal Pro, your satisfaction is our top priority. While we strive to
          deliver high-quality herbal and natural products, we understand that
          issues may arise. This Return & Refund Policy outlines the conditions
          under which returns, replacements, and refunds may be requested.
        </p>

        <h2 className="font-bold">1. ELIGIBILITY FOR RETURNS</h2>
        <ul className="list-disc ml-6">
          <li>You received a <strong>damaged</strong>, <strong>defective</strong>, or <strong>wrong</strong> product.</li>
          <li>You notify us within <strong>7 days</strong> of receiving your order.</li>
          <li>The product is unused, unopened, and in its original packaging.</li>
          <li>You provide clear photographic evidence to support your claim.</li>
        </ul>
        <p>
          <strong>We do not accept returns</strong> for:
        </p>
        <ul className="list-disc ml-6">
          <li>Products opened or used.</li>
          <li>Products without original packaging.</li>
          <li>Products purchased during sales or promotions (unless damaged or incorrect).</li>
        </ul>

        <h2 className="font-bold">2. RETURN REQUEST PROCESS</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Email us at <strong>Ziaherbalpro@gmail.com</strong> or call <strong>+91 8939843483</strong> within 7 days of delivery.</li>
          <li>Mention your <strong>Order ID</strong>, reason for return, and include <strong>photographs</strong>.</li>
          <li>We’ll verify and approve or reject based on the evidence.</li>
          <li>If approved, we will provide instructions or arrange pickup.</li>
        </ol>

        <h2 className="font-bold">3. RETURN SHIPPING</h2>
        <ul className="list-disc ml-6">
          <li>We cover shipping for damaged or incorrect products.</li>
          <li>If it’s not our fault, customer bears return cost.</li>
          <li>Secure packaging is required to prevent damage.</li>
        </ul>

        <h2 className="font-bold">4. REFUNDS</h2>
        <ul className="list-disc ml-6">
          <li><strong>Approved refunds</strong> will be processed within <strong>7–10 business days</strong> to the original method.</li>
          <li>For COD, bank details may be requested.</li>
          <li><strong>Shipping and COD charges</strong> are non-refundable unless it’s our fault.</li>
        </ul>

        <h2 className="font-bold">5. EXCHANGES</h2>
        <p>We do not offer direct exchanges. If you received a wrong/damaged item, we will either:</p>
        <ul className="list-disc ml-6">
          <li>Issue a replacement (subject to availability), or</li>
          <li>Initiate a full refund.</li>
        </ul>

        <h2 className="font-bold">6. NON-RETURNABLE ITEMS</h2>
        <ul className="list-disc ml-6">
          <li>Opened/used cosmetics or skincare products</li>
          <li>Items without original packaging/seal</li>
          <li>Free gifts/promotional items</li>
          <li>Customized orders (if any)</li>
        </ul>

        <h2 className="font-bold">7. CANCELLATIONS</h2>
        <ul className="list-disc ml-6">
          <li>Orders can only be canceled <strong>before dispatch</strong>.</li>
          <li>Contact us immediately at <strong>Ziaherbalpro@gmail.com</strong>.</li>
          <li>Prepaid orders will be refunded within 7–10 business days after confirmation.</li>
        </ul>

        <h2 className="font-bold">8. REFUND STATUS INQUIRY</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Check your bank account or card statement.</li>
          <li>Contact your bank/issuer for processing time.</li>
          <li>Still not received? Email <strong>Ziaherbalpro@gmail.com</strong>.</li>
        </ol>

        <h2 className="font-bold">9. DAMAGED / MISSING ITEMS ON DELIVERY</h2>
        <ul className="list-disc ml-6">
          <li>Report within <strong>24 hours</strong> of delivery.</li>
          <li>Provide clear photos of packaging, label, and product.</li>
          <li>We’ll investigate and provide replacement/refund/credit as needed.</li>
        </ul>

        <h2 className="font-bold">10. CONTACT</h2>
        <p>If you have questions or concerns, contact:</p>
        <p>
          <strong>Grievance Officer:</strong> Sabina <br />
          <strong>Address:</strong> Zia Herbal Pro — Customer Support Team<br />
          ZIA HERBAL PRO PVT LTD., ISO 9001:2015 Certified Company<br />
          S-9, I Floor, Thiru Vi Ka Industrial Estate, Guindy, Chennai - 600 032, Tamil Nadu<br />
          <strong>Email:</strong> Ziaherbalpro@gmail.com<br />
          <strong>Phone:</strong> 89398 43483
        </p>

        <p><strong>Last Updated: 10th July 2025</strong></p>
      </div>
      <Footer />  
    </>
  );
}
