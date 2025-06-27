import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    private Random random;
    private Scanner scanner;
    private int maxTries;
    private int minRange;
    private int maxRange;
    private int totalWins;
    private int totalRounds;

    public NumberGuessingGame() {
        random = new Random();
        scanner = new Scanner(System.in);
        maxTries = 7;
        minRange = 1;
        maxRange = 100;
        totalWins = 0;
        totalRounds = 0;
    }

    public void start() {
        while (true) {
            playRound();
            if (!playAgain()) {
                System.out.println("\nGame Over! You won " + totalWins + " out of " + totalRounds + " rounds.");
                scanner.close();
                break;
            }
        }
    }

    private void playRound() {
        int targetNumber = random.nextInt(maxRange - minRange + 1) + minRange;
        int tries = 0;
        totalRounds++;
        System.out.println("\nI've chosen a number between " + minRange + " and " + maxRange + ". You have " + maxTries + " tries!");

        while (tries < maxTries) {
            int guess = getValidGuess();
            tries++;
            if (guess == targetNumber) {
                System.out.println("Congratulations! You guessed it in " + tries + " tries!");
                totalWins++;
                return;
            } else if (guess < targetNumber) {
                System.out.println("Too low! Try again. Tries left: " + (maxTries - tries));
            } else {
                System.out.println("Too high! Try again. Tries left: " + (maxTries - tries));
            }
        }
        System.out.println("Sorry, you're out of tries! The number was " + targetNumber + ".");
    }

    private int getValidGuess() {
        while (true) {
            System.out.print("Enter your guess: ");
            try {
                int guess = Integer.parseInt(scanner.nextLine());
                if (guess >= minRange && guess <= maxRange) {
                    return guess;
                } else {
                    System.out.println("Please enter a number between " + minRange + " and " + maxRange + ".");
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input! Enter a number.");
            }
        }
    }

    private boolean playAgain() {
        while (true) {
            System.out.print("\nPlay again? (yes/no): ");
            String response = scanner.nextLine().trim().toLowerCase();
            if (response.equals("yes")) {
                return true;
            } else if (response.equals("no")) {
                return false;
            } else {
                System.out.println("Please enter 'yes' or 'no'.");
            }
        }
    }

    public static void main(String[] args) {
        NumberGuessingGame game = new NumberGuessingGame();
        game.start();
    }
}
