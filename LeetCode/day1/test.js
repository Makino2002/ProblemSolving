import ListNode from "./ListNode/ListNode.js";
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = x + y + carry;
    // LOOP1: carry = 0, sum = 7
    carry = Math.floor(sum / 10);
    // LOOP1: carry = 0, sum = 7
    current.next = new ListNode(sum % 10);
    // LOOP1: current = 7
    current = current.next;
    // LOOP1: l1 = 2, l2 = 5
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));
