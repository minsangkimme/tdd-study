class Stack {
    constructor() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    push(item) {
        this.items.push(item);
    }
    
    pop() {
        if (this.items.length === 0) {
            throw new Error("Stack is empty");
        }
        
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            throw new Error("Stack is empty");
        }

        return this.items[this.size() - 1];
    }

}

module.exports = Stack;