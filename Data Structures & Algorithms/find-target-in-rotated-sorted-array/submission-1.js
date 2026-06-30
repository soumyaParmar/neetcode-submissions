class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while(l<r){
            const m = l + Math.floor((r-l)/2);
            if(nums[m]>nums[r]){
                 l = m + 1;
            }else{
                r = m;
            }
        }
        
        let pivot = l;

        let res = this.binarySearch(nums,0,pivot-1,target);

        if(res === -1){
            res = this.binarySearch(nums,pivot,nums.length - 1,target)
        }

        return res;
    }

    binarySearch(nums,l,r,t){
        while(l<=r){
            const mid = l + Math.floor((r-l)/2);

            if(nums[mid] === t){
                return mid
            }else if(nums[mid] > t){
                r = mid - 1;
            }else{
                l = mid + 1
            }
        }
        return -1;
    }
}
