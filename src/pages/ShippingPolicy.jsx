import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
export default function ShippingPolicyPage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shipping Policy - Zia Herbal Pro</title>
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
          Shipping Policy
        </h1>
        <p className="text-[#676A5E] text-[14px] text-left mt-2">
          Last Updated: 10th July 2025
        </p>
      </div>

      <div className="px-6 md:px-20 py-10 text-left space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[31.5px]">
        <h2 className="font-bold">SHIPPING POLICY</h2>
        <p>
          At Zia Herbal Pro, we are committed to delivering your favorite herbal and
          natural beauty products to your doorstep as quickly and efficiently as
          possible. This Shipping Policy outlines all aspects of our shipping
          process including timelines, charges, methods, and exceptions.
        </p>

        <h2 className="font-bold">1. GENERAL INFORMATION</h2>
        <p>
          All orders are processed and shipped on business days (Monday to Saturday,
          excluding public holidays). Please allow 1–2 business days for your order
          to be processed and packed for dispatch.
        </p>
        <p>
          Delays may occur during peak seasons, sales, or due to external
          circumstances (weather, strikes, pandemic restrictions, etc.).
        </p>

        <h2 className="font-bold">2. DELIVERY PARTNERS</h2>
        <p>
          We partner with <strong>Shiprocket</strong> and its network of trusted
          courier services (Delhivery, Blue Dart, Ekart, etc.) for reliable delivery.
        </p>
        <p>
          Tracking details will be shared via email/SMS once shipped. You can also
          track via our website or Shiprocket portal.
        </p>

        <h2 className="font-bold">3. SHIPPING LOCATIONS</h2>
        <p>
          We currently ship across <strong>India</strong>. For remote or unserviceable
          pincodes, we’ll notify you with alternatives or process a refund.
        </p>
        <p>We do not offer international shipping at this time.</p>

        <h2 className="font-bold">4. SHIPPING CHARGES</h2>
        <ul className="list-disc ml-6">
          <li><strong>Prepaid Orders:</strong> Free shipping above ₹2000. Otherwise, a fee of ₹49–₹99 may apply.</li>
          <li><strong>Cash on Delivery (COD):</strong> Additional ₹500 fee may apply. COD availability varies.</li>
          <li>All charges are shown at checkout.</li>
        </ul>

        <h2 className="font-bold">5. ESTIMATED DELIVERY TIME</h2>
        <p><strong>Location Type – Estimated Time</strong></p>
        <ul className="list-disc ml-6">
          <li>Metro Cities: 2–4 business days</li>
          <li>Tier 2 & 3 Cities: 3–7 business days</li>
          <li>Remote Areas: 5–10 business days</li>
        </ul>
        <p>Timelines are estimates and may vary.</p>

        <h2 className="font-bold">6. ORDER TRACKING</h2>
        <p>
          You’ll receive a tracking link via email/SMS once dispatched. You can also
          track your order in the “My Orders” section of your account.
        </p>

        <h2 className="font-bold">7. DELAYED OR FAILED DELIVERIES</h2>
        <ul className="list-disc ml-6">
          <li>You'll be notified if delivery is delayed.</li>
          <li>After multiple failed attempts, the parcel may be returned.</li>
          <li>Returned parcels may lead to a refund minus shipping/COD charges.</li>
        </ul>

        <h2 className="font-bold">8. ADDRESS ACCURACY</h2>
        <p>
          Ensure your shipping address is correct. We are not liable for:
        </p>
        <ul className="list-disc ml-6">
          <li>Incorrect/incomplete address</li>
          <li>Recipient unavailability</li>
          <li>Refused deliveries</li>
        </ul>

        <h2 className="font-bold">9. DAMAGED PACKAGES</h2>
        <p>
          Refuse delivery if the package is visibly damaged. If damage is noticed
          after opening, contact us within <strong>24 hours</strong> with photos.
        </p>

        <h2 className="font-bold">10. LOST OR MISSING PACKAGES</h2>
        <ul className="list-disc ml-6">
          <li>We’ll work with the courier to resolve issues.</li>
          <li>If unresolved within <strong>7 business days</strong>, we’ll refund or reship your order.</li>
        </ul>

        <h2 className="font-bold">11. MULTIPLE SHIPMENTS</h2>
        <p>
          You may receive multiple packages due to product availability. Separate
          tracking links will be shared.
        </p>

        <h2 className="font-bold">12. SHIPPING DURING PROMOTIONS AND SALES</h2>
        <p>
          Shipping times may be longer during promotions/sales. We appreciate your
          patience.
        </p>

        <h2 className="font-bold">13. INTERNATIONAL SHIPPING</h2>
        <p>
          We currently do not ship internationally. We aim to expand soon.
        </p>

        <h2 className="font-bold">14. CONTACT</h2>
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
