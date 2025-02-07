import Image from 'next/image';
import logo from '/public/luddai-logo-600x600.png';

export default function Logo() {
  return (
    <div className="flex items-center justify-center w-2/5 mb-12 text-black">
      <Image
        src={logo}
        width={300}
        height={300}
        className="relative"
        alt="Neural Hammer: Ludd AI logo"
        priority
        unoptimized
    />
      <p className="text-[30px] text-nowrap mx-1 min-w-32">Ludd AI</p>
    </div>
  );
}
