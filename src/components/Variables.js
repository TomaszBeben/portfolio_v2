import {random} from './GlobalFunction';

export const background = `linear-gradient(
    ${random(360)}deg,
    rgba(
      ${random(256)},
      ${random(256)},
      ${random(256)},1)0%,
    rgba(
      ${random(256)},
      ${random(256)},
      ${random(256)},1)
      ${random(98) + 1}%,
    rgba(
      ${random(256)},
      ${random(256)},
      ${random(256)},1) 100%)`
  ;