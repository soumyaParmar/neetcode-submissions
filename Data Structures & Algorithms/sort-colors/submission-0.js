class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let red = 0, white = 0, blue = 0;
        for (let i of nums){
            if(i == 0){
                nums[blue++] = 2;
                nums[white++] = 1;
                nums[red++] = 0;
            }
            if(i==1){
                nums[blue++] = 2;
                nums[white++] = 1;
            }
            if(i == 2){
                nums[blue++] = 2;
            }
        }
    }
}
