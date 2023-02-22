import Image from 'next/image';

type props = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function PEIImage({ src, alt, width, height, className }: props) {
    return <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
    />;
}
