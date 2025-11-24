import Marquee from "react-fast-marquee";

export function MarqueeComponent() {
  const icons = [
    "/svg/marquee/css-4.svg",
    "/svg/marquee/git-icon.svg",
    "/svg/marquee/github-icon-1.svg",
    "/svg/marquee/javascript-1.svg",
    "/svg/marquee/sass-1.svg",
    "/svg/marquee/tailwind-css-2.svg",
    "/svg/marquee/typescript.svg",
    "/svg/marquee/vitejs.svg",
    "/svg/marquee/visual-studio-code-1.svg",
  ];

  return (
    <div className="w-full h-full">
      <Marquee autoFill gradient speed={50} gradientWidth={0} className="h-full z-10">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} className="w-[5rem] mx-14" />
        ))}
      </Marquee>
    </div>
  );
}