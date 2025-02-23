import { StyledFaqSection } from "./FaqSection.style";

export default function FaqSection() {
  const expand = (e) => {
    const height = e.target.parentElement.parentElement.style.maxHeight;
    if (height == "100px")
      e.target.parentElement.parentElement.style.maxHeight = "300px";
    else e.target.parentElement.parentElement.style.maxHeight = "100px";
  };

  return (
    <StyledFaqSection id="faqSection">
      <div className="main-container">
        <div className="text-container">
          <h2>Najczęściej zadawane pytania</h2>
        </div>
        <div className="questions-container">
          <div className="question" style={{maxHeight: "100px"}}>
            <div className="title">
              <button onClick={expand}>
                Nam luctus odio a euismod ullamcorper?{" "}
                <svg
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L14.3 14L26.6 2"
                    stroke="url(#paint0_linear_886_40042)"
                    stroke-width="4"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_886_40042"
                      x1="2"
                      y1="2"
                      x2="11.457"
                      y2="21.3868"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.400297" stop-color="#485BFF" />
                      <stop offset="0.999227" stop-color="#A687FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Więcej
              informacji znajdziesz tutaj.
            </p>
          </div>
          <div className="question" style={{maxHeight: "100px"}}>
            <div className="title">
              <button onClick={expand}>
                Nam luctus odio a euismod ullamcorper?{" "}
                <svg
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L14.3 14L26.6 2"
                    stroke="url(#paint0_linear_886_40042)"
                    stroke-width="4"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_886_40042"
                      x1="2"
                      y1="2"
                      x2="11.457"
                      y2="21.3868"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.400297" stop-color="#485BFF" />
                      <stop offset="0.999227" stop-color="#A687FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Więcej
              informacji znajdziesz tutaj.
            </p>
          </div>
          <div className="question" style={{maxHeight: "100px"}}>
            <div className="title">
              <button onClick={expand}>
                Nam luctus odio a euismod ullamcorper?{" "}
                <svg
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L14.3 14L26.6 2"
                    stroke="url(#paint0_linear_886_40042)"
                    stroke-width="4"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_886_40042"
                      x1="2"
                      y1="2"
                      x2="11.457"
                      y2="21.3868"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.400297" stop-color="#485BFF" />
                      <stop offset="0.999227" stop-color="#A687FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Więcej
              informacji znajdziesz tutaj.
            </p>
          </div>
          <div className="question" style={{maxHeight: "100px"}}>
            <div className="title">
              <button onClick={expand}>
                Nam luctus odio a euismod ullamcorper?{" "}
                <svg
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L14.3 14L26.6 2"
                    stroke="url(#paint0_linear_886_40042)"
                    stroke-width="4"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_886_40042"
                      x1="2"
                      y1="2"
                      x2="11.457"
                      y2="21.3868"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.400297" stop-color="#485BFF" />
                      <stop offset="0.999227" stop-color="#A687FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Więcej
              informacji znajdziesz tutaj.
            </p>
          </div>
          <div className="question" style={{maxHeight: "100px"}}>
            <div className="title">
              <button onClick={expand}>
                Nam luctus odio a euismod ullamcorper?{" "}
                <svg
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L14.3 14L26.6 2"
                    stroke="url(#paint0_linear_886_40042)"
                    stroke-width="4"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_886_40042"
                      x1="2"
                      y1="2"
                      x2="11.457"
                      y2="21.3868"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.400297" stop-color="#485BFF" />
                      <stop offset="0.999227" stop-color="#A687FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Więcej
              informacji znajdziesz tutaj.
            </p>
          </div>
        </div>
      </div>
    </StyledFaqSection>
  );
}
