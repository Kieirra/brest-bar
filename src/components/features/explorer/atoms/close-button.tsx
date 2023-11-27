import Image from "next/image";

interface CloseButtonProps {
    className?: string;
    onClick?: () => void;
}

export const CloseButton = ({ className, ...props }: CloseButtonProps) => {
    return (
        <button
            className={`absolute top-12 -translate-y-1/2 transition-all ${className}`}
            {...props}
        >
            <Image
                src="/images/open-close.svg"
                width={40}
                height={40}
                alt="Picture of the author"
            />
        </button>
    );
};
