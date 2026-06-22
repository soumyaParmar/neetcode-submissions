class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let arr = [];
        let arr2 = [], sum1 = -Infinity;

        for(let i=0;i<k;i++){
            arr.push(nums[i])
        }

        arr2.push(this.findMax(arr))

        for(let i=k;i<nums.length;i++){
            arr.shift();
            arr.push(nums[i])
            arr2.push(this.findMax(arr))
        }

        return arr2
    }

    findMax(nums){
        let max = -Infinity
        for(let i=0;i<nums.length;i++){
            max = Math.max(max,nums[i]);
        }

        return max
    }
}
