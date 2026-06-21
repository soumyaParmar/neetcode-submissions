class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let obj = {};
        for(let i of nums){
            obj[i] = (obj[i] ?? 0) + 1
        }

        let x = Object.entries(obj).find(([key,val])=> val > (nums.length/2))
        return x[0]
    }
}
