class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let candidate = null;
        for(let i of nums){
            if(count === 0){
                candidate = i
            }
            count += (i === candidate) ? 1 : -1
        }

        return candidate;
    }
}
