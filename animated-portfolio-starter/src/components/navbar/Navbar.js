"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./navbar.scss");
const Sidebar_1 = __importDefault(require("../sidebar/Sidebar"));
const Navbar = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "navbar", children: [(0, jsx_runtime_1.jsx)(Sidebar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "wrapper", children: [(0, jsx_runtime_1.jsx)("span", { children: "Navbar" }), (0, jsx_runtime_1.jsx)("div", { className: "social", children: (0, jsx_runtime_1.jsx)("a", { href: "#", children: (0, jsx_runtime_1.jsx)("img", { src: "facebook.png" }) }) })] })] }));
};
exports.default = Navbar;
