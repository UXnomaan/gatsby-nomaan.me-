import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
    console.log(fill);
    return (
        <svg viewBox="0 0 106 28" height="30px" fill={fill}>
            <path
                d="M26 0L21.1965 27H14.2962L9.49267 12.225L6.90029 27H0L4.84164 0H11.9326L16.6598 13.8L19.1378 0H26Z"
                fill={fill}
            />
        </svg>
    );
}
