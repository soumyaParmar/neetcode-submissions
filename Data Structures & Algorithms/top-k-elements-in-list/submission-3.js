class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const set = {};
        
        for (let i = 0; i<nums.length;i++){
            set[nums[i]] = (set[nums[i]] || 0) + 1 
        }

        let newNums = Object.entries(set).map(([val,freq])=>([
            freq,
            parseInt(val)
        ]))

        let sortednum = newNums.sort((a,b)=> b[0]-a[0])

        return sortednum.slice(0,k).map(val => val[1])
    }
}
