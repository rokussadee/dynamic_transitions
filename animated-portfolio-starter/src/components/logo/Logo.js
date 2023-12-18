"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
require("./logo.scss");

const svgVariants = {
    hidden: { rotate: -180 },
    visble: {
        rotate: 0,
        transition: { duration: 1 }
    }
};
const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visble: {
        opacity: 1,
        pathLength: 1,
        transition: { duration: 2 }
    }
};
const Logo = ({ pathProps }) => {
    const [svgRef, setSvgRef] = (0, react_1.useState)(null);
    const [imageSize, setImageSize] = (0, react_1.useState)({ width: 0, height: 0 });
    (0, react_1.useEffect)(() => {
        const loadImageSize = () => {
            const img = new Image();
            img.src = pathProps.img;
            img.onload = () => {
                setImageSize({ width: img.width, height: img.height });
            };
        };
        loadImageSize();
    }, [pathProps.img]);
    (0, react_1.useEffect)(() => {
        const updateViewBox = () => {
            if (svgRef) {
                const padding = 5; // Add padding if needed
                const newViewBox = `${padding} ${padding} ${imageSize.width + padding * 2} ${imageSize.height + padding * 2}`;
                svgRef.setAttribute("viewBox", newViewBox);
            }
        };
        const initialSetDAttribute = () => {
            var _a;
            // Set the initial "d" attribute value
            if (svgRef) {
                (_a = svgRef.querySelector("path")) === null || _a === void 0 ? void 0 : _a.setAttribute("d", pathProps.d);
            }
        };
        updateViewBox();
        initialSetDAttribute();
        // Update viewBox whenever paths change
        window.addEventListener("resize", updateViewBox);
        return () => {
            window.removeEventListener("resize", updateViewBox);
        };
    }, [pathProps.d, imageSize, svgRef]);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "logo-wrapper", whileHover: "hover", initial: "default", animate: "default", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.svg, { ref: (ref) => setSvgRef(ref), className: "logo-svg", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.path, { className: "logo-path", variants: svgVariants, d: pathProps.d, strokeWidth: ".2", fill: "", stroke: "white", initial: "hidden", animate: "visible" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.path, { className: "blur-path", variants: pathVariants, strokeWidth: "1", fill: "none", stroke: "rgba(240, 30, 70, 1)" })] }) }) }));
};
exports.default = Logo;
