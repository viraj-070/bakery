import React from "react";

const Faq = () => {
  const fawquestions = [
    {
      question: "Do you offer gluten-free options?",
      answer:
        "Yes, we provide a diverse selection of gluten-free baked goods, including cakes, cookies, and bread. Our gluten-free options are meticulously crafted to meet our stringent standards of taste and quality. Each item is made with care, using high-quality ingredients, ensuring a delightful experience for those with gluten sensitivities or dietary preferences.",
    },
    {
      question: "Do you offer vegan options?",
      answer:
        "Yes, we offer a variety of vegan baked goods, including cakes, cookies, and bread. Our vegan options are made with plant-based ingredients and are crafted to deliver the same delicious taste and quality as our traditional offerings. We take pride in providing tasty and satisfying choices for our vegan customers.",
    },
    {
      question: "Do you offer custom cakes for special occasions?",
      answer:
        "Yes, we specialize in creating custom cakes for special occasions such as birthdays, weddings, anniversaries, and more. Our talented bakers work closely with you to design a cake that perfectly matches your vision and theme. Whether you want a simple and elegant design or a more elaborate and creative one, we can bring your ideas to life with our expertise and attention to detail.",
    },
  ];
  return (
    <div className="w-full h-fit px-4 md:px-0 py-9 max-w-7xl mx-auto ">
      <h1 className="text-accent text-5xl font-extrabold text-accent border-b-4 border-accent text-center mt-7 md:mt-4 w-fit mx-auto pb-">
        Faq's
      </h1>

      <div className="w-full md:w-[70%] flex flex-col gap-4 mt-12 md:mt-16 mx-auto">
        {fawquestions.map((faq, index) => (
          <details key={index} className="bg-zinc-900 rounded-[40px]">
            <summary className="bg-primary p-4 rounded-full text-accent text-xl font-semibold">
              {faq.question}
            </summary>
            <p className="mt-2 px-4 pb-4 bg-zinc-900 p-2 rounded-[40px] text-white">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
