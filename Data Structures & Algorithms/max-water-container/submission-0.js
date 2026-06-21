class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let num = 0;
        let area = 0;
        while(i < j){
            area = Math.min(heights[i],heights[j]) * (j-i);
            num = Math.max(num, area);
            if(heights[i] > heights[j]){
                j--;
            }else{
                i++;
            }
        }
        return num;
    }
}
