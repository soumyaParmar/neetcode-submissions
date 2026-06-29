class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let r = matrix[0].length - 1;
        let c = matrix.length - 1;

        for(let i = 0; i<= c ; i++){
             if(matrix[i][0] <= target && matrix[i][r] >= target){
                return  this.binarySearch(matrix[i],target)
             }
        }

        return false;
    }

    binarySearch(arr, target){
        let i = 0;
        let j = arr.length - 1;

        while(i<=j){
            let mid = i + Math.floor((j-i)/2);

            if(arr[mid] === target){
                return true;
            }else if(arr[mid] > target){
                j = mid - 1
            }else{
                i = mid + 1;
            }
        }

        return false;
    }
}
