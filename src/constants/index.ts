import {Dimensions} from 'react-native';
import {socialMedia} from '../assets/images';

const {height, width} = Dimensions.get('window');

export const HEADER_HEIGHT = height * 0.06;
export const IMAGE_HEIGHT = width * 0.7;
export const PSEUDO_IMAGE_BORDER = (width - IMAGE_HEIGHT) / 2;

export const NAVIGATION_FADE = 50;
export const USE_NATIVE_DRIVER = true;
export const ANIMATION_DURATION = 500;

export const BUTTONS = [
  [
    {
      image: socialMedia[0],
      text: 'GitHub\nProfile',
      url: 'https://github.com/vinaysharma14',
    },
    {
      image: socialMedia[1],
      text: 'Stack\nOverflow',
      url: 'https://stackoverflow.com/users/11220479/vinay-sharma',
    },
  ],
  [
    {
      image: socialMedia[2],
      text: 'LinkedIn\nProfile',
      url: 'https://www.linkedin.com/in/vinaysharma14/',
    },
    {
      image: socialMedia[3],
      text: 'Tech\nTalks',
      url: 'https://www.youtube.com/results?search_query=geekyants+vinay',
    },
  ],
];
