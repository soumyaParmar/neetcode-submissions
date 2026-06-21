class MyHashSet {
    hashsetArray = [];

    constructor() {}

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(this.contains(key)){
            return null
        }
        this.hashsetArray.push(key)
        return null
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(!this.contains(key)) return null;
        this.hashsetArray = this.hashsetArray.filter(item => item !== key);
        return null;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        if(this.hashsetArray.includes(key)){
            return true;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
