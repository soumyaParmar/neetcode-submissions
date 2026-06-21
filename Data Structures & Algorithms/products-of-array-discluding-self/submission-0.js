class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const pre = [];
        const suf = [];
        const res = [];
        let n = nums.length;
        let pre_prod = 1;
        let suf_prod = 1;

        for(let i=0,j=n-1;i<n,j>=0;i++,j--){
            pre[i] = pre_prod;
            pre_prod *= nums[i];

            suf[j] = suf_prod;
            suf_prod *= nums[j]
        }

        for(let i=0;i<n;i++){
            res[i] = pre[i] * suf[i]
        }
        return res;
    }
}
