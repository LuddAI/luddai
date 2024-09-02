import Image from 'next/image';
import logo from '/public/luddai-logo-600x600.png'

export default function Logo() {
  return (
    <div className="flex items-center justify-center w-2/5 text-black">
      <Image
        src={logo}
        width={300}
        height={300}
        className="relative"
        alt="Ludd AI logo"
        priority
        unoptimized
    />
      <p className="text-[50px] text-nowrap mx-1">Ludd AI</p>
    </div>
  );
}
