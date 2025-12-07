import React, { useState } from 'react';
import { ChevronDown, Github } from 'lucide-react';

const OrganizationsSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is the ScaffoldingGen CLI Tool?",
      answer: "ScaffoldGen CLI is a powerful command-line interface tool designed to streamline your workflow and boost your productivity. It helps developers quickly scaffold projects with best practices."
    },
    {
      question: "How do I install the ScaffoldGen CLI Tool?",
      answer: "You can install ScaffoldGen CLI using npm, yarn, or by downloading the binary for your operating system. Run 'npm install -g scaffoldgen' or download from our releases page."
    },
    {
      question: "What features does the ScaffoldGen CLI Tool have?",
      answer: "ScaffoldGen includes multi-template support, interactive configuration, component generation, and an extensible post-processing pipeline for complete project customization."
    },
    {
      question: "How do I contribute to the Scaffolding CLI tool?",
      answer: "We welcome contributions! Visit our GitHub repository, fork the project, make your changes, and submit a pull request. Check our contribution guidelines for more details."
    },
    {
      question: "Is the ScaffoldGen CLI tool free to use?",
      answer: "Yes, ScaffoldGen CLI is completely free and open-source. You can use it for personal and commercial projects without any restrictions."
    },
    {
      question: "Where can I get support?",
      answer: "You can get support through our Discord community, GitHub issues, or by checking our comprehensive documentation. Our community is always ready to help!"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className='flex justify-center text-3xl text-[#D6D2CD] font-bold mb-4'>
          Organizations
        </h2>
        <div className="text-center mb-2">
          <div className="inline-block bg-gradient-to-r from-black to-[#371D0F] rounded-2xl p-8 border border-gray-700 mb-8">
            <Github className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center">Resourcio Community</h3>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-6">FAQ</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-black to-[#371D0F] rounded-xl border border-gray-700 overflow-hidden hover:border-[#FA6C25] transition-all min-h-[60px]"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-black/20 transition-colors"
              >
                <span className="font-semibold text-sm">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 ml-2 transition-transform ${openFaq === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-300 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;

