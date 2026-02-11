import { Button } from "@/shared/ui";
import React from "react";

const ContactPromo = () => {
  return (
    <section>
      <div className="min-h-screen relative flex items-center justify-center pt-6 pb-14 lg:p-0">
        <div
          className="bg-primary h-full absolute top-0 left-0 w-full -z-10"
          style={{
            backgroundImage: "url(/images/home/contact-bg.webp)",
            backgroundSize: "50%",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container grid lg:grid-cols-2 items-center justify-center gap-x-12">
          <div className="relative w-full max-w-137 aspect-square mx-auto flex items-center justify-center">
            {/* Top Left Image */}
            <div className="absolute top-[10%] left-0 w-[60%] z-10">
              <div className="absolute top-[8%] -right-[6%] size-full bg-secondary -z-1" />
              <img
                src="/images/home/contact-2.webp"
                alt="Team working"
                className="w-full h-auto shadow-lg z-10 object-cover rounded-md"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-[10%] right-0 w-[60%] z-20">
              <img
                src="/images/home/contact-1.webp"
                alt="Team high five"
                className="w-full h-auto shadow-lg object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start h-full gap-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold max-w-lg leading-snug text-primary-foreground!">
              Driving Your's Business Growth through Intelligent Technology
            </h2>
            <p className="text-md leading-loose text-primary-foreground! max-w-xl">
              At IT Artificer, we blend innovation with expertise to deliver
              intelligent technology solutions that drive real business growth.
              From smart automation and AI-powered insights to scalable cloud
              infrastructure and custom software, we help businesses unlock
              efficiency, improve decision-making, and stay competitive in a
              rapidly evolving digital world.
            </p>
            <Button
              variant="white"
              className="w-max uppercase font-semibold [word-spacing:5px]"
            >
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPromo;
