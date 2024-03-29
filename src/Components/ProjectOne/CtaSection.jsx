import React from "react";

function CtaSection() {
  return (
    <section id="cta" class="bg-brightRed">
      {/* <!-- Flex Container --> */}
      <div class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* <!-- Heading --> */}
        <h2 class="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        {/* <!-- Button --> */}
        <div>
          <a
            href="/"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
