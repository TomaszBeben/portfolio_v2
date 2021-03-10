export const toggle = (state, setState, arg1, arg2) =>
state === arg1 ? setState(arg2) : setState(arg1);

export const random = (num) => Math.floor(Math.random() * num);