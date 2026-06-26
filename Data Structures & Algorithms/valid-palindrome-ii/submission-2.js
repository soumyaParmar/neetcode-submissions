class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        let i = 0;
        let j = s.length - 1;
        let count = 1;

        while(i<=j){
            if(s[i] === s[j]){
                i++;
                j--;
            }else{
                return this.isPalindromeic(s,i+1,j) || this.isPalindromeic(s,i,j-1)
            }
        }

        return true;

    }

    isPalindromeic(s,l,r){
        while(l<r){
            if(s[l] !== s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
