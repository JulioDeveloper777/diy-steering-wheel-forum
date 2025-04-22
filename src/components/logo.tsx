import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold text-primary">
      <Image src="/logo.jpg" alt="Logo" className="rounded-xl" width={35} height={35} />
    </Link>
  );
};

export default Logo;
