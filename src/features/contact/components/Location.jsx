import React from "react";

const Location = () => {
  return (
    <section>
      <div className="container">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 ring-4 ring-primary/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1392.9469804005987!2d71.644813!3d34.02068800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917bedd851ed5%3A0xe63b23ab4705d1d6!2sIT%20Artificer!5e1!3m2!1sen!2sus!4v1770478264477!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-112.5 bg-secondary/5"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
