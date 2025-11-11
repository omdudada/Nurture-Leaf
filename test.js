Searchin & Sorting

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
