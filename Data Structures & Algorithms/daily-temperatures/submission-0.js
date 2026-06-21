class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let len = temperatures.length
        let res = new Array(len).fill(0);
        let stack = [];

        for(let i=0;i<len;i++){
            let t = temperatures[i];

            while(stack.length > 0 && stack[stack.length -1][0] < t){
                let [temp , index] = stack.pop();
                res[index] = i - index;
            }

            stack.push([t,i]);
        }
        return res;
    }
}
