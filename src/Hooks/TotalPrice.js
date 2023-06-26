
/*
    @param {array} prod
    @return {number} precio total del array
*/
export const TotalPrice = (prod) => {
    let sum = 0;
    prod.forEach(element => {
        sum += element.price
    });
    return sum;
};