"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./sidebar.scss");
const Links_1 = __importDefault(require("../links/Links"));
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const variants = {
    open: {
        width: 250,
        transition: {
            type: "tween",
            stiffness: 20,
        },
    },
    closed: {
        width: 100,
        transition: {
            type: "tween",
            velocity: 50
        },
    },
};
const gradientVariants = {
    open: {
        left: 150,
        transition: {
            type: "tween",
            stiffness: 20,
        },
    },
    closed: {
        left: 1,
        transition: {
            ease: "easeOut",
            type: "tween",
            delay: .5,
            velocity: 50
        },
    }
};
const Sidebar = () => {
    const [open, setOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { className: "sidebar", animate: open ? "open" : "closed", whileHover: "open", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "bg", variants: variants, children: (0, jsx_runtime_1.jsx)(Links_1.default, {}) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { className: "gradient-wrapper", variants: gradientVariants })] }));
};
exports.default = Sidebar;
