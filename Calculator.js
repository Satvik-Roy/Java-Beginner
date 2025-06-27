import java.util.Scanner;

public class CalculatorApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("Enter first number:");
            double num1;
            try {
                num1 = Double.parseDouble(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Oops, please enter a valid number!");
                continue;
            }

            System.out.println("Enter second number:");
            double num2;
            try {
                num2 = Double.parseDouble(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("Oops, please enter a valid number!");
                continue;
            }

            System.out.println("Choose operation (+, -, *, /) or 'q' to quit:");
            String operation = scanner.nextLine();

            if (operation.equals("q")) {
                System.out.println("Calculator closed. Bye!");
                break;
            }

            double result;
            switch (operation) {
                case "+":
                    result = num1 + num2;
                    System.out.println("Result: " + result);
                    break;
                case "-":
                    result = num1 - num2;
                    System.out.println("Result: " + result);
                    break;
                case "*":
                    result = num1 * num2;
                    System.out.println("Result: " + result);
                    break;
                case "/":
                    if (num2 == 0) {
                        System.out.println("Error: Can't divide by zero!");
                    } else {
                        result = num1 / num2;
                        System.out.println("Result: " + result);
                    }
                    break;
                default:
                    System.out.println("Invalid operation! Try +, -, *, / or q.");
            }
        }
        scanner.close();
    }
}
