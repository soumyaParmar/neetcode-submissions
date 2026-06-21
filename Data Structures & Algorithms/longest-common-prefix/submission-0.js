class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(!strs.length) return ""
        if(strs.length == 1) return strs[0];
        let longestPrefix = strs[0];

        for(let i = 1; i<strs.length; i++){
            let j = strs[i];
            while(longestPrefix != j && longestPrefix.length != 0){
                if(longestPrefix.length < j.length){
                   j = strs[i].substring(0,j.length-1) 
                }else if(longestPrefix.length > j.length){
                    longestPrefix = longestPrefix.substring(0,longestPrefix.length-1)
                }else{
                    longestPrefix = longestPrefix.substring(0,longestPrefix.length-1)
                    j = strs[i].substring(0,j.length-1)
                }
                
                
            }
        }

        return longestPrefix
    }
}
