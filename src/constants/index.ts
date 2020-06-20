import { Dimensions } from 'react-native';
import { socialMedia } from '../assets/images';

const { height, width } = Dimensions.get('window');

export const HEADER_HEIGHT = height * 0.06;
export const IMAGE_HEIGHT = width * 0.7;

export const NAVIGATION_FADE = 50;

export const BUTTONS = [
  [
    { text: 'GitHub\nProfile', image: socialMedia[0] },
    { text: 'Stack\nOverflow', image: socialMedia[1] },
  ],
  [
    { text: 'LinkedIn\nProfile', image: socialMedia[2] },
    { text: 'Tech\nTalks', image: socialMedia[3] },
  ],
];
