1.Searching & Sorting

#include <iostream>
#include <cstring>
#include <cstdlib>
#include <chrono>
using namespace std;
using namespace std::chrono;

struct Student {
    int id;
    char name[50];
    float cgpa;
};

void addStudent(Student*& students, int& n) {
    Student newStudent;
    cout << "Enter ID: ";
    cin >> newStudent.id;
    cout << "Enter Name: ";
    cin.ignore();
    cin.getline(newStudent.name, 50);
    cout << "Enter CGPA: ";
    cin >> newStudent.cgpa;
    students = (Student*)realloc(students, (n + 1) * sizeof(Student));
    students[n] = newStudent;
    n++;
    cout << "Student added successfully!\n";
}

void displayStudents(Student* students, int n) {
    cout << "\n--- Student Records ---\n";
    for (int i = 0; i < n; i++) {
        cout << "ID: " << students[i].id
             << "\tName: " << students[i].name
             << "\tCGPA: " << students[i].cgpa << endl;
    }
    cout << "-----------------------\n";
}

int linearSearch(Student* students, int n, int key) {
    for (int i = 0; i < n; i++) {
        if (students[i].id == key)
            return i;
    }
    return -1;
}

int binarySearch(Student* students, int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (students[mid].id == key)
            return mid;
        else if (students[mid].id < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

void bubbleSortByName(Student* students, int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (strcmp(students[j].name, students[j + 1].name) > 0) {
                swap(students[j], students[j + 1]);
            }
        }
    }
    cout << "Sorted by Name (Alphabetically).\n";
}

void selectionSortByCGPA(Student* students, int n, bool ascending = true) {
    for (int i = 0; i < n - 1; i++) {
        int idx = i;
        for (int j = i + 1; j < n; j++) {
            if (ascending ? (students[j].cgpa < students[idx].cgpa)
                          : (students[j].cgpa > students[idx].cgpa)) {
                idx = j;
            }
        }
        swap(students[i], students[idx]);
    }
    cout << "Sorted by CGPA (" << (ascending ? "Ascending" : "Descending") << ").\n";
}

void compareSearchPerformance(Student* students, int n, int key) {
    auto start1 = high_resolution_clock::now();
    int linResult = linearSearch(students, n, key);
    auto stop1 = high_resolution_clock::now();

    auto start2 = high_resolution_clock::now();
    int binResult = binarySearch(students, n, key);
    auto stop2 = high_resolution_clock::now();

    auto linearTime = duration_cast<nanoseconds>(stop1 - start1).count();
    auto binaryTime = duration_cast<nanoseconds>(stop2 - start2).count();

    cout << "\nLinear Search: ";
    if (linResult != -1)
        cout << "Found at index " << linResult;
    else
        cout << "Not found";
    cout << " | Time: " << linearTime << " ns";

    cout << "\nBinary Search: ";
    if (binResult != -1)
        cout << "Found at index " << binResult;
    else
        cout << "Not found";
    cout << " | Time: " << binaryTime << " ns\n";
}

int main() {
    Student* students = nullptr;
    int n = 0, choice;

    do {
        cout << "\n=== Student Database Menu ===";
        cout << "\n1. Add Student";
        cout << "\n2. Display Students";
        cout << "\n3. Linear Search by ID";
        cout << "\n4. Binary Search by ID (Sorted)";
        cout << "\n5. Sort by Name (Bubble Sort)";
        cout << "\n6. Sort by CGPA (Selection Sort)";
        cout << "\n7. Compare Search Performance";
        cout << "\n8. Exit";
        cout << "\nEnter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                addStudent(students, n);
                break;
            case 2:
                displayStudents(students, n);
                break;
            case 3: {
                int id;
                cout << "Enter ID to search: ";
                cin >> id;
                int index = linearSearch(students, n, id);
                if (index != -1)
                    cout << "Found: " << students[index].name << " (CGPA: " << students[index].cgpa << ")\n";
                else
                    cout << "Student not found.\n";
                break;
            }
            case 4: {
                int id;
                cout << "Enter ID to search (Binary): ";
                cin >> id;
                int index = binarySearch(students, n, id);
                if (index != -1)
                    cout << "Found: " << students[index].name << " (CGPA: " << students[index].cgpa << ")\n";
                else
                    cout << "Student not found.\n";
                break;
            }
            case 5:
                bubbleSortByName(students, n);
                break;
            case 6: {
                int order;
                cout << "1. Ascending\n2. Descending\nChoose order: ";
                cin >> order;
                selectionSortByCGPA(students, n, order == 1);
                break;
            }
            case 7: {
                int id;
                cout << "Enter ID to compare search times: ";
                cin >> id;
                compareSearchPerformance(students, n, id);
                break;
            }
            case 8:
                cout << "Exiting program...\n";
                break;
            default:
                cout << "Invalid choice!\n";
        }
    } while (choice != 8);

    free(students);
    return 0;
}





2.Stack


#include <iostream>
#include <cctype>
using namespace std;

struct node {
    char data;
    node* next;
};

class stack {
    node* top;
public:
    stack() { top = NULL; }

    int isempty() {
        return (top == NULL);
    }

    void push(char x) {
        node* p = new node();
        p->data = x;
        p->next = top;
        top = p;
    }

    char pop() {
        if (isempty()) return '\0';
        node* p = top;
        char x = p->data;
        top = top->next;
        delete p;
        return x;
    }

    char topdata() {
        if (isempty()) return '\0';
        return top->data;
    }
};

int precedence(char x) {
    if (x == '(') return 0;
    if (x == '+' || x == '-') return 1;
    if (x == '*' || x == '/') return 2;
    return 3;
}

void infix_postfix(char infix[20], char postfix[20]) {
    stack s;
    int i, j = 0;
    char token, x;

    for (i = 0; infix[i] != '\0'; i++) {
        token = infix[i];
        if (isalnum(token)) {
            postfix[j++] = token;
        } else {
            if (token == '(') {
                s.push(token);
            } else if (token == ')') {
                while ((x = s.pop()) != '(') {
                    postfix[j++] = x;
                }
            } else {
                while (!s.isempty() && precedence(token) <= precedence(s.topdata())) {
                    postfix[j++] = s.pop();
                }
                s.push(token);
            }
        }
    }

    while (!s.isempty()) {
        postfix[j++] = s.pop();
    }

    postfix[j] = '\0';
}

void reverse(char a[20], char b[20]) {
    int i = 0, j = 0;
    while (a[i] != '\0') i++;
    i--;
    for (j = 0; i >= 0; j++, i--) {
        if (a[i] == '(')
            b[j] = ')';
        else if (a[i] == ')')
            b[j] = '(';
        else
            b[j] = a[i];
    }
    b[j] = '\0';
}

void infix_prefix(char infix[20], char prefix[20]) {
    char infix1[20], prefix1[20];
    reverse(infix, infix1);
    infix_postfix(infix1, prefix1);
    reverse(prefix1, prefix);
}

int main() {
    char infix[20], postfix[20], prefix[20];
    int ch;

    do {
        cout << "\n1. Infix to Postfix Conversion";
        cout << "\n2. Infix to Prefix Conversion";
        cout << "\n3. Exit";
        cout << "\nEnter your choice: ";
        cin >> ch;

        switch (ch) {
        case 1:
            cout << "\nEnter Infix Expression: ";
            cin >> infix;
            infix_postfix(infix, postfix);
            cout << "\nPostfix Expression: " << postfix << endl;
            break;

        case 2:
            cout << "\nEnter Infix Expression: ";
            cin >> infix;
            infix_prefix(infix, prefix);
            cout << "\nPrefix Expression: " << prefix << endl;
            break;

        case 3:
            cout << "\nExiting...\n";
            break;

        default:
            cout << "\nInvalid choice. Try again.\n";
        }
    } while (ch != 3);

    return 0;
}




3. circular queue


#include <iostream>
using namespace std;
#define SIZE 5

class CircularQueue {
    int items[SIZE];
    int front, rear;

public:
    CircularQueue() {
        front = -1;
        rear = -1;
    }

    bool isFull() {
        return (front == 0 && rear == SIZE - 1) || (front == (rear + 1) % SIZE);
    }

    bool isEmpty() {
        return (front == -1);
    }

    void enqueue(int value) {
        if (isFull()) {
            cout << "\nQueue is FULL! Cannot insert " << value << endl;
            return;
        }
        if (front == -1)
            front = 0;
        rear = (rear + 1) % SIZE;
        items[rear] = value;
        cout << "\nInserted: " << value << endl;
    }

    void dequeue() {
        if (isEmpty()) {
            cout << "\nQueue is EMPTY! Nothing to delete.\n";
            return;
        }
        cout << "\nDeleted: " << items[front] << endl;
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            front = (front + 1) % SIZE;
        }
    }

    void display() {
        if (isEmpty()) {
            cout << "\nQueue is EMPTY!\n";
            return;
        }
        cout << "\nCircular Queue Elements: ";
        int i = front;
        while (true) {
            cout << items[i] << " ";
            if (i == rear)
                break;
            i = (i + 1) % SIZE;
        }
        cout << endl;
    }
};

int main() {
    CircularQueue q;
    int choice, value;
    do {
        cout << "\n===== CIRCULAR QUEUE MENU =====";
        cout << "\n1. Enqueue (Insert)";
        cout << "\n2. Dequeue (Delete)";
        cout << "\n3. Display Queue";
        cout << "\n4. Exit";
        cout << "\nEnter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value to insert: ";
                cin >> value;
                q.enqueue(value);
                break;
            case 2:
                q.dequeue();
                break;
            case 3:
                q.display();
                break;
            case 4:
                cout << "\nExiting program...\n";
                break;
            default:
                cout << "\nInvalid choice! Try again.\n";
        }
    } while (choice != 4);
    return 0;
}




4.BST


class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

class BST:
    def insert(self, root, x):
        if not root:
            return Node(x)
        if x < root.data:
            root.left = self.insert(root.left, x)
        elif x > root.data:
            root.right = self.insert(root.right, x)
        else:
            print("Value already exists in the BST.")
        return root
    
    def search(self, root, x):
        if not root or root.data == x:
            return root
        return self.search(root.left, x) if x < root.data else self.search(root.right, x)
    
    def delete(self, root, x):
        if not root:
            return root
        if x < root.data:
            root.left = self.delete(root.left, x)
        elif x > root.data:
            root.right = self.delete(root.right, x)
        else:
            if not root.left:
                return root.right
            elif not root.right:
                return root.left
            temp = self.min_value_node(root.right)
            root.data = temp.data
            root.right = self.delete(root.right, temp.data)
        return root
    
    def min_value_node(self, node):
        while node.left:
            node = node.left
        return node
    
    def inorder(self, root):
        if root:
            self.inorder(root.left)
            print(root.data, end=' ')
            self.inorder(root.right)

    def depth(self, root):
        return 0 if not root else 1 + max(self.depth(root.left), self.depth(root.right))
    
    def mirror(self, root):
        if root:
            root.left, root.right = root.right, root.left
            self.mirror(root.left)
            self.mirror(root.right)

    def copy(self, root):
        if not root:
            return None
        new_node = Node(root.data)
        new_node.left = self.copy(root.left)
        new_node.right = self.copy(root.right)
        return new_node
    
    def parents(self, root):
        if root:
            if root.left:
                print(root.data, "->", root.left.data)
            if root.right:
                print(root.data, "->", root.right.data)
            self.parents(root.left)
            self.parents(root.right)

    def leaves(self, root):
        if root:
            if not root.left and not root.right:
                print(root.data, end=' ')
            self.leaves(root.left)
            self.leaves(root.right)

    def level_wise(self, root):
        if not root:
            return
        q = [root]
        while q:
            current = q.pop(0)
            print(current.data, end=' ')
            if current.left:
                q.append(current.left)
            if current.right:
                q.append(current.right)


# --- main ---
bst, root = BST(), None
while True:
    print("\n1.Insert\n2.Delete\n3.Search\n4.Inorder Traversal\n5.Depth\n6.Mirror\n7.Copy\n8.Parents\n9.Leaves\n10.Level-wise Traversal\n11.Exit")
    choice = int(input("Enter your choice: "))
    if choice == 1:
        val = int(input("Enter value to insert: "))
        root = bst.insert(root, val)
    elif choice == 2:
        val = int(input("Enter value to delete: "))
        root = bst.delete(root, val)
    elif choice == 3:
        val = int(input("Enter value to search: "))
        result = bst.search(root, val)
        print("Found" if result else "Not Found")
    elif choice == 4:
        print("Inorder Traversal: ", end='')
        bst.inorder(root)
        print()
    elif choice == 5:
        print("Depth of BST:", bst.depth(root))
    elif choice == 6:
        bst.mirror(root)
        print("BST mirrored.")
    elif choice == 7:
        new_root = bst.copy(root)
        print("BST copied. Inorder of copied BST: ", end='')
        bst.inorder(new_root)
        print()
    elif choice == 8:
        print("Parent-Child relationships:")
        bst.parents(root)
    elif choice == 9:
        print("Leaves of BST: ", end='')
        bst.leaves(root)
        print()
    elif choice == 10:
        print("Level-wise Traversal: ", end='')
        bst.level_wise(root)
        print()
    elif choice == 11:
        break
    else:
        print("Invalid choice. Please try again.")



5.Kruskals algorithm

def find(p, i):
    if p[i] == i:
        return i
    return find(p, p[i])

def union(p, rank, x, y):
    x, y = find(p, x), find(p, y)
    if rank[x] < rank[y]:
        p[x] = y
    elif rank[x] > rank[y]:
        p[y] = x
    else:
        p[y] = x
        rank[x] += 1

V, E = map(int, input("Enter number of vertices and edges: ").split())
edges = []

vertices = set()
for _ in range(E):
    u, v, w = map(int, input("Enter edge (u v w): ").split())
    edges.append((w, u, v))
    vertices.update([u, v])

vertex_map = {v: i for i, v in enumerate(sorted(vertices))}

edges.sort()
p = [i for i in range(len(vertices))]
rank = [0] * len(vertices)
mst, cost = [], 0

for w, u, v in edges:
    u_idx, v_idx = vertex_map[u], vertex_map[v]
    if find(p, u_idx) != find(p, v_idx):
        union(p, rank, u_idx, v_idx)
        mst.append((u, v, w))
        cost += w

print("Kruskal's MST:", mst)
print("Total cost:", cost)



5-2. Prims Algorithm


V=int(input("Enter number of vertices: "))
G=[[0]*V for _ in range(V)]
E=int(input("Enter the no of edges: "))

for _ in range(E):
    u,v,w= map(int,input("Enter the value of u v w: ").split())
    G[u][v]=G[v][u]=w
    

key=[999]*V; key[0]=0
mst=[False]*V; parent=[-1]*V


for _ in range(V):
    u=min((k,i) for i,k in enumerate(key) if not mst[i])[1]
    mst[u]= True
    for v in range(V):
        if G[u][v] and not mst[v] and G[u][v]<key[v]:
            key[v],parent[v]=G[u][v],u

print("Prim's MST:")
for i in range(1,V):
    print(f"{parent[i]} - {i} with weight {G[i][parent[i]]}")   
print("Total cost:", sum(key))



6.Heap sort


def heapify(arr, n, i):
    largest = i
    l=2 * i + 1
    r=2 * i + 2

    if l < n and arr[l] > arr[largest]:
        largest = l 

    if r < n and arr[r] > arr[largest]:
        largest = r

    if largest !=i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    for i in range(n//2 - 1, -1, -1):
        heapify(arr, n, i)

    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

arr=list(map(int,input("Enter numbers to sort (space-separated): ").split()))
heap_sort(arr)
print("Sorted array is:", arr)




7.Merge sort


def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1

orders = list(map(int, input("Enter numbers to sort (space-separated): ").split()))
merge_sort(orders)
print("Sorted array is:", orders)



8.Greedy algo

def knapsack(weights, profits, cap):
    
    ratio = [(p / w, w, p) for p, w in zip(profits, weights)]
    ratio.sort(reverse=True)  
    total = 0

    for r, w, p in ratio:
        if cap >= w:
            cap -= w
            total += p
        else:
            total += r * cap
            break
    return total

n = int(input("Enter number of items: "))
weights = list(map(int, input("Enter weights: ").split()))
profits = list(map(int, input("Enter profits: ").split()))
cap = int(input("Enter capacity of knapsack: "))

print("Maximum profit:", knapsack(weights, profits, cap))




9. String processing


def naive_search(text, pattern):
    n,m=len(text), len(pattern)
    for i in range(n - m + 1):
        if text[i:i + m] == pattern:
            print(f"Pattern found at index {i}")

text = input("Enter the text: ")
pattern = input("Enter the pattern to search: ")
naive_search(text, pattern)



10.AI search algorithm


from collections import deque

def bfs(maze, start, goal):
    rows, cols = len(maze), len(maze[0])
    q = deque([start])
    visited = {start: None}

    while q:
        r, c = q.popleft()
        if (r, c) == goal:
            break
        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and maze[nr][nc] != 1 and (nr, nc) not in visited:
                visited[(nr, nc)] = (r, c)
                q.append((nr, nc))

    path, cur = [], goal
    while cur:
        path.append(cur)
        cur = visited.get(cur)
    return path[::-1] if path and path[-1] == start else []

# Maze definition
maze = [
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
]

start = (0, 0)
goal = (4, 4)
path = bfs(maze, start, goal)

print("Path found:" if path else "No path found")
print("Path:", path)
