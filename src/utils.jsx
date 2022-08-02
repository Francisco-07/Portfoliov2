const colors = {
  white: '#fff',
  blue: '#0a192f',
  lightBlue: '#0d203d',
  green: '#04aa6d',
  red: '#ff4742',
  darkRed: '#ee7f53',
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
