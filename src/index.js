module.exports = function reverse (n) {
    num = Math.abs(n);
    return num.toString().split('').reverse().join('');
}
