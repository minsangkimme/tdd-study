const Stack = require('../stack.js');

describe("Stack", () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it("초기 상태의 배열 길이는 0 이어야 한다", () => {
        expect(stack.size()).toBe(0);
    });

    it("아이템을 push 할 수 있어야 한다.", () => {
        stack.push(1);
        expect(stack.size()).toBe(1);
    });

    describe("Pop", () => {
        it("배열이 비어있을 때 pop() 실행하면 에러발생", () => {
            expect(() => {
                stack.pop();
            }).toThrow("Stack is empty");
        });

        it("배열 마지막 값이 원본 배열에서 제거되어야함", () => {
            stack.push("🍓");
            stack.push("🥛");

            expect(stack.pop()).toBe("🥛");
            expect(stack.size()).toBe(1);
        });
    });

    describe("Peek", () => {
        it("배열이 비어있을 때 확인하는 경우 에러발생", () => {
            expect(() => {
                stack.peek();
            }).toThrow("Stack is empty");
        });

        it("배열 마지막 값 확인", () => {
            stack.push("🍓");
            stack.push("🥛");

            expect(stack.peek()).toBe("🥛");
            expect(stack.size()).toBe(2);
        });
    });
});