import Image from "next/image";
import { StyledDemoSection } from "./DemoSection.style";

export default function DemoSection() {
  return (
    <StyledDemoSection id="demoSection">
        <div className="gradient"></div>
      <div className="main-container">
        <div className="text-container">
          <h2>[Demo aplikacji] Lorem ipsum dolor sit amet, consectetur</h2>
          <div>
            <h3>Nulla venenatis elit egestas augue imperdiet aliquet.</h3>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Donec
              dapibus magna vel tellus fermentum iaculis.{" "}
            </p>
          </div>
          <div>
            <h3>Nulla venenatis elit egestas augue imperdiet aliquet.</h3>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Donec
              dapibus magna vel tellus fermentum iaculis.{" "}
            </p>
          </div>
          <div>
            <h3>Nulla venenatis elit egestas augue imperdiet aliquet.</h3>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Donec
              dapibus magna vel tellus fermentum iaculis.{" "}
            </p>
          </div>
          <div>
            <h3>Nulla venenatis elit egestas augue imperdiet aliquet.</h3>
            <p>
              Vivamus rhoncus vel tortor non tincidunt. Suspendisse consectetur
              fringilla euismod. In et blandit purus, quis sodales ante. Donec
              dapibus magna vel tellus fermentum iaculis.{" "}
            </p>
          </div>
          <button>Obejrzyj demo</button>
        </div>
        <div className="img-container">
          <div className="img-first">
            <Image
              src="/png/imgApp.png"
              alt="Image of App"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="img-second">
            <Image
              src="/png/imgApp.png"
              alt="Image of App"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="img-third">
            <Image
              src="/png/imgApp.png"
              alt="Image of App"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </StyledDemoSection>
  );
}
