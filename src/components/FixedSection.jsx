import Phone from "../assets/images/fiedicons/phone.png";
import WP from "../assets/images/fiedicons/wp1.png";
import Headphone from "../assets/images/fiedicons/heaphone.png";
// import { MdSupportAgent } from "react-icons/md";
function FixedSection() {
  return (
    <>
      <div className="fixed z-[9999] right-0 md:right-0 top-[26vh] flex flex-col items-end gap-0">
        {/* <a
    href="https://wa.me/971505452643"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="relative w-[56px] h-[56px] rounded-tl-[18px] overflow-hidden ring-1 ring-white/40"
  >
    <img
      alt="whatsapp"
      loading="lazy"
      decoding="async"
      data-nimg="fill"
      style={{
        position: "absolute",
        height: "120px",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: "cover",
        color: "transparent"
      }}
      src={WP}
    />
  </a> */}
        <a
          href="https://wa.me/971505452643"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-[56px] h-[56px] rounded-tl-[18px] overflow-hidden ring-1 ring-white/40"
        >
          <img
            alt="whatsapp"
            loading="lazy"
            decoding="async"
            src={WP}
            style={{
              position: "absolute",
              height: "110px",
              width: "110px",
              top: "8%",
              left: "20.5%", // yahan value kam ki
              transform: "translate(-20%, -30%)",
              objectFit: "cover",
            }}
          />
        </a>

        <a
          href="tel:${phoneNumber}"
          aria-label="Contact"
          className="   relative   w-[56px] h-[56px]   rounded-bl-[18px]    overflow-hidden   bg-[#989898]   grid place-items-center   ring-1 ring-white/35   "
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
            style={{
              transform: "rotate(-90deg)", // vertical banane ke liye
              // transformOrigin: "center", // rotation ka pivot beech me
            }}
            class="rotate-270  font-bold text-[20.4px] tracking-[0.06em] text-black whitespace-nowrap relative bottom-4 left-0"
          >
            Call Back
          </span>
          <span className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[32px] h-[32px] rounded-full grid place-items-center">
            <img
              alt="call-headphone"
              loading="lazy"
              width={34}
              height={34}
              decoding="async"
              data-nimg={1}
              className="rotate-270"
              style={{ color: "transparent" }}
              src={Headphone}
            />
          </span>
        </button>
      </div>
    </>
  );
}

export default FixedSection;
