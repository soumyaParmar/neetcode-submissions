class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for(let s of strs){
            let arr = new Array(26).fill(0);

            for(let char of s){
                arr[char.charCodeAt(char) - 97]++
            }

            let key = arr.join("#");

            if(!map[key]){
                map[key]= []
            }
            map[key].push(s)
            
        }
        return Object.values(map)
    }
}
