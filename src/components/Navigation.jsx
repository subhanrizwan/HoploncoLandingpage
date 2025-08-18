"use client";
import Logo from '../assets/images/logo/logo.png'
import FirstAnimatedButton from './AnimatedBtn1';
import SecondAnimatedButton from './AnimatedBtn2';

export default function Navigation({ children = "Click Me" }) {
  return (
    <>
 <header className="w-full bg-black border-none">
  <div className="max-w-8xl mx-auto px-4 md:px-16 py-5 flex items-center justify-center md:justify-between">
    <a href="/">
      <img
        alt="Hoplonco Logo"
        loading="lazy"
        width={300}
        height={100}
        decoding="async"
        data-nimg={1}
        className="h-20 w-auto"
        style={{ color: "transparent" }}
        src={Logo}
      />
    </a>
    <nav className="hidden md:flex space-x-2 text-white font-medium">
      {/* <a
        className="text-white border border-primary px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition w-42 text-center"
        href=""
      >
        Talk To Our Expert
      </a> */}
      <FirstAnimatedButton />
      <SecondAnimatedButton />
      {/* <a
        className="text-black border bg-white border-white px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-black transition w-42 text-center"
        href="#"
      >
        Get a Quote
      </a> */}
    </nav>
  </div>
</header>


        </>
  );
}
