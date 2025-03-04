import { useEffect, useState } from "react";
import { StyledFaqSection } from "./FaqSection.style";

export default function FaqSection() {
  const [sizeHide, setSizeHide] = useState("1.5rem");
  const [sizeExpand, setSizeExpand] = useState("5.5rem");

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
      setSizeHide("2.5rem");
      setSizeExpand("7.5rem");
    }
    if (windowWidth >= 1200) {
      setSizeHide("3rem");
      setSizeExpand("8.5rem");
    }
  }, []);

  const expand = (e) => {
    const allQuestions = document.getElementsByClassName("question");
    const height = e.currentTarget.parentElement.parentElement.style.height;

    if (height == sizeHide) {
      for (let i = 0; i < allQuestions.length; i++) {
        allQuestions[i].style.height = sizeHide;
      }
    }

    if (height == sizeHide)
      e.currentTarget.parentElement.parentElement.style.height = sizeExpand;
    else {
      e.currentTarget.parentElement.parentElement.style.height = sizeHide;
    }
  };

  return (
    <StyledFaqSection id="faqSection">
      <div className="main-container">
        <div className="text-container">
          <h2>Najczęściej zadawane pytania</h2>
        </div>
        <div className="questions-container">
          <div className="question" style={{ height: sizeHide }}>
            <div className="title">
              <button onClick={expand}>
                <p>luctus odio a euismod ullamcorper?</p>
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
          <div className="question" style={{ height: sizeHide }}>
            <div className="title">
              <button onClick={expand}>
                <p>Nam luctus odio a euismod ullamcorper?</p>
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
          <div className="question" style={{ height: sizeHide }}>
            <div className="title">
              <button onClick={expand}>
                <p>Nam luctus odio a euismod ullamcorper?</p>
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
          <div className="question" style={{ height: sizeHide }}>
            <div className="title">
              <button onClick={expand}>
                <p>Nam luctus odio a euismod ullamcorper?</p>
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
          <div className="question" style={{ height: sizeHide }}>
            <div className="title">
              <button onClick={expand}>
                <p>Nam luctus odio a euismod ullamcorper?</p>
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
