"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
require("./links.scss");
const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};
const Links = () => {
    const items = ["Brutal Death", "Tech Death", "Black", "Prog", "Gore"];
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "links", variants: variants, children: items.map((item) => ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.a, { href: `#${item}`, variants: itemVariants, whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: item.split(" ").map((word, index, array) => ((0, jsx_runtime_1.jsx)("p", { children: word }))) }, item))) }));
};
exports.default = Links;
