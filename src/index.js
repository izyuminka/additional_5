module.exports = function check(str, bracketsConfig) {
    let result = false;

        //let subStr = str;
        for (k = 0; k < str.length; k++) {
            bracketsConfig.forEach(function checkOpen(v) {
                if (v[0] === v[1]){
                    result = ((str.indexOf(v[1],k+1) - k) === 1 && k - (str.indexOf(v[0])) === 1
                        || ((str.indexOf(v[1],k+1) - k) % 2 === 1 )&& (k - str.indexOf(v[0])) % 2 === 1);
                }
                else if (str[k] == v[0] && str.indexOf(v[1]) > -1 && str.indexOf(v[1]) > str.indexOf(v[0])) {
                    result = (str.indexOf(v[1]) - k) === 1 || (str.indexOf(v[1]) - k) % 2 === 1;
                    //subStr = subStr.slice(k);
                    //let subStr1 = subStr.slice(0, ind);
                    //let subStr2 = subStr.slice(ind+1, subStr.length);
                    //subStr = subStr1 + subStr2;
                }
                else if (str[k] == v[1] && str.indexOf(v[0]) > -1 && str.indexOf(v[1]) > str.indexOf(v[0])) {
                    result = k - (str.indexOf(v[0])) === 1 || (k - str.indexOf(v[0])) % 2 === 1;
                }
                /*else  {
                    //break;
                    return result = ;

                }*/
            })
        }

        //result = str.includes(v[0]) && str.includes(v[1]);
        //return result;
    return result;
};