import Image from "next/image"

interface LogoProps {
  label: string;
}

export const Logo = ({label}: LogoProps) => {
  return (
    <p>
      {label}
      <Image src="/vercel.svg" alt="vercel logo" width={384} height={75} />
    </p>
  );
};