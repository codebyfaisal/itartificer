import React from "react";

const SubscriptionCta = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-end">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-1 bg-[url(/images/cta/cta.webp)] bg-position-[30%_top] sm:bg-position-[65%_top] md:bg-position-[82%_top] lg:bg-left bg-size-[90%] sm:bg-size-[80%] md:bg-size-[60%] lg:bg-auto bg-no-repeat" />

      {/* Angled Overlay Layer */}
      <div className="absolute bottom-0 right-0 w-full h-4/5 xs:h-2/3 lg:h-full lg:w-[65%] bg-background bg-linear-to-br from-primary/70 via-primary/50 to-secondary/30 z-10 [clip-path:polygon(0_0%,100%_0%,100%_100%,0%_100%) md: [clip-path:polygon(93%_12%,100%_0%,100%_100%,0_100%,0_0)] lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]" />

      {/* Content Layer */}
      <div className="container relative z-20 h-full! flex flex-col justify-center items-center lg:items-end py-15">
        <div className="h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-primary-foreground! text-shadow-lg">
            Let's Build Something Great Together
          </h2>

          <div className="xs:bg-secondary p-1 rounded-full grid xs:flex w-full xs:max-w-md xl:max-w-xl mb-6 xs:shadow-lg gap-2">
            <input
              type="email"
              placeholder="Enter your business email here"
              className="flex-1 xs:bg-transparent border-none outline-none px-6 text-primary-foreground placeholder:text-primary-foreground/50 p-2 xs:p-3 lg:py-4 bg-secondary rounded-full"
            />
            <button className="bg-background text-secondary font-semibold px-6 rounded-full hover:bg-background/80 transition-colors cursor-pointer whitespace-nowrap text-shadow-lg w-max mx-auto">
              Sign Up Free
            </button>
          </div>

          <p className="text-primary-foreground/90 font-medium text-shadow-lg max-w-sm">
            Kickstart your journey with IT Artificer's full-service software
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCta;
