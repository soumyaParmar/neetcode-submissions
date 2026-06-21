class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length)  return false;
      const object = {}
      for(let char of s){
        object[char] = (object[char] ?? 0) + 1
      }
      for (let char of t){
        if(!object[char]) return false;
        object[char]--
      }
      return true
    }
}
