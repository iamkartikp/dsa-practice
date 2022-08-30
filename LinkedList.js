class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append = (data) => {
        const newNode = {
            value: data,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }

    prepend = (data) => {
        const newNode = {
            value: data,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    traverse = () => {
        while(this.head.next != null) {
            console.log(this.head.value);
            this.head = this.head.next;
        }
    }
}

const myLL = new LinkedList(10)
myLL.append(20)
myLL.prepend(30)
myLL.traverse()