import Phone from "../assets/images/fiedicons/phone.png";
import WP from "../assets/images/fiedicons/wp.png";
import { MdSupportAgent } from "react-icons/md";

function FixedSection() {
  return (
    <div className="fixed z-[9999] right-0 md:right-0 top-[26vh] flex flex-col items-end gap-0">
      <a
        href="https://wa.me/971505452643"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative   w-[49px] h-[50px]  rounded-tl-[18px]   overflow-hidden   ring-1 bg-white   "
      >
        <img
          alt="whatsapp"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: "cover",
            color: "transparent",
          }}
          src={WP}
        />
      </a>
      <a
        href="tel:${phoneNumber}"
        aria-label="Contact"
        className="relative   w-[49px] h-[50px]   rounded-bl-[18px]    overflow-hidden   bg-[#989898]   grid place-items-center   ring-1 ring-white/35   "
      >
        <img
          alt="whatsapp"
          loading="lazy"
          width={34}
          height={34}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent", objectFit: "cover" }}
          src={Phone}
        />
      </a>
      <button
        aria-label="Request a Call Back"
        className="   relative   top-4   w-[56px] h-[220px]   bg-[#D8FF52]   rounded-l-[18px]  /* only LEFT corners rounded */   /* right edge is square because it's touching the window */      ring-1 ring-black/10   flex items-center justify-center   right-0   cursor-pointer   "
        style={{
          clipPath: "inset(0 0 0 0)",
          background: "linear-gradient(180deg, #D8FF36, #829920)",
        }}
      >
        <span
          className="font-bold text-[20px] tracking-[0.06em] text-black whitespace-nowrap relative bottom-4 left-1"
          style={{
            transform: "rotate(-90deg)", // vertical banane ke liye
            transformOrigin: "center", // rotation ka pivot beech me
          }}
        >
          Call Back
        </span>

        <span
          style={{
            transform: "rotate(-90deg)", // vertical banane ke liye
            transformOrigin: "center", // rotation ka pivot beech me
          }}
          className="absolute bottom-[20px] left-4 -translate-x-1/2 w-[34px] h-[34px] rounded-full grid place-items-center"
        >
          <MdSupportAgent className="text-2xl text-black" />
        </span>
      </button>
    </div>
  );
}

export default FixedSection;
