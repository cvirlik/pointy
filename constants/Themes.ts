export const lightTheme = {
  background: 'transparent',
  foreground: 'white',

  text: '#000',
  selectedText: '#fff',
  disabled: '#7d7d7d',
  disabledTab: '#ccc',
  disabledOpacity: 'rgba(204, 204, 204, 0.1)',
  shadow: 'rgba(20, 19, 21, 0.6)',

  primary: '#415EA7',
  primaryOpacity: 'rgba(65, 94, 167, 0.1)',
  modal: 'rgba(65, 94, 167, 0.48)',
  secondary: '#D92871',
  secondaryOpacity: 'rgba(217, 40, 113, 0.1)',
  tertiary: '#72B8EB',
  backgroundEffect: '#72B8EB',
  tertiaryOpacity: 'rgba(114, 184, 235, 0.1)',
  effectFrom: '#FFCAE0',
  effectTo: '#f6bad5',

  svgLeft: '#80BEEC',
  svgRight: '#FFCAE0',
  svgMix: '#8097CF',

  error: '#D92871',
};

export const darkTheme = {
  background: 'transparent',
  foreground: '#1E152A',

  text: '#fff',
  selectedText: '#000',
  disabled: '#464768',
  disabledTab: '#464768',
  disabledOpacity: 'rgba(41, 37, 66, 0.1)',

  shadow: 'rgba(114, 184, 235, 0.6)',

  primary: '#415EA7',
  primaryOpacity: 'rgba(46, 94, 170, 0.1)',
  modal: 'rgba(26, 67, 133, 0.48)',
  secondary: '#dc136c',
  secondaryOpacity: 'rgba(220, 19, 108 0.1)',
  tertiary: '#2e5eaa',
  backgroundEffect: '#1d3d8c',
  tertiaryOpacity: 'rgba(114, 184, 235, 0.1)',
  effectFrom: '#EA638C',
  effectTo: '#e05981',

  svgLeft: '#2E5EAA',
  svgRight: '#EA638C',
  svgMix: '#EA63AA',

  error: '#dc136c',
};

export const monochromeTheme = {
  background: 'transparent',
  foreground: '#000000',

  text: '#fff',
  selectedText: '#000',
  disabled: '#30313f',
  disabledTab: '#30313f',
  disabledOpacity: 'rgba(41, 37, 66, 0.1)',

  shadow: 'rgba(0, 0, 0, 1)',

  primary: '#415EA7',
  primaryOpacity: 'rgba(46, 94, 170, 0.1)',
  modal: 'rgba(26, 67, 133, 0.48)',
  secondary: '#dc136c',
  secondaryOpacity: 'rgba(220, 19, 108 0.1)',
  tertiary: 'rgb(46, 94, 170)',
  backgroundEffect: 'transparent',
  tertiaryOpacity: 'rgba(114, 184, 235, 0.1)',
  effectFrom: '#EA638C',
  effectTo: '#e05981',

  svgLeft: '#2E5EAA',
  svgRight: '#EA638C',
  svgMix: '#EA63AA',

  error: '#dc136c',
};

export type Theme = typeof lightTheme & typeof darkTheme & typeof monochromeTheme;
