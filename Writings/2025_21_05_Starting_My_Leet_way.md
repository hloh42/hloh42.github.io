---
title: "Starting My Leet Way"
date: 2025-05-21
tags: ["42Singapore" "Core" "Order Control"]
author: "hloh42"
---


> <span style="font-size:2.5em;">My Leet Way</span>

><span style="font-size:1.75em;">Order Control - Path Less taken, Chapter - paving the foundation</span>

After completing Libft , I think the next foundation to tackle first would be data structs , whether it was taught in the 42 curriculum was not part of my concern.

I personally deemed it important and created a datastruct_ft , asking the ai for guidance and create the following  : 

---

# datastruct_ft

## Project Overview

**Goal:**
Implement a library of fundamental data structures in C (or your preferred language). For each data structure:

- Implement the core operations.
- Write a brief report describing the Big O complexity of each operation.
- Reflect on use cases, trade-offs, and implementation challenges.

---

## Exercise List

### 1. **Singly Linked List**

- Implement: `push_front`, `push_back`, `pop_front`, `pop_back`, `find`, `delete`
- Report:
    - What is the time complexity of each operation?
    - When is a singly linked list preferable over an array?


### 2. **Doubly Linked List**

- Implement: All singly linked list operations plus `insert_before`, `insert_after`
- Report:
    - How does the extra pointer affect performance and memory?
    - Compare with singly linked list.


### 3. **Stack (Array and Linked List Implementations)**

- Implement: `push`, `pop`, `peek`, `is_empty`
- Report:
    - Compare array-based and linked-list-based stacks in terms of time, space, and use cases.


### 4. **Queue (Array and Linked List Implementations)**

- Implement: `enqueue`, `dequeue`, `peek`, `is_empty`
- Report:
    - Discuss FIFO behavior and real-world applications.


### 5. **Circular Buffer (Ring Buffer)**

- Implement: `enqueue`, `dequeue`, `is_full`, `is_empty`
- Report:
    - What are the advantages for fixed-size streaming data?


### 6. **Dynamic Array (Vector)**

- Implement: `append`, `insert`, `delete`, `resize`
- Report:
    - Analyze amortized time complexity of append and resize.


### 7. **Hash Table (with Separate Chaining)**

- Implement: `insert`, `search`, `delete`
- Report:
    - What is the expected and worst-case complexity?
    - How does load factor affect performance?


### 8. **Binary Search Tree (BST)**

- Implement: `insert`, `search`, `delete`, `inorder_traversal`
- Report:
    - What is the best and worst-case complexity?
    - When does BST degenerate?


### 9. **Heap (Min-Heap or Max-Heap)**

- Implement: `insert`, `extract_min`/`extract_max`, `peek`
- Report:
    - How does the heap support priority queue operations?
    - What is the time complexity for each operation?


### 10. **Trie (Prefix Tree)**

- Implement: `insert`, `search`, `delete`
- Report:
    - Why are tries efficient for prefix searching?
    - What is the space-time trade-off?


### 11. **Graph (Adjacency List)**

- Implement: Add/remove vertex, add/remove edge, BFS, DFS
- Report:
    - Compare adjacency list vs matrix for sparse and dense graphs.

---

## Reporting Template

For each data structure, include:

- **Implementation summary:** Briefly describe your approach.
- **Big O analysis:** Table of operations and their time/space complexity.
- **Use cases:** Where is this structure most useful?
- **Trade-offs:** When would you *not* use it?
- **Reflection:** What did you find challenging or interesting?

---

## Example: Stack (Array Implementation)

| Operation | Time Complexity | Space Complexity |
| :-- | :-- | :-- |
| push | O(1) (amortized with resizing) | O(n) |
| pop | O(1) | O(n) |
| peek | O(1) | O(n) |

**Use cases:** Function call management, undo features, parsing expressions
**Trade-offs:** Fixed size unless resizing; resizing incurs O(n) cost occasionally
**Reflection:** Implementing resizing logic was tricky but clarified amortized analysis.

---

## Submission

- Submit your code and a PDF report for each data structure, following the template.
- Bonus: Visualize the data structure operations or benchmark them with real data.

---


Your benefits if you choose to do so to :
| Benefit                      | Description                                                                      |
|------------------------------|----------------------------------------------------------------------------------|
| Deep technical understanding | You’ll know the “how” and “why” of each structure                                |
| Analytical skills            | You’ll be able to analyze and justify design choices                             |
| Coding proficiency           | You’ll get better at writing, debugging, and testing C code                      |
| Communication                | You’ll practice explaining complex ideas clearly                                 |
| Career readiness             | You’ll be better prepared for interviews and have a strong portfolio project     |


```c 

```



