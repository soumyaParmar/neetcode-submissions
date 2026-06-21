class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length)  return false;
      const object = {}
      s.split('').forEach((item)=>{
        object[item] = (object[item] ?? 0) + 1
      })
      t.split('').forEach((item)=>{
        object[item] = object[item] ? object[item] - 1  :  1
      })
      return !Object.values(object).some(item => item > 0)
    }
}
