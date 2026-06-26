class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let left = 0;
        let right = 0;
        let newStr = "";
        
        while(left < word1.length && right < word2.length){
            
                newStr += word1[left++] + word2[right++];
            
        }

        newStr += word1.substring(left, word1.length) + word2.substring(right, word2.length);
        return newStr
    }
}
