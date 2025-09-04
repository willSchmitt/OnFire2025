import Image from "next/image";
import DespertarLogo from "../../public/DESPERTAR+LOGO.png";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image src={DespertarLogo} alt="" width={1000} height={700} />
      </div>
    </div>
  );
}
