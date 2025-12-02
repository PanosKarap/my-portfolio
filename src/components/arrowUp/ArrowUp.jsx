import "./ArrowUp.css";

export default function ArrowUp() {
  const arrowUpIcon = (
    <svg
      fill="var(--primary-base)"
      height="5rem"
      width="5rem"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-24.5 -24.5 539.00 539.00"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#030303"
        strokeWidth="11.76"
      >
        <g>
          <path d="M0,235.564v254.047l245-235.564l245,235.564V235.564L245,0.389L0,235.564z M459.375,417.684L245,211.549L30.625,417.684 v-169.08L245,42.827l214.375,205.777V417.684z"></path>
          <polygon points="72.734,321.622 204.638,194.796 245.004,155.984 285.369,194.796 417.266,321.62 417.266,267.167 245.003,101.805 72.734,267.167 "></polygon>
        </g>
      </g>

      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M0,235.564v254.047l245-235.564l245,235.564V235.564L245,0.389L0,235.564z M459.375,417.684L245,211.549L30.625,417.684 v-169.08L245,42.827l214.375,205.777V417.684z"></path>
          <polygon points="72.734,321.622 204.638,194.796 245.004,155.984 285.369,194.796 417.266,321.62 417.266,267.167 245.003,101.805 72.734,267.167 "></polygon>
        </g>
      </g>
    </svg>
  );

  return (
    <div className="arrowUpIcon" onClick={() => window.scrollTo({ top: 0 })}>
      {arrowUpIcon}
    </div>
  );
}
