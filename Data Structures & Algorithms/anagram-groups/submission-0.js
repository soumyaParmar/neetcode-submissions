class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedKeyWithVal = {}
        for(let s of strs){
            let sortedChar = s.split("").sort().join("");
            if(!sortedKeyWithVal[sortedChar]){
                sortedKeyWithVal[sortedChar] = [];
            }
            sortedKeyWithVal[sortedChar].push(s)
            
        }
        return Object.values(sortedKeyWithVal)
    }
}
