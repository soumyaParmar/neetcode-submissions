class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let j=s1.length;

        for(let i=0;i<s2.length;i++){
            let s = s2.substring(i,j);
            if(this.checkEqualFreq(s1,s)){
                return true
            }
            j++;
        }

        return false;
    }

    checkEqualFreq(s1,s2){
        let arr = new Array(26).fill(0);
        for(let i = 0;i<s1.length;i++){
            arr[s1.charCodeAt(i) - 97]++;
            arr[s2.charCodeAt(i) - 97]--;
        }

        return !arr.some(i => i!==0);
    }
}
