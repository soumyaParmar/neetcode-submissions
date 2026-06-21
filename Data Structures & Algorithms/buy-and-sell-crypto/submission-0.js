class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let len = prices.length;
        let min = prices[0];
        let diff = 0;

        for(let i = 0 ; i < len ; i++){
            min = Math.min(min,prices[i])
            diff = Math.max(diff , prices[i] - min);
        }
        return diff;
    }
}
