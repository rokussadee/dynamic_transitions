"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Logo_1 = __importDefault(require("../logo/Logo"));
const typewriter_effect_1 = __importDefault(require("typewriter-effect"));
require("./collection.scss");
const react_1 = require("react");
const Collection = () => {
    const [paths, setPaths] = (0, react_1.useState)([]);
    const [pathProperties, setPathProperties] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchPaths = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch("/svg_paths.json");
                const data = yield response.json();
                setPaths(data);
                console.log(data);
                setPathProperties(data[0]);
            }
            catch (error) {
                console.error("Error fetching SVG paths:", error);
            }
        });
        fetchPaths();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "collection-container", children: [(0, jsx_runtime_1.jsx)(typewriter_effect_1.default, { options: {
                    strings: ['cystgurgle', 'phyllomedusa'],
                    autoStart: true,
                    loop: true,
                } }), pathProperties && (0, jsx_runtime_1.jsx)(Logo_1.default, { pathProps: pathProperties })] }));
};
exports.default = Collection;
