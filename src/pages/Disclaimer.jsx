import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
export default function DisclaimerPage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Disclaimer - Zia Herbal Pro</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              font-family: 'Roboto', sans-serif;
            }
          `}
        </style>
      </Helmet>

      {/* Page Header */}
      <div className="bg-[#ebfaf3] px-[30px] py-[100px]">
        <h1 className="text-[34px] md:text-[42px] font-black text-left">
          Disclaimer
        </h1>
        <p className="text-[#676A5E] text-[14px] text-left mt-2">
          Last Updated: 10th July 2025
        </p>
      </div>

      {/* Disclaimer Content */}
      <div className="px-6 md:px-20 py-10 text-left space-y-6 text-[16px] md:text-[18px] leading-[28px] md:leading-[31.5px]">
        <p>
          The information provided on Zia Herbal Pro's website www.ziaherbalpro.com
          is for general informational and educational purposes only. All content,
          including product descriptions, blog posts, reviews, and FAQs, is
          published in good faith and intended to assist users in making informed
          decisions.
        </p>

        <h2 className="font-bold">1. NO MEDICAL ADVICE</h2>
        <p>
          Our herbal and natural skincare products are intended for{" "}
          <strong>cosmetic use only</strong>. They are not formulated to diagnose,
          treat, cure, or prevent any disease or medical condition.
        </p>
        <ul className="list-disc ml-6">
          <li>
            Always consult with a qualified healthcare provider or dermatologist
            before using any product, especially if you have a medical condition,
            allergy, or are pregnant/nursing.
          </li>
          <li>
            Perform a <strong>patch test</strong> before full application to avoid
            potential allergic reactions.
          </li>
        </ul>

        <h2 className="font-bold">2. INDIVIDUAL RESULTS MAY VARY</h2>
        <ul className="list-disc ml-6">
          <li>
            Skin types differ, and so do results. We do not guarantee specific
            results from the use of our products.
          </li>
          <li>
            Any testimonials or customer reviews presented on the website reflect
            individual experiences and may not reflect your experience.
          </li>
        </ul>

        <h2 className="font-bold">3. PRODUCT INGREDIENTS</h2>
        <p>
          We use natural, herbal, and plant-based ingredients, which may cause
          sensitivity or reactions in rare cases. It is the customer's
          responsibility to read ingredient labels carefully before use.
        </p>

        <h2 className="font-bold">4. WEBSITE CONTENT</h2>
        <ul className="list-disc ml-6">
          <li>All content is provided "as is" without warranties of any kind.</li>
          <li>
            We do not make representations or warranties regarding the accuracy,
            reliability, or completeness of any content.
          </li>
        </ul>

        <h2 className="font-bold">5. EXTERNAL LINKS</h2>
        <p>
          Our website may contain links to third-party websites. These links are for
          convenience only. We are not responsible for the content, practices, or
          policies of such external websites.
        </p>

        <h2 className="font-bold">6. LIMITATION OF LIABILITY</h2>
        <p>
          In no event shall Zia Herbal Pro or its affiliates be held liable for any
          direct, indirect, incidental, special, or consequential damages arising
          from the use of or inability to use our products or website content.
        </p>

        <h2 className="font-bold">7. ACCEPTANCE OF THIS DISCLAIMER</h2>
        <p>
          By using our website or purchasing from us, you acknowledge and agree to
          this Disclaimer. If you do not agree, please do not use our website or
          services.
        </p>
      </div>
      <Footer />
    </>
  );
}
