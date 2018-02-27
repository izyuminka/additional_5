module.exports = function check(str, bracketsConfig) {
    let result = false;
    bracketsConfig.forEach(function checkOpen(v) {
        result = str.includes(v[0]) && str.includes(v[1]);
        return result;
    });
    return result;
};