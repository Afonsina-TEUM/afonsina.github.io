import { type FC } from "react";
import Logo from "./logo.webp";

import HeroSlider1 from "./background.webp";

// TODO: Adicionar foto da Fundação da Tuna
import FundacaoTuna from "./background.webp";

import Afonsino from "./mascote_tuno.webp";
import Peao from "./mascote_peao.webp";
import Piones from "./mascote_peao.webp";

export const images = {
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    HeroSlider1,
    FundacaoTuna,
    Afonsino,
    Peao,
    Piones
};