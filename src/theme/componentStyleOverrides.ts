/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export function componentStyleOverrides() {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
        },
      },
    },
  };
}
