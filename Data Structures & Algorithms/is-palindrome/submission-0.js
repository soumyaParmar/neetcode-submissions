class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(!s) return false;
        let newstr = ""

        for(let i of s){
            if(this.isAlphanumeric(i)){
                newstr += i
            }
        }
        let x= newstr.split('').reverse().join('')
        console.log({newstr,x})
        return newstr.toLocaleLowerCase() === newstr.toLocaleLowerCase().split('').reverse().join('')
    }

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}
