import {random} from './GlobalFunction'

const background = `linear-gradient(
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

export const randomColor = {
  background: `${background}`,
  position: 'fixed',
  width: '100vw',
  height: '100%'
}