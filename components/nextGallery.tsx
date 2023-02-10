import React from "react";
import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

const NextJsImage: React.FC<RenderPhotoProps> = ({
    imageProps: { src, alt, title, sizes, className, onClick },
    wrapperStyle,
}) => (
    <div style={wrapperStyle}>
        <div className="relative w-full h-full cursor-pointer">
            <Image fill src={src} alt={alt} title={title} sizes={sizes} className={className} onClick={onClick} />
        </div>
    </div>
);

export default NextJsImage;