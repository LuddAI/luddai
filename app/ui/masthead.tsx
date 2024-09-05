import Image from 'next/image';
import logo from '/public/luddai-logo-600x600.png';
import Link from 'next/link';

export default function Masthead() {
    return (
        <div className="flex items-center justify-center w-1/5 mt-10 text-black">
        <Link
            href="/">
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    className="relative"
                    alt="Neural Hammer: Ludd AI logo"
                    priority
                    unoptimized
                />
                <p className="text-[22px] ml-[-1px] mt-[-2px] text-nowrap min-w-23">Ludd AI</p>
        </Link>
        </div>
    );
}
