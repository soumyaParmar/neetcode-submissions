class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(!s.length) return false;
        let stack = [];
        let map = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        }

        for ( let x of s){
            if(x == '(' || x == '{' || x == '['){
                stack.push(x)
            }else{
                if(stack.pop() !== map[x]){
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
