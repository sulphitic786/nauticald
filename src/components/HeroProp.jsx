import React from "react";

function HeroProp({
  heading,
  highlightText,
  description,
  image,
  secondHeading,
  secondHighlightText,
  secondDescription,
  cards,
}) {
  return (
    <section className="xl:py-20 lg:py-[100px] md:py-14 sm:py-14 !py-[80px] px-[5%]">
      <div className="flex items-center text-center justify-center flex-col">
        <div className="md:w-[85%] w-full">
          <h1 className="text-black text-center 2xl:text-[60px] xl:text-[40px] lg:text-4xl md:text-3xl text-[22px] 2xl:!leading-[112px] xl:!leading-[70px] md:!leading-[44px] !leading-8">
            {heading}
            <span className="text-main-color">&nbsp;{highlightText}</span>
          </h1>
          <p className="2xl:text-lg md:text-base text-sm lg:pt-5 pt-3 text-text_color 2xl:leading-[44px] lg:leading-7 leading-6 text-center">
            {description}
          </p>
        </div>
        <img
          src={image}
          alt=""
          className="mt-10 md:rounded-[30px] rounded-lg"
        />

        <div className="lg:pt-[100px] pt-14 flex items-start lg:gap-7 gap-3 lg:text-start text-center lg:flex-row flex-col">
          <h1 className="text-heading 2xl:text-[60px] xl:text-[40px] lg:text-4xl md:text-3xl text-[22px] 2xl:!leading-[90px] xl:!leading-[60px] md:!leading-[44px] !leading-8 lg:w-[40%] w-full">
            {secondHeading}
            <span className="text-primary">{secondHighlightText}</span>
          </h1>
          <p className="2xl:text-xl md:text-base text-sm text-text_color 2xl:leading-[44px] lg:leading-7 leading-6 lg:w-[60%] w-full">
            {secondDescription}
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10 cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#b48104] text-white border rounded-3xl p-5 aos-init aos-animate"
            data-aos-easing="linear"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-duration="500"
          >
            <div className="flex justify-start">
              <img src={card.icon} alt="" />
            </div>
            <h2 className="xl:text-[36px] text-xl font-bold pt-4 xl:pt-6 text-black">
              {card.title}
            </h2>
            <p className="xl:text-[20px] text-base xl:pt-4">
              {card.description}
            </p>
            <div className="flex xl:gap-4 lg:gap-2 gap-2 pb-2">
              <h2 className="xl:text-[36px] text-2xl pt-2">{card.price}</h2>
              <p className="xl:text-[20px] text-lg">{card.duration}</p>
            </div>
            <hr />
            <div className="space-y-2">
              {card.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex gap-3 mt-4 items-center"
                >
                  <img src={card.checkIcon} alt="" />
                  <h3 className="xl:text-[20px] text-sm">{feature}</h3>
                </div>
              ))}
            </div>
            <div className="pt-16 text-center">
              <a href="#contactus">
                <button className="bg-black rounded-lg py-2 px-10 uppercase text-white text-[17px]">
                  {card.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroProp;
