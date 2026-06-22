class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0, j = height.length - 1;
        let leftMax = height[i] , rightMax = height[j];
        let res = 0;

        while(i<j){
            if(leftMax < rightMax){
                i+=1;
                leftMax = Math.max(leftMax,height[i]);
                res += leftMax - height[i];
                
            }else{
                j-=1;
                rightMax = Math.max(rightMax,height[j]);
                res += rightMax - height[j];
                
            }
        }

        return res;
    }
}
