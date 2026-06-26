class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let newStr = "";
        let maxLen = Math.max(word1.length,word2.length)

        for(let i = 0; i< maxLen;i++){
            if(i < word1.length) newStr += word1[i];
            if(i < word2.length) newStr += word2[i];
        }

        return newStr;
    }
}
