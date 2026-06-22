class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const counts = new Array(26).fill(0);
        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            const rightCharIdx = s.charCodeAt(right) - 65;
            counts[rightCharIdx]++;
            maxFreq = Math.max(maxFreq, counts[rightCharIdx]);

            if (right - left + 1 - maxFreq > k) {
                const leftCharIdx = s.charCodeAt(left) - 65;
                counts[leftCharIdx]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
