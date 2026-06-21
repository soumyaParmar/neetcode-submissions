class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b)
        let arr = [];
        let n = nums.length;

        for(let i = 0;i<n-2;i++){
            let j = i+1;
            let k = n-1;
            if(i>0 && nums[i] === nums[i-1]) continue;

            while(j<k){
                let sum = nums[i] + nums[j] + nums[k]
                if(sum === 0){
                    arr.push([nums[i],nums[j], nums[k]])
                    while(j<k && nums[j] === nums[j+1]) j++;
                    while(j<k && nums[k] === nums[k-1]) k--;
                    j++;
                    k--;
                }else if(sum<0){
                    j++;
                }else{
                    k--
                }
                
            }
        }
        return arr;
    }
}
