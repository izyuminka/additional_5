module.exports = function check(str, bracketsConfig) {
    let checkBlock =  function(index, source, bracketsConfig, opener) {
        let checkBlockResult = {};
        checkBlockResult.index = index;
        checkBlockResult.checkResult = false;
        let check = checkBlockResult.index < source.length;
        console.log(index, source, bracketsConfig, opener);
        while (check) {
            let symbol = source[checkBlockResult.index];
            let brackets = bracketsConfig.filter((e) => e.indexOf(symbol) !== -1)[0];
            let ind = brackets.indexOf(symbol);
            if (brackets[0] === brackets[1]) {
                if (opener === 'undefined' && opener !== brackets[0]) {
                    ind = 0;
                } else if (opener === brackets[0]){
                    ind = 1;
                }
            }
            if (ind === 0) {
                //open block
                checkBlockResult = checkBlock(checkBlockResult.index + 1, source, bracketsConfig, symbol);
                if (!checkBlockResult.checkResult) {
                    check = false;
                } else {
                    checkBlockResult.index = checkBlockResult.index + 1;
                    check = checkBlockResult.index < source.length;
                }
            } else {
                //close block
                if (typeof opener !== 'undefined' && brackets[0] === opener) {
                    checkBlockResult.checkResult = true;
                } else {
                    checkBlockResult.checkResult = false;
                }
                check = false;
            }
        }
        console.log(checkBlockResult);
        return checkBlockResult;
    };

    return checkBlock(0, str, bracketsConfig).checkResult;
};