declare function useToggle(initial?: boolean): {
    state: boolean;
    toggle: () => boolean;
};
declare function clamp(value: number, min: number, max: number): number;

export { clamp, useToggle };
