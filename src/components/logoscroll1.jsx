const logos = [
  "https://www.bullworkmobility.com/press/press4.webp",
  "https://www.bullworkmobility.com/press/press3.webp",
  "https://www.bullworkmobility.com/press/press5.webp",
  "https://www.bullworkmobility.com/press/press6.webp",
  "https://www.bullworkmobility.com/press/press7.webp",
  "https://www.bullworkmobility.com/press/press9.webp",
  "https://www.bullworkmobility.com/press/press1.webp",
];

export default function LogoScroller() {
  return (
    <section className="overflow-hidden mt-3 bg-white py-6 px-4 sm:py-8 sm:px-8">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationDuration: "20s" }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`logo-${idx}`}
            className="inline-block mr-6 sm:mr-8 flex-shrink-0 h-16 sm:h-24 w-auto"
            loading="lazy"
          />
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee linear infinite;
          }

          /* Pause animation on hover for usability */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}
