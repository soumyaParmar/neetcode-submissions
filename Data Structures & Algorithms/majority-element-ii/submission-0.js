class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let freq = {};
        let target = Math.floor(nums.length/3);
        let newNums = []

        for(let i=0;i<nums.length;i++){
            freq[nums[i]] = (freq[nums[i]] || 0) + 1;
        }

        for(let [key,value] of Object.entries(freq)){
            if(value > target){
                newNums.push(key)
            }
        }

        return newNums.map(Number)
    }
}
