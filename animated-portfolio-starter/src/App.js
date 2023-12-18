"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./app.scss");
const Navbar_1 = __importDefault(require("./components/navbar/Navbar"));
const Collection_1 = __importDefault(require("./components/collection/Collection"));
const App = () => {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("section", { children: (0, jsx_runtime_1.jsx)(Collection_1.default, {}) })] });
};
exports.default = App;
