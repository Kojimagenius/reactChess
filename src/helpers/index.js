
const isSameRow = (src, dest) => {
    return Math.trunc( Math.abs(src - dest) / 8) === 0;
}
const isSameColumn = (src, dest) => {
    return Math.abs(src - dest) % 8 === 0;
}

const isSameDiagonal = (src, dest) => {
    abs = Math.abs(src-dest);
    return abs % 7 === 0 ||
    abs % 9 === 0;
}