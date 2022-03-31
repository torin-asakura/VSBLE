"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// NAMESPACE OBJECT: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/index.ts
var theme_namespaceObject = {};
__webpack_require__.r(theme_namespaceObject);
__webpack_require__.d(theme_namespaceObject, {
  "borders": () => (borders),
  "colors": () => (colors),
  "fontSizes": () => (fontSizes),
  "fontWeights": () => (fontWeights),
  "fonts": () => (fonts),
  "lineHeights": () => (lineHeights),
  "radii": () => (radii),
  "shadows": () => (shadows)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/fontWeights.ts
const fontWeights = {
    thin: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/lineHeights.ts
const lineHeights = {
    small: 0.9,
    normal: 1,
    grown: 1.2,
    extra: 1.3,
    default: 1.5,
    medium: 1.6,
    large: 2,
    big: 3,
    sizeable: 3.8,
    giant: 4.5
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/fontSizes.ts
const fontSizes = {
    small: 12,
    semiRegular: 14,
    default: 16,
    semiGiant: 24,
    giant: 40,
    colossal: 64
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/colors.ts
const colors = {
    background: {
        black: 'rgba(0, 0, 0, 1)',
        gray: 'rgba(70, 70, 70, 1)',
        white: 'rgba(255, 255, 255, 1)'
    },
    text: {
        primary: 'rgba(80, 80, 80, 1)',
        accent: 'rgba(0, 0, 0, 1)',
        white: 'rgba(255, 255, 255, 1)',
        semiBlack: 'rgba(40,40,40,1)',
        purple: 'rgba(133,98,206,1)'
    },
    button: {
        primary: {
            default: {
                background: 'rgba(0, 0, 0, 1)',
                font: 'rgba(255, 255, 255, 1)',
                border: 'rgba(0, 0, 0, 1)'
            },
            hover: {
                background: 'rgba(255, 255, 255, 1)',
                font: 'rgba(0, 0, 0, 1)',
                border: 'rgba(0, 0, 0, 1)'
            },
            active: {
                background: 'rgba(255, 255, 255, 1)',
                font: 'rgba(30, 30, 30, 1)',
                border: 'rgba(30, 30, 30, 1)'
            }
        },
        secondary: {
            default: {
                background: 'rgba(255, 255, 255, 1)',
                font: 'rgba(0, 0, 0, 1)',
                border: 'rgba(0, 0, 0, 1)'
            },
            hover: {
                background: 'rgba(0, 0, 0, 1)',
                font: 'rgba(255, 255, 255, 1)',
                border: 'rgba(0, 0, 0, 1)'
            },
            active: {
                background: 'rgba(0, 0, 0, 1)',
                font: 'rgba(255, 255, 255, 1)',
                border: 'rgba(0, 0, 0, 1)'
            }
        },
        tertiary: {
            default: {
                background: 'rgba(255, 255, 255, 1)',
                font: 'rgba(128,128,128,1)',
                border: 'rgba(215,215,215,1)'
            },
            hover: {
                background: 'rgba(255, 255, 255, 1)',
                font: 'rgba(0, 0, 0, 1)',
                border: 'rgba(0, 0, 0, 1)'
            },
            active: {
                background: 'rgba(0, 0, 0, 1)',
                font: 'rgba(255, 255, 255, 1)',
                border: 'rgba(0, 0, 0, 1)'
            }
        },
        quaternary: {
            default: {
                background: 'rgba(247,247,247,1)',
                font: 'rgba(0, 0, 0, 1)',
                border: 'rgba(247,247,247,1)'
            },
            hover: {
                background: 'rgba(247,247,247,1)',
                font: 'rgba(0, 0, 0, 1)',
                border: 'rgba(235,235,235,1)'
            },
            active: {
                background: 'rgba(255,255,255,1)',
                font: 'rgba(0, 0, 0, 1)',
                border: 'rgba(235,235,235,1)'
            }
        }
    },
    input: {
        primary: {
            default: {
                background: 'rgba(247,247,247,1)',
                border: 'rgba(247,247,247,1)',
                placeholder: 'rgba(128,128,128,1)',
                font: 'rgba(0,0,0,1)'
            },
            hover: {
                background: 'rgba(247,247,247,1)',
                border: 'rgba(247,247,247,1)',
                placeholder: 'rgba(128,128,128,1)',
                font: 'rgba(0,0,0,1)'
            },
            focus: {
                background: 'rgba(255,255,255,1)',
                border: 'rgba(247,247,247,1)',
                placeholder: 'rgba(128,128,128,1)',
                font: 'rgba(0,0,0,1)'
            },
            disabled: {
                background: 'rgba(247,247,247,1)',
                border: 'rgba(247,247,247,1)',
                placeholder: 'rgba(195,195,195,1)',
                font: 'rgba(0,0,0,1)'
            },
            error: 'rgba(213,52,52,1)'
        },
        ghost: {
            default: {
                background: 'transparent',
                border: 'transparent',
                placeholder: 'rgba(235,235,235,1)',
                font: 'rgba(0,0,0,1)'
            },
            hover: {
                background: 'transparent',
                border: 'transparent',
                placeholder: 'rgba(235,235,235,1)',
                font: 'rgba(0,0,0,1)'
            },
            focus: {
                background: 'transparent',
                border: 'transparent',
                placeholder: 'rgba(235,235,235,1)',
                font: 'rgba(0,0,0,1)'
            }
        }
    }
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/fonts.ts
const fonts = {
    primary: 'Sora'
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/radii.ts
const radii = {
    normal: 8,
    full: '100%'
};


;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/borders.ts
const borders = {
    thinWhite: '1px solid #FFFFFF',
    thinBlack: '1px solid #000000'
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/shadows.ts
const shadows = {
    light: '0px 8px 41px rgba(0, 0, 0, 0.1)'
};

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme/index.ts









// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/global.styles.tsx




const GlobalStyles = ()=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Global, {
        styles: react_.css`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
      html,
      body,
      #__next {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        height: 100%;
        scroll-behavior: smooth;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
    `
    })
;

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/theme.provider.tsx





const ThemeProvider = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.ThemeProvider, {
                theme: theme_namespaceObject,
                children: children
            })
        ]
    })
;

;// CONCATENATED MODULE: ../../../../.yarn/__virtual__/@ui-theme-virtual-d8c857aa2a/1/ui/theme/src/index.ts




;// CONCATENATED MODULE: ./pages/_app.tsx




const App = ({ Component , pageProps , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.IntlProvider, {
        locale: "en",
        defaultLocale: "en",
        messages: {},
        children: /*#__PURE__*/ jsx_runtime_.jsx(ThemeProvider, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                ...props
            })
        })
    })
;
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6087));
module.exports = __webpack_exports__;

})();