declare function useToggle(initial?: boolean): {
    state: boolean;
    toggle: () => boolean;
};

export { useToggle };
