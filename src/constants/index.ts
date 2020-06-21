import { Dimensions } from 'react-native';
import { socialMedia } from '../assets/images';

const { height, width } = Dimensions.get('window');

export const HEADER_HEIGHT = height * 0.06;
export const IMAGE_HEIGHT = width * 0.7;

export const NAVIGATION_FADE = 50;

export const BUTTONS = [
  [
    { text: 'GitHub\nProfile', url: 'https://github.com/vinaysharma14', image: socialMedia[0] },
    { text: 'Stack\nOverflow', url: 'https://stackoverflow.com/users/11220479/vinay-sharma', image: socialMedia[1] },
  ],
  [
    { text: 'LinkedIn\nProfile', url: 'https://www.linkedin.com/in/vinaysharma14/', image: socialMedia[2] },
    { text: 'Tech\nTalks', url: 'https://www.youtube.com/results?search_query=geekyants+vinay', image: socialMedia[3] },
  ],
];
