module.exports = function makeExchange(currency) {
    let nomination = ["H","Q","D","N","P"];
    let rate = [50,25,10,5,1];
    let quantity = [];
    let result = {};
    let tmp;

    if (currency <= 0) {
        return {};
    }
    else if(currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else {
        for (let i = 0; i < rate.length; i++) {
            quantity.push(parseInt(currency / rate[i]));
            currency = currency - quantity[i] * rate[i];
        }
    }
    for (let i = 0; i < quantity.length; i++) {
        if (quantity[i] > 0) {
            tmp = nomination[i];
            result[tmp] = quantity[i];
        }
    }
    return result;
};
