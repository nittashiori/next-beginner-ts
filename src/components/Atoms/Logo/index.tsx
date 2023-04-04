interface LogoProps {
  label: string;
}

export const Logo = ({label}: LogoProps) => {
  return (
    <p>{label}</p>
  );
};