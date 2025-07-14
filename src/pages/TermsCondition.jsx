import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
export default function TermsAndConditionsPage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Terms and Conditions - Zia Herbal Pro</title>
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
          Terms and Conditions
        </h1>
        <p className="text-[#676A5E] text-[14px] text-left mt-2">
          Last Updated: 10th July 2025
        </p>
      </div>

      <div className="px-6 md:px-20 py-10 text-left space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[31.5px]">
        <p><strong>TERMS AND CONDITIONS</strong></p>
        <p>
          Welcome to Zia Herbal Pro Pvt Ltd -- your trusted destination for natural and herbal cosmetic products. Please read these Terms and Conditions carefully before using our website or placing an order.
        </p>
        <p>
          By accessing or using our website, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any referenced policies.
        </p>

        <hr />
        <h2 className="font-bold">1. DEFINITIONS</h2>
        <ul className="list-disc ml-6">
          <li>"Company", "we", "us", refers to Zia Herbal Pro Pvt Ltd</li>
          <li>"Website" refers to www.ziaherbalpro.com</li>
          <li>"User", "you" refers to anyone accessing or using the website</li>
          <li>"Products" refer to the herbal cosmetics available for sale</li>
        </ul>

        <hr />
        <h2 className="font-bold">2. ELIGIBILITY</h2>
        <p>
          You must be at least 18 years old or using the website under supervision of a parent/guardian. By agreeing, you confirm this eligibility.
        </p>

        <hr />
        <h2 className="font-bold">3. ORDERING AND PAYMENT</h2>
        <p><strong>3.1 Product Availability:</strong> Products are subject to availability and may be discontinued without notice.</p>
        <p><strong>3.2 Order Confirmation:</strong> An order acknowledgment does not mean confirmation. We reserve the right to reject orders.</p>
        <p><strong>3.3 Payment Processing:</strong> Payments are securely processed via Razorpay. You authorize us to charge the specified amount.</p>
        <p><strong>3.4 Pricing:</strong> All prices are in INR and inclusive of GST unless otherwise noted. Prices may change anytime.</p>

        <hr />
        <h2 className="font-bold">4. SHIPPING & DELIVERY</h2>
        <p><strong>4.1 Delivery Partners:</strong> We use Shiprocket and affiliates. Timelines vary by location.</p>
        <p><strong>4.2 Shipping Charges:</strong> Displayed at checkout.</p>
        <p><strong>4.3 Order Tracking:</strong> Tracking info will be emailed/SMSed. Also accessible on our site.</p>
        <p><strong>4.4 Delays:</strong> We are not liable for delivery delays due to third parties or uncontrollable circumstances.</p>

        <hr />
        <h2 className="font-bold">5. RETURNS & REFUNDS</h2>
        <p><strong>5.1 Return Policy:</strong> Acceptable only for damaged/defective/incorrect items, within 7 days of delivery.</p>
        <p><strong>5.2 Refunds:</strong> Processed within 7–10 business days after approval.</p>
        <p><strong>5.3 Non-returnable:</strong> Opened/used items cannot be returned unless defective.</p>
        <p><strong>5.4 Return Shipping:</strong> Customer bears the cost unless it’s our error.</p>

        <hr />
        <h2 className="font-bold">6. PRODUCT INFORMATION AND USAGE</h2>
        <p><strong>6.1 Herbal Disclaimer:</strong> Products are natural. Perform a patch test. Results may vary.</p>
        <p><strong>6.2 Medical Disclaimer:</strong> Our products do not diagnose/treat/cure diseases. External use only.</p>
        <p><strong>6.3 Allergies:</strong> Check ingredients. We are not liable for allergic reactions.</p>

        <hr />
        <h2 className="font-bold">7. INTELLECTUAL PROPERTY</h2>
        <p>
          All website content—including text, logos, images, product formulations—is owned by Zia Herbal Pro and protected under copyright laws.
        </p>

        <hr />
        <h2 className="font-bold">8. USER ACCOUNTS</h2>
        <p><strong>8.1 Account Creation:</strong> You’re responsible for keeping login credentials confidential.</p>
        <p><strong>8.2 Termination:</strong> We can terminate accounts at our discretion if terms are violated.</p>

        <hr />
        <h2 className="font-bold">9. PROMOTIONS & COUPONS</h2>
        <p>
          Coupons and discounts are subject to change or discontinuation. Misuse may lead to cancellation or suspension.
        </p>

        <hr />
        <h2 className="font-bold">10. THIRD PARTY LINKS</h2>
        <p>
          Our site may link to third-party sites. We’re not responsible for their practices or content.
        </p>

        <hr />
        <h2 className="font-bold">11. LIMITATION OF LIABILITY</h2>
        <ul className="list-disc ml-6">
          <li>Indirect, incidental, or consequential damages</li>
          <li>Loss of use, data, or profits</li>
          <li>Unauthorized access to secure servers</li>
        </ul>
        <p>
          Our total liability will not exceed the amount you paid for the product.
        </p>

        <hr />
        <h2 className="font-bold">12. INDEMNIFICATION</h2>
        <p>
          You agree to defend and hold harmless Zia Herbal Pro from claims, damages, and losses arising from your use of the site or violation of terms.
        </p>

        <hr />
        <h2 className="font-bold">13. CHANGES TO TERMS</h2>
        <p>
          We may update these Terms and Conditions at any time. Continued use implies acceptance.
        </p>

        <hr />
        <h2 className="font-bold">14. GOVERNING LAW AND JURISDICTION</h2>
        <p>
          Governed by laws of Tamil Nadu. Disputes will be handled in Chennai courts.
        </p>

        <hr />
        <h2 className="font-bold">15. CONTACT US</h2>
        <p><strong>Grievance Officer:</strong> Sabina</p>
        <p><strong>Address:</strong> Zia Herbal Pro -- Customer Support Team<br />
          ZIA HERBAL PRO PVT LTD., ISO 9001:2015 Certified Company<br />
          S-9, I Floor, Thiru Vi Ka Industrial Estate, Guindy, Chennai - 600 032, Tamil Nadu
        </p>
        <p><strong>Email:</strong> Ziaherbalpro@gmail.com</p>
        <p><strong>Phone:</strong> 89398 43483</p>
        <p><strong>Last Updated: 10th July 2025</strong></p>
      </div>
      <Footer />
    </>
  );
}
