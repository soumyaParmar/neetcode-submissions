class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 1) return 1;
        if(!nums.length) return 0;

        let set = new Set(nums);
   
        let max = 1;
        let len = 1;

        for(let i of set){
            let start = 0;
            if(!set.has(i-1)){
                start = i;
                len = 1;
            }
            while(!set.has(i-1) && set.has(start + len)){
                len++;
            }
            max = Math.max(max,len)
        }
        return max;
    }
}
