class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let len = nums.length;
        let concatedArray = []
        for(let i=0;i<len;i++){
            concatedArray[i] = nums[i];
            concatedArray[i + len] = nums[i]
        }
        return concatedArray;
    }
}
