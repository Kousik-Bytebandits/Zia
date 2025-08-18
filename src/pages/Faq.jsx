import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const faqs = [
  {
    question: "Adipiscing vitae proin sagittis nisi rhoncus mattis rhoncus?",
    answer: "Gravida dictum fusce ut placerat orci. Ultrices neque sodales ut etiam sit amet. Pharetra elementum integer enim neque. Faucibus scelerisque eleifend donec pretium vulputate. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim."
  },
  {
    question: "Consequat semper viverra nam libero justo laoreet sit?",
    answer: "Gravida dictum fusce ut placerat orci. Ultrices neque sodales ut etiam sit amet. Pharetra elementum integer enim neque. Faucibus scelerisque eleifend donec pretium vulputate. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim."
  },
  {
    question: "Tempor orci dapibus ultrices in. Elit pellentesque?",
    answer: "Gravida dictum fusce ut placerat orci. Ultrices neque sodales ut etiam sit amet. Pharetra elementum integer enim neque. Faucibus scelerisque eleifend donec pretium vulputate. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim."
  },
  {
    question: "Eriim praesent elementum facilisis leo ac Aenean quisirnod?",
    answer: "Gravida dictum fusce ut placerat orci. Ultrices neque sodales ut etiam sit amet. Pharetra elementum integer enim neque. Faucibus scelerisque eleifend donec pretium vulputate. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim."
  },
  {
    question: "Eu feugiat pretium nibh ipsum consequat nisl?",
    answer: "Gravida dictum fusce ut placerat orci. Ultrices neque sodales ut etiam sit amet. Pharetra elementum integer enim neque. Faucibus scelerisque eleifend donec pretium vulputate. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim."
  },
  {
    question: "Aenean pharetra magna ac placerat vestibulum lectus?",
    answer: "Gravida dictum fusce ut placerat orci. Ultrices neque sodales ut etiam sit amet. Pharetra elementum integer enim neque. Faucibus scelerisque eleifend donec pretium vulputate. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim."
  },
  {
    question: "Eget aliquet nibh praesent tristique magna sit?",
    answer: "Gravida dictum fusce ut placerat orci. Ultrices neque sodales ut etiam sit amet. Pharetra elementum integer enim neque. Faucibus scelerisque eleifend donec pretium vulputate. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim."
  },
];


export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="font-sans pt-7 font-tenor">
      {/* Header */}
      <div className="w-full flex ">
        <div className="w-[30%] bg-[#F2ECEA] px-6 h-[250px] flex items-center text-[16px] font-archivo text-[#676A5E] gap-2">
          <span className=' ml-28'>Home</span> | <span>FAQ</span>
        </div>
        <div className="w-[70%] bg-[#334127] px-6 h-[250px] flex items-center justify-start text-white">
          <h1 className="ml-40 text-[40px] tracking-widest">FAQ</h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-start">
        <img
          src="images/faq.webp"
          alt="FAQ Illustration"
          className=" w-full mx-auto"
        />

        <div>
          <h2 className="text-[32px] text-[#676A5E]  mb-6">FAQ'S</h2>
          <div className="border border-[#676A5E] divide-y divide-[#676A5E]">
            {faqs.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-[20px] font-archivo text-[#B2BA98] hover:bg-gray-100"
                >
                  {item.question}
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeIndex === index && item.answer && (
                  <div className="px-4 pb-4 text-[20px] font-archivo text-[#676A5E]">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Questions */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center pb-16">
        <div>
          <h2 className="text-[32px] text-[#676A5E] mb-6 tracking-widest">
            CUSTOMER QUESTIONS
          </h2>
          <div className="border border-[#676A5E]  divide-y divide-[#676A5E]">
            {faqs.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-[20px] font-archivo text-[#B2BA98] hover:bg-gray-100"
                >
                  {item.question}
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeIndex === index && item.answer && (
                  <div className="px-4 pb-4 text-[20px] text-[#676A5E] font-archivo">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <img
          src="images/customer.webp"
          alt="Customer Meeting"
          className="rounded-lg shadow-md w-full"
        />
      </div>
    </div>
  );
}
