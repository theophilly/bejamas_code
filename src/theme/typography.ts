/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export function themeTypography() {
  return {
    fontFamily: ['"Mulish"', 'Source Sans Pro', 'Inter'].join(','),
    title1: {
      lineHeight: '20px',
      fontSize: 'clamp(1.3rem, 1.5vw, 50px)',
      fontWeight: 'bold',
    },
    title2: {
      lineHeight: '70px',
      fontSize: 'clamp(35px, 4vw, 60px)',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },
    heading: {
      fontWeight: '700',
      fontSize: '1rem',
      fontFamily: 'mulish',
    },
    flex: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    flex2: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };
}
