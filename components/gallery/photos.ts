import { data } from "../../data/data";
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
let outerId = 0

const photos = data.gallery.map((photo) => {
    outerId += 1
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        id: outerId,
        className: "rounded-xl",
        src: `/images/gallery/${photo.src}`,
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                id: outerId,
                src: `/images/gallery/${photo.src}`,
                width: breakpoint,
                height,
                className: "rounded-xl"
            };
        }),
    };
});

export default photos;
