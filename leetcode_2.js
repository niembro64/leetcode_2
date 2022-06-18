class ListNode {
    // constructor
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// linkedlist class
class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds an val at the end
    // of list
    add(val) {
        // creates a new node
        var node = new ListNode(val);

        // to store current node
        var current;

        // if list is Empty add the
        // val and make it head
        if (this.head == null) this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    // insert val at the position index
    // of the list
    insertAt(val, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            // creates a new node
            var node = new ListNode(val);
            var curr, prev;

            curr = this.head;

            // add the val to the
            // first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an val
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // removes an val from the
    // specified location
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var curr,
                prev,
                it = 0;
            curr = this.head;
            prev = curr;

            // deleting first val
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an val
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the val
                prev.next = curr.next;
            }
            this.size--;

            // return the remove val
            return curr.val;
        }
    }

    // removes a given val from the
    // list
    removeElement(val) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing val with current
            // val if found then remove the
            // and return true
            if (current.val === val) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.val;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // finds the index of val
    indexOf(val) {
        var count = 0;
        var current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each val of the list
            // with given val
            if (current.val === val) return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }

    // prints the list items
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.val + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

// creating an object for the
// Linkedlist class
var l1 = new Linkedlist();
var l2 = new Linkedlist();

var s1 = [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
];
var s2 = [5, 6, 4];
for (var i = 0; i < s1.length; i++) {
    l1.add(s1[i]);
}
for (var i = 0; i < s2.length; i++) {
    l2.add(s2[i]);
}

// l1.add(2);
// l1.add(4);
// l1.add(3);

// l2.add(5);
// l2.add(6);
// l2.add(4);

l1.printList();
console.log("----------");
l2.printList();
console.log("----------");

///////////////
// console.log(l1, l2);
// console.log("----------");
l1 = l1.head;
l2 = l2.head;

var sumBaseCarry = (a, b, c) => {
    var sum = a + b + c;
    var sum_base = sum % 10;
    var sum_carry = Math.trunc(sum / 10);
    return [sum_base, sum_carry];
};

var addTwoNumbers = function (l1, l2) {
    var r1 = l1;
    var r2 = l2;
    var sum_base = 0;
    var sum_carry = 0;
    [sum_base, sum_carry] = sumBaseCarry(r1.val, r2.val, sum_carry);

    var head = new ListNode(sum_base);
    var r3 = head;
    r1 = r1.next;
    r2 = r2.next;

    while (r1 || r2) {
        [sum_base, sum_carry] = sumBaseCarry(
            r1 ? r1.val : 0,
            r2 ? r2.val : 0,
            sum_carry
        );
        r3.next = new ListNode(sum_base);
        r1 = r1 ? r1.next : null;
        r2 = r2 ? r2.next : null;
        r3 = r3.next;
    }
    if (sum_carry > 0) {
        r3.next = new ListNode(sum_carry);
    }

    return head;
};

var pList = (a) => {
    while (a) {
        console.log(a.val, " ");
        a = a.next;
    }
};

pList(addTwoNumbers(l1, l2));
