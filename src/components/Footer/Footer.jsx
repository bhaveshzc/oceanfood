import brandIcon from "../../assets/images/icons/brand-icon.svg";
import footerDish from "../../assets/images/footer/footer-dish.png";

const containerClass =
  "mx-auto w-[calc(100%_-_56px)] max-w-[1384px] max-[1180px]:w-[calc(100%_-_42px)] max-[1180px]:max-w-[1080px] max-[767px]:w-[calc(100%_-_30px)] max-[380px]:w-[calc(100%_-_24px)]";

const navLinks = [
  {
    id: 1,
    label: "History",
    href: "#history",
  },
  {
    id: 2,
    label: "Menu",
    href: "#menu",
  },
  {
    id: 3,
    label: "Trim",
    href: "#trim",
  },
  {
    id: 4,
    label: "Map",
    href: "#map",
  },
];

const InstagramIcon = () => (
  <svg
    className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const socialLinks = [
  {
    id: 1,
    label: "Instagram",
    href: "https://www.instagram.com/sitecaptain.in/",
    icon: InstagramIcon,
  },
  {
    id: 2,
    label: "WhatsApp : 94581 88366",
    href: "https://wa.me/919458188366",
    icon: WhatsAppIcon,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative -mt-px overflow-hidden bg-[#111111] text-white">
      {/* ==================== Footer main ==================== */}

      <div className={`${containerClass} pt-[58px] pb-8 max-[991px]:py-[48px] max-[640px]:py-[42px]`}>
        <div className="grid grid-cols-[1.25fr_0.72fr_0.9fr_1fr] items-start gap-[48px] border-b border-white/10 pb-[48px] max-[1180px]:gap-8 max-[991px]:grid-cols-2 max-[991px]:gap-x-12 max-[991px]:gap-y-12 max-[640px]:grid-cols-1 max-[640px]:gap-y-10 max-[640px]:pb-10">
          {/* ==================== Footer brand ==================== */}

          <div className="max-w-[315px] max-[640px]:mx-auto max-[640px]:max-w-[360px] max-[640px]:text-center">
            <a
              href="#home"
              className="inline-flex items-center gap-0 text-white no-underline max-[640px]:justify-center"
              aria-label="OCEAN FOOD home"
            >
              <img
                src={brandIcon}
                alt=""
                className="h-[50px] w-[50px] object-contain max-[767px]:h-[44px] max-[767px]:w-[44px]"
              />

              <span className="relative top-[5px] font-['Times_New_Roman',Georgia,serif] text-[26px] font-normal uppercase leading-none tracking-[-0.8px] text-white max-[767px]:text-[23px]">
                OCEAN FOOD
              </span>
            </a>

            <p className="m-0 mt-[22px] font-[Inter,Arial,sans-serif] text-[13px] font-normal leading-[1.65] text-white/45 max-[640px]:mx-auto max-[640px]:max-w-[310px]">
              Fresh coastal flavors, refined seafood dishes, and a warm dining
              experience crafted for every guest in Haldwani.
            </p>

            <div className="mt-[24px] font-[Inter,Arial,sans-serif] text-[11px] font-medium leading-[1.65] tracking-[0.02em] text-white/35">
              <p className="m-0">Haldwani, Uttarakhand, India</p>
              <p className="m-0">29.2183° N, 79.5130° E</p>
            </div>
          </div>

          {/* ==================== Footer navigation ==================== */}

          <nav
            className="font-[Inter,Arial,sans-serif] max-[640px]:text-center"
            aria-label="Footer navigation"
          >
            <h3 className="m-0 mb-[18px] text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#d8a06e]">
              Explore
            </h3>

            <div className="flex flex-col gap-[12px] max-[640px]:items-center">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="w-fit text-[14px] font-medium leading-none text-white/78 no-underline transition duration-300 hover:translate-x-1 hover:text-white max-[640px]:hover:translate-x-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* ==================== Footer social links ==================== */}

          <nav
            className="font-[Inter,Arial,sans-serif] max-[640px]:text-center"
            aria-label="Social links"
          >
            <h3 className="m-0 mb-[18px] text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#d8a06e]">
              Connect
            </h3>

            <div className="flex flex-col gap-[14px] max-[640px]:items-center">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-fit items-center gap-2 text-[13.5px] font-medium leading-none text-white/75 no-underline transition duration-300 hover:translate-x-1 hover:text-white max-[640px]:hover:translate-x-0"
                    aria-label={link.label}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.08] text-[#d8a06e] transition-colors duration-300 group-hover:bg-[#d8a06e] group-hover:text-black">
                      <Icon />
                    </span>
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* ==================== Footer action & Developed By ==================== */}

          <div className="justify-self-end text-right max-[991px]:justify-self-start max-[991px]:text-left max-[640px]:justify-self-center max-[640px]:text-center">
            <h3 className="m-0 font-['Cormorant_Garamond','Times_New_Roman',Georgia,serif] text-[34px] font-medium uppercase leading-[0.95] tracking-[-0.055em] text-white max-[767px]:text-[31px]">
              Taste The Sea
            </h3>

            <p className="m-0 mt-[14px] max-w-[225px] font-[Inter,Arial,sans-serif] text-[12px] font-normal leading-[1.55] text-white/40 max-[640px]:mx-auto">
              Thank you for choosing Ocean Food Restaurant.
            </p>

            <div className="mt-[20px] flex flex-col items-end gap-3 max-[991px]:items-start max-[640px]:items-center">
              <button
                type="button"
                className="relative inline-flex h-[38px] w-[152px] cursor-pointer items-center justify-center border border-[#d8a06e] bg-[#d8a06e] font-[Inter,Arial,sans-serif] text-[12px] font-semibold leading-none text-white transition duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#d8a06e]"
                aria-label="Shopping cart"
              >
                Shopping cart

                <span className="absolute -right-[7px] -top-[7px] grid h-[16px] w-[16px] place-items-center rounded-full bg-white font-[Inter,Arial,sans-serif] text-[9px] font-bold leading-none text-[#141414]">
                  0
                </span>
              </button>

              <a
                href="https://sitecaptain.gt.tc/?i=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-md border border-[#d8a06e]/40 bg-[#d8a06e]/10 px-3 py-1.5 font-[Inter,Arial,sans-serif] text-[11px] font-medium text-white/90 no-underline transition-all duration-300 hover:border-[#d8a06e] hover:bg-[#d8a06e] hover:text-[#111111]"
                aria-label="Developed by SiteCaptain"
              >
                <span className="text-white/60 group-hover:text-black/75">Developed by :</span>
                <span className="font-semibold text-[#d8a06e] underline underline-offset-2 group-hover:text-black">
                  SiteCaptain
                </span>
                <svg
                  className="h-3 w-3 text-[#d8a06e] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ==================== Footer image strip ==================== */}

        <figure className="relative m-0 mt-[34px] h-[108px] w-full overflow-hidden bg-[#191919] max-[991px]:h-[96px] max-[640px]:mt-[30px] max-[640px]:h-[86px] max-[420px]:h-[76px]">
          <img
            src={footerDish}
            alt="Fresh seafood dish"
            className="h-full w-full transition object-cover duration-700 hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.64)_0%,rgba(17,17,17,0.06)_42%,rgba(17,17,17,0.64)_100%)]"></div>
        </figure>

        {/* ==================== Footer bottom ==================== */}

        <div className="flex items-center justify-between gap-6 pt-8 max-[767px]:flex-col max-[767px]:gap-3 max-[767px]:text-center">
          <p className="m-0 font-[Inter,Arial,sans-serif] text-[11px] font-bold uppercase leading-none tracking-[0.09em] text-white/55 max-[520px]:text-[10px] max-[520px]:leading-[1.5]">
            © {currentYear} OCEAN FOOD Seafood Restaurant. All Rights Reserved.
          </p>

          <p className="m-0 font-[Inter,Arial,sans-serif] text-[11px] font-medium leading-none tracking-[0.04em] text-white/30 max-[520px]:text-[10px]">
            Crafted with fresh seafood passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;