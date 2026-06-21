class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let freq = new Array(26);

        for(let i=0;i<s.length;i++){
            freq[s.charCodeAt(i) - 97] = (freq[s.charCodeAt(i) - 97] || 0) + 1
            freq[t.charCodeAt(i) - 97] = (freq[t.charCodeAt(i) - 97] || 0) - 1
        }

        for(let i of freq){
            if(i < 0 || i > 0) return false
        }
        return true;
    }
}
