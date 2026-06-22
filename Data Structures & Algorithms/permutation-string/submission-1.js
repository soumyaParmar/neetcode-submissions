class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let j=s1.length;
        let arr1 = new Array(26).fill(0);
        let arr2 = new Array(26).fill(0);
        for(let i=0;i<s1.length;i++){
            arr1[s1.charCodeAt(i) - 97]++;
            arr2[s2.charCodeAt(i) - 97]++
        }

        if(this.checkEqualFreq(arr1,arr2)) return true

        for(let i=j;i<s2.length;i++){
            arr2[s2.charCodeAt(i) - 97]++;
            arr2[s2.charCodeAt(i-j) - 97]--;

            if(this.checkEqualFreq(arr1,arr2)) return true
        }

        return false;
    }

    checkEqualFreq(s1,s2){
        
        for(let i = 0;i<s1.length;i++){
            if(s1[i] !== s2[i]){
                return false
            }
        }

        return true;
    }
}
