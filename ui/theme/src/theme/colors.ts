const colors = {
  background: {
    black: 'rgba(0, 0, 0, 1)',
    transparentBlack: 'rgba(0, 0, 0, 0.7)',
    gray: 'rgba(70, 70, 70, 1)',
    lightGray: 'rgba(153, 153, 153, 1)',
    white: 'rgba(255, 255, 255, 1)',
    beige: 'rgba(247,247,247,1)',
    purple: 'rgba(133,98,206,1)',
  },
  text: {
    primary: 'rgba(80, 80, 80, 1)',
    lightGray: 'rgba(128,128,128,1)',
    semiGray: 'rgba(195, 195, 195, 1)',
    gray: 'rgba(153, 153, 153, 1)',
    accent: 'rgba(0, 0, 0, 1)',
    white: 'rgba(255, 255, 255, 1)',
    semiBlack: 'rgba(40,40,40,1)',
    purple: 'rgba(133,98,206,1)',
  },
  button: {
    primary: {
      default: {
        background: 'rgba(0, 0, 0, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      hover: {
        background: 'rgba(133,98,206,1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(133,98,206,1)',
      },
      pressed: {
        background: 'rgba(117,87,181,1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(117,87,181,1)',
      },
      disabled: {
        background: 'rgba(195,195,195,1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(195,195,195,1)',
      },
    },
    secondary: {
      default: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(133,98,206,1)',
        border: 'rgba(133,98,206,1)',
      },
      pressed: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(117,87,181,1)',
        border: 'rgba(117,87,181,1)',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(195,195,195,1)',
        border: 'rgba(195,195,195,1)',
      },
    },
    tertiary: {
      default: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(128,128,128,1)',
        border: 'rgba(215,215,215,1)',
      },
      hover: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      pressed: {
        background: 'rgba(0, 0, 0, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(195,195,195,1)',
        border: 'rgba(195,195,195,1)',
      },
    },
    quaternary: {
      default: {
        background: 'rgba(247,247,247,1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(247,247,247,1)',
      },
      hover: {
        background: 'rgba(247,247,247,1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(235,235,235,1)',
      },
      pressed: {
        background: 'rgba(255,255,255,1)',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(235,235,235,1)',
      },
      disabled: {
        background: 'rgba(255, 255, 255, 1)',
        font: 'rgba(195,195,195,1)',
        border: 'rgba(195,195,195,1)',
      },
    },
    danger: {
      default: {
        background: 'rgba(213,52,52,1)',
        font: 'rgba(255,255,255,1)',
        border: 'rgba(213,52,52,1)',
      },
      hover: {
        background: 'rgba(238,71,71,1)',
        font: 'rgba(255,255,255,1)',
        border: 'rgba(238,71,71,1)',
      },
      pressed: {
        background: 'rgba(213,52,52,1)',
        font: 'rgba(255,255,255,1)',
        border: 'rgba(213,52,52,1)',
      },
      disabled: {
        background: 'rgba(195,195,195,1)',
        font: 'rgba(255,255,255,1)',
        border: 'rgba(195,195,195,1)',
      },
    },
    ghost: {
      default: {
        background: 'transparent',
        font: 'rgba(0,0,0,1)',
        border: 'transparent',
      },
      hover: {
        background: 'transparent',
        font: 'rgba(0,0,0,1)',
        border: 'transparent',
      },
      pressed: {
        background: 'transparent',
        font: 'rgba(0,0,0,1)',
        border: 'transparent',
      },
      disabled: {
        background: 'transparent',
        font: 'rgba(0,0,0,1)',
        border: 'transparent',
      },
    },
    purple: {
      default: {
        background: 'rgba(133, 98, 206, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(133, 98, 206, 1)',
      },
      hover: {
        background: 'rgba(133,98,206,1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(133, 98, 206, 1)',
      },
      pressed: {
        background: 'rgba(117, 87, 181, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(133, 98, 206, 1)',
      },
      disabled: {
        background: 'rgba(195, 195 , 195, 1)',
        font: 'rgba(255, 255, 255 , 1)',
        border: 'rgba(195, 195, 195, 1)',
      },
    },
    lightGray: {
      default: {
        background: 'transparent',
        font: 'rgba(128, 128, 128, 1)',
        border: 'rgba(215, 215, 215, 1)',
      },
      hover: {
        background: 'transparent',
        font: 'rgb(86,86,86)',
        border: 'rgb(147,147,147)',
      },
      pressed: {
        background: 'transparent',
        font: 'rgba(0, 0, 0, 1)',
        border: 'rgba(0, 0, 0, 1)',
      },
      disabled: {
        background: 'rgba(195, 195, 195, 1)',
        font: 'rgba(255, 255, 255, 1)',
        border: 'rgba(195, 195, 195, 1)',
      },
    },
  },
  input: {
    primary: {
      default: {
        background: 'rgba(247,247,247,1)',
        border: 'rgba(247,247,247,1)',
        placeholder: 'rgba(128,128,128,1)',
        font: 'rgba(0,0,0,1)',
      },
      hover: {
        background: 'rgba(247,247,247,1)',
        border: 'rgba(247,247,247,1)',
        placeholder: 'rgba(128,128,128,1)',
        font: 'rgba(0,0,0,1)',
      },
      focus: {
        background: 'rgba(255,255,255,1)',
        border: 'rgba(247,247,247,1)',
        placeholder: 'rgba(128,128,128,1)',
        font: 'rgba(0,0,0,1)',
      },
      disabled: {
        background: 'rgba(247,247,247,1)',
        border: 'rgba(247,247,247,1)',
        placeholder: 'rgba(195,195,195,1)',
        font: 'rgba(195,195,195,1)',
        label: 'rgba(128,128,128,1)',
      },
      error: 'rgba(213,52,52,1)',
    },
    ghost: {
      default: {
        background: 'transparent',
        border: 'transparent',
        placeholder: 'rgba(235,235,235,1)',
        font: 'rgba(0,0,0,1)',
      },
      hover: {
        background: 'transparent',
        border: 'transparent',
        placeholder: 'rgba(235,235,235,1)',
        font: 'rgba(0,0,0,1)',
      },
      focus: {
        background: 'transparent',
        border: 'transparent',
        placeholder: 'rgba(235,235,235,1)',
        font: 'rgba(0,0,0,1)',
      },
    },
  },
  checkbox: {
    default: {
      background: 'rgba(247,247,247,1)',
    },
    hover: {
      background: 'rgba(241,237,247,1)',
    },
    disabled: {
      background: 'rgba(235,235,235,1)',
    },
    checked: {
      background: 'rgba(133,98,206,1)',
      checkmark: 'rgba(255, 255, 255, 1)',
    },
    checkedHover: {
      background: 'rgba(117,87,181,1)',
    },
  },
  toggle: {
    thumb: 'rgba(255, 255, 255, 1)',
    default: {
      background: 'rgba(215,215,215,1)',
      hover: {
        background: 'rgba(195,195,195,1)',
      },
      disabled: {
        background: 'rgba(235,235,235,1)',
      },
    },
    checked: {
      background: 'rgba(133,98,206,1)',
      hover: {
        background: 'rgba(117,87,181,1)',
      },
      disabled: {
        background: 'rgba(195,179,229,1)',
      },
    },
  },
}

export { colors }
