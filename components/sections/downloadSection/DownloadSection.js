import Link from "next/link";
import { StyledDownloadSection } from "./DownloadSection.style";
import Image from "next/image";

export default function DownloadSection() {
  return (
    <StyledDownloadSection id="downloadSection">
      <div className="main-container">
        <div className="text-container">
          <h2>Pobierz aplikację:</h2>
        </div>
        <div className="btn-container">
          <Link href="https://apps.apple.com/pl/app/driving-time/id6741388363">
            <Image
              src="/badges/appStore.svg"
              alt="Image of home"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
          <Link href="https://apps.microsoft.com/detail/9n46qjrht7jd?hl=en-US&gl=PL">
            <Image
              src="https://get.microsoft.com/images/en-us%20dark.svg"
              alt="Image of home"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.limbaapp.drivingtime&hl=pl">
            <Image
              src="/badges/playStore.png"
              alt="Image of home"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>
    </StyledDownloadSection>
  );
}
