/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          cx="21.152%"
          cy="86.063%"
          fx="21.152%"
          fy="86.063%"
          r="79.941%"
          id="footer-logo"
        >
          <stop stopColor="rgb(247, 245, 207)" offset="0%" />
          <stop stopColor="rgb(245, 238, 238)" offset="25.871%" />
          <stop stopColor="#f5ebeb" offset="100%" />
        </radialGradient>
      </defs>
      <rect
        width="32"
        height="32"
        rx="3"
        fill="url(#footer-logo)"
        fillRule="nonzero"
      ></rect>
      <foreignObject width="32" height="32">
        <div
          style={{
            fontSize: 10,
            color: "#78dfbf",
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          <span>Auth</span>
        </div>
      </foreignObject>
    </svg>
  );
}

export default Logo;
