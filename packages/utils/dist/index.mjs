function useToggle(initial = false) {
  let state = initial;
  const toggle = () => state = !state;
  return { state, toggle };
}

export { useToggle };
