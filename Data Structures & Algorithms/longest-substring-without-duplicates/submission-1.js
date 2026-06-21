class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let maxSize = 0;
        let y = 0
        for(let x = 0;x<s.length;x++){
            while(set.has(s[x])){
                set.delete(s[y]);
                y++;
            }
            set.add(s[x]);
            maxSize = Math.max(maxSize,x-y+1)
        }

        return maxSize;
    }
}
