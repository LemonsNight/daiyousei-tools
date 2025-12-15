function useToggle(initial = false) {
  let state = initial;
  const toggle = () => state = !state;
  return { state, toggle };
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export { clamp, useToggle };
