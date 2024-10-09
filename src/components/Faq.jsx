import React, { useState } from 'react';

export default function Faq() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            title: "What is your policy on distribution?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
        {
            title: "How can I contribute to Program?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
        {
            title: "What other recipes do you have?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
        {
            title: "What is your policy on distribution?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
    ];

    return (
        <section className="w-full py-8 md:py-16">
            <div className="w-full mx-auto px-5 md:px-10">
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="mb-6 md:mb-12 lg:mb-16">
                            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center">
                                General FAQs
                            </h2>
                            <p className="mt-4 text-gray-500 text-sm md:text-base text-center">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Container */}
                    <div className="w-full md:w-3/4 lg:w-1/2 m-auto p-6 md:p-8 bg-yellow-400 rounded-xl">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-6 w-full bg-[rgba(0,0,0,0.4)] text-white p-2 md:p-4 rounded-md">
                                <div className="flex cursor-pointer items-start justify-between" onClick={() => toggleFAQ(index)}>
                                    <p className="text-lg font-semibold">{faq.title}</p>
                                    <div className="relative ml-4 md:ml-8 mt-1 flex h-5 w-5 items-center justify-center">
                                        <div className={`absolute h-5 w-0.5 bg-white transition-transform duration-300 ${openFAQ === index ? "rotate-90" : ""}`}></div>
                                        <div className="h-0.5 w-5 bg-white"></div>
                                    </div>
                                </div>
                                {openFAQ === index && (
                                    <div className="w-full mt-4">
                                        <p className="text-sm md:text-base">{faq.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
