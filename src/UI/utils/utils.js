export function openInNewTab(URL) {
    window.open(URL, '_blank', 'noopener, noreferrer');
}

export function deepCompareList(left, right) {
    const leftLength = left.length;
    if (leftLength === right.length) {
        for (let i = 0; i < leftLength; i++) {
            if (left[i] !== right[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
