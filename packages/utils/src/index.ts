export function useToggle(initial = false) {
    let state = initial
    const toggle = () => (state = !state)
    return { state, toggle }
}

export function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max)
}
