import java.util.ArrayList;
import java.util.Scanner;

// Task class to represent individual tasks
class Task {
    private String description;
    private boolean isCompleted;
    
    public Task(String description) {
        this.description = description;
        this.isCompleted = false;
    }
    
    public String getDescription() {
        return description;
    }
    
    public boolean isCompleted() {
        return isCompleted;
    }
    
    public void markAsCompleted() {
        this.isCompleted = true;
    }
    
    @Override
    public String toString() {
        return description + (isCompleted ? " [Completed]" : " [Pending]");
    }
}

// Main ToDoListManager class
public class ToDoListManager {
    private ArrayList<Task> tasks;
    private Scanner scanner;
    
    public ToDoListManager() {
        tasks = new ArrayList<>();
        scanner = new Scanner(System.in);
    }
    
    public void start() {
        while (true) {
            displayMenu();
            int choice = getUserChoice();
            
            switch (choice) {
                case 1:
                    addTask();
                    break;
                case 2:
                    removeTask();
                    break;
                case 3:
                    markTaskComplete();
                    break;
                case 4:
                    viewTasks();
                    break;
                case 5:
                    System.out.println("Exiting To-Do List Manager. Goodbye!");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
    
    private void displayMenu() {
        System.out.println("\n=== To-Do List Manager ===");
        System.out.println("1. Add Task");
        System.out.println("2. Remove Task");
        System.out.println("3. Mark Task as Complete");
        System.out.println("4. View All Tasks");
        System.out.println("5. Exit");
        System.out.print("Enter your choice: ");
    }
    
    private int getUserChoice() {
        try {
            return Integer.parseInt(scanner.nextLine());
        } catch (NumberFormatException e) {
            return -1;
        }
    }
    
    private void addTask() {
        System.out.print("Enter task description: ");
        String description = scanner.nextLine();
        if (!description.trim().isEmpty()) {
            tasks.add(new Task(description));
            System.out.println("Task added successfully!");
        } else {
            System.out.println("Task description cannot be empty!");
        }
    }
    
    private void removeTask() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks to remove!");
            return;
        }
        
        viewTasks();
        System.out.print("Enter task number to remove: ");
        try {
            int index = Integer.parseInt(scanner.nextLine()) - 1;
            if (index >= 0 && index < tasks.size()) {
                tasks.remove(index);
                System.out.println("Task removed successfully!");
            } else {
                System.out.println("Invalid task number!");
            }
        } catch (NumberFormatException e) {
            System.out.println("Please enter a valid number!");
        }
    }
    
    private void markTaskComplete() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks to mark as complete!");
            return;
        }
        
        viewTasks();
        System.out.print("Enter task number to mark as complete: ");
        try {
            int index = Integer.parseInt(scanner.nextLine()) - 1;
            if (index >= 0 && index < tasks.size()) {
                Task task = tasks.get(index);
                if (!task.isCompleted()) {
                    task.markAsCompleted();
                    System.out.println("Task marked as complete!");
                } else {
                    System.out.println("Task is already completed!");
                }
            } else {
                System.out.println("Invalid task number!");
            }
        } catch (NumberFormatException e) {
            System.out.println("Please enter a valid number!");
        }
    }
    
    private void viewTasks() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks in the list!");
            return;
        }
        
        System.out.println("\n=== Your Tasks ===");
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i));
        }
    }
    
    public static void main(String[] args) {
        ToDoListManager manager = new ToDoListManager();
        manager.start();
    }
}
