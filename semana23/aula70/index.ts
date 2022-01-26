// Exercício 01
class NodeItens {
  constructor(public value: any, public next: NodeItens | null = null) {}
}

class LinkedList {
  constructor(public head: NodeItens | null = null) {}

  add(value: any): void {
    if (!this.head) {
      this.head = new NodeItens(value);
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new NodeItens(value);
  }
  search(value: any): NodeItens | null {
    if (!this.head) {
      return null;
    }

    let currentNode: NodeItens | null = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

//Gabarito
// export class LinkedList {
//   constructor(public start?: LinkedListNode) {}

//   public appendToTail(value: number) {
//     if (!this.start) {
//       this.start = new LinkedListNode(value);
//     } else {
//       let node: LinkedListNode = this.start;
//       while (node && node.getNext() !== undefined) {
//         node = node.getNext()!;
//       }
//       node.setNext(new LinkedListNode(value));
//     }
//   }

//   public print(): void {
//     let node: LinkedListNode | undefined = this.start;
//     let i = 1;
//     while (node !== undefined) {
//       console.log(`Elemento ${i}: `, node!.getData());
//       node = node!.getNext();
//       i++;
//     }
//   }
// }

// Exercício 02
class Stacks {
  constructor(
    private frame: any[] = [],
    public length: number = 0,
    public frames: LinkedList = new LinkedList()
  ) {}

  public isEmpty = (): boolean => this.frames.head === null;

  push(item: any): void {
    this.frame[this.frame.length] = item;
    this.length++;
  }

  pop(): any {
    const lastItem = this.frame[this.frame.length - 1];
    this.frame.length--;
    this.length--;
    return lastItem;
  }

  peek(): any {
    return this.frame[this.frame.length - 1];
  }
}

// Gabarito
// class Stack {
//   constructor(public frames: LinkedList = new LinkedList()) {}

//   public isEmpty = (): boolean => this.frames.start === null;

//   public push = (value: any): void => {
//     this.frames.addToTail(value);
//   };

//   public pop = (): any => {
//     if (!this.isEmpty()) return null;

//     let previousNode: ListNode | null = null;
//     let currentNode: ListNode | null = this.frames.start;

//     while (currentNode!.next) {
//       previousNode = currentNode;
//       currentNode = currentNode!.next;
//     }

//     previousNode!.next = null;

//     return currentNode;
//   };
// }

//Exercício 03
class Queue {
  constructor(private items: any[] = [], public length: number = 0) {}

  enqueue(item: any): void {
    this.items[this.items.length] = item;
    this.length++;
  }

  dequeue(): any {
    const firstItem = this.items[0];

    for (let i = 0; i < this.items.length; i++) {
      this.items[i] = this.items[i + 1];
    }

    this.items.length--; // Joga fora o último elemento
    this.length--;
    return firstItem;
  }

  front(): any {
    return this.items[0];
  }
}

//GABARITO
// class Queue {
//   constructor(
//      public items: any[] = []
//   ) { }

//   public isEmpty = (): boolean => this.items.length === 0

//   public enqueue = (
//      value: any
//   ): void => {
//      const index = this.items.length
//      this.items[index] = value
//   }

//   public dequeue = (): ListNode | null => {

//      const removedItem = this.items[0]

//      for (let i = 0; i < this.items.length; i++) {
//         this.items[i] = this.items[i + 1];
//      }

//      this.items.length--

//      return removedItem
//   }
// }

//Gabarito Desafio
export class DoublyLinkedList {
  constructor(public start?: DoublyLinkedListNode) {}

  public appendToTail(value: number) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.start) {
      this.start = newNode;
    } else {
      let node = this.start;
      while (node.getNext() !== undefined) {
        node = node.getNext()!;
      }
      node.setNext(newNode);
      newNode.setPrevious(node);
    }
  }

  public print(): void {
    let i = 1;
    let node = this.start;
    while (node !== undefined) {
      console.log(`Elemento ${i}`);
      console.log(" ", node);
      node = node.getNext();
      i++;
    }
    console.log();
  }

  public searchElement(value: number): DoublyLinkedListNode | undefined {
    let node = this.start;
    while (node !== undefined && node.value !== value) {
      node = node.getNext();
    }
    return node;
  }

  public deleteElement(value: number): DoublyLinkedListNode | undefined {
    let node = this.searchElement(value);
    if (node) {
      const previous = node.getPrevious();
      const next = node.getNext();
      if (next) {
        next.setPrevious(previous);
      }
      if (previous) {
        previous.setNext(next);
      } else {
        this.start = next;
      }
    }
    return node;
  }
}

export class DoublyLinkedListNode {
  constructor(public value: number) {}

  private previous?: DoublyLinkedListNode;
  private next?: DoublyLinkedListNode;

  public setPrevious(node?: DoublyLinkedListNode) {
    this.previous = node;
  }

  public getPrevious(): DoublyLinkedListNode | undefined {
    return this.previous;
  }

  public setNext(node?: DoublyLinkedListNode) {
    this.next = node;
  }

  public getNext(): DoublyLinkedListNode | undefined {
    return this.next;
  }
}
