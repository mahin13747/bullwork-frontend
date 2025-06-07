// components/FAQSection.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection({ limit }) {
  const faqs = [
    {
      question: "Does Electric Tractor have same pull and torque as diesel Tractor?",
      answer: "The Electric Tractor has more torque, high efficiency and best-in-class drawbar pull compared to conventional diesel Tractor.",
    },
    {
      question: "What is the expected battery life of Bullwork vehicles?",
      answer: "Bullwork vehicles run on high-quality lithium-ion batteries, offering a long life of up to 7 years. After that, the battery can still be reused for power storage (e.g., home UPS).",
    },
    {
      question: "Can standard implements be attached with Vamana, GLX, and the Electric Tractor models?",
      answer: "Yes. The Electric Tractor supports Cat 1 implements, Vamana supports Cat 1N implements, and GLX has quick-release attachments for Bullwork-specific implements.",
    },
    {
      question: "How do you charge Bullwork vehicles?",
      answer: "They can be charged via standard 16A or 32A sockets found in all homes. Charging from 0 to 100% takes 5–7 hours. DC fast charging will be supported in the future.",
    },
    {
      question: "How long does Bullwork vehicles run on one single charge?",
      answer: "Our Electric Tractor runs continuously for 5 to 6 hours. A built-in hybrid charging solution can extend usage by another 4 hours.",
    },
    {
      question: "How do I get my Bullwork vehicles serviced?",
      answer: "Bullwork is building a service and dealership network across Bharath. Customers can contact this network for assistance.",
    },
    {
      question: "What is Hybrid charging? Does the Bullwork tractor offer hybrid charging facilities?",
      answer: "Hybrid charging allows switching between electric and generator power. Most Bullwork vehicles support this to extend range and reduce anxiety.",
    },
    {
      question: "What is the standard warranty for Bullwork products?",
      answer: "All vehicles include a 1-year standard warranty, and the battery has a 5-year life.",
    },
    {
      question: "How often does a Bullwork vehicle require servicing, and what service is most commonly needed?",
      answer: "Minimal maintenance is required—just greasing and oiling every 3 months. The Bullwork Bhai app provides real-time alerts.",
    },
    {
      question: "Do Bullwork vehicles offer adequate protection against water and dust?",
      answer: "Yes, they are IP67-certified for excellent water and dust protection.",
    },
    {
      question: "Does the Bullwork autonomous vehicle support precision farming?",
      answer: "Yes, it supports precision farming by analyzing crop health and targeting only necessary areas for spraying.",
    },
    {
      question: "Do Bullwork autonomous vehicles have vision-based accuracy? If so, what is the level of accuracy?",
      answer: "Yes, they feature vision-based systems with up to 2 cm level accuracy.",
    },
    {
      question: "Is there a difference in speed between manually operated Bullwork vehicles and autonomous vehicles?",
      answer: "Yes. Autonomous vehicles have a top safe speed of 5 km/hr.",
    },
    {
      question: "Could we acquire implements from Bullwork to be attached to our vehicles?",
      answer: "Yes, Bullwork will soon offer its own range of implements.",
    },
    {
      question: "Can we?",
      answer: "Yes, we can.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const visibleFaqs = limit ? faqs.slice(0, limit) : faqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center uppercase tracking-widest mb-10 text-gray-800">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center cursor-pointer gap-3">
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-700">
                {faq.question}
              </h3>
              <span className="text-gray-500">
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
