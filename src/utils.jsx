const colors = {
  primary: '#fff',
  secondary: '#0a192f',
  lightOrange: '#F08F30',
  darksOrange: '#F06A42',
  darkOrange: '#eb3f05',
  black: '#111111',
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1441px',
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  landscape: 'only screen and (max-height: 500px) and (orientation: landscape)',
}

export { device, colors }
