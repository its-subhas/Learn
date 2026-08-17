// package Java.DSA;

// import java.util.ArrayList;
// import java.util.Scanner;

// public class Arraysdsa {
// public static void main(String[] args) {
// try (Scanner input = new Scanner(System.in)) {

// // One Dimension Arrays.

// // // Initialisation of Arrays.
// // System.out.print("Enter Arrays Size: ");
// // int[] myarr = new int[input.nextInt()];

// // // Take Input to Arrays.
// // for (int i = 0; i < myarr.length; i++) {
// // System.out.printf("Enter Array %d: ", (i + 1));
// // myarr[i] = input.nextInt();
// // }

// // // Print the Arrays.
// // System.out.print("Your Arrays: ");
// // for (int i = 0; i < myarr.length; i++) {
// // System.out.printf("%d", myarr[i]);
// // if (i < myarr.length - 1) {
// // System.out.print(", ");
// // }
// // }

// // Two Dimension Arrays.

// // // Initialisation of Arrays.
// // System.out.print("Enter Arrays Rows Size: ");
// // int rows = input.nextInt();
// // System.out.print("Enter Arrays Column Size: ");
// // int column = input.nextInt();
// // int[][] myarr = new int[rows][column];

// // // Take Input to Arrays.
// // for (int i = 0; i < rows; i++) {
// // for (int j = 0; j < column; j++) {
// // System.out.printf("Enter Element %d,%d: ", (i + 1), (j + 1));
// // myarr[i][j] = input.nextInt();
// // }
// // }

// // // Print the Arrays.
// // System.out.println("Your Arrays:");

// // for (int i = 0; i < rows; i++) {
// // for (int j = 0; j < column; j++) {
// // System.out.printf("%d", myarr[i][j]);
// // if (j < column - 1) {
// // System.out.print(" ");
// // }
// // }
// // System.out.println();
// // }

// // Arrays List.

// // // Initializing the One Dimension Arrays List.
// // System.out.print("Enter ArrayList Size: ");
// // int size = input.nextInt();
// // ArrayList<Integer> myarrlist = new ArrayList<>(size);

// // // Take Input to ArraysList.
// // for (int i = 0; i < size; i++) {
// // System.out.printf("Enter Element %d: ", (i + 1));
// // myarrlist.add(input.nextInt());
// // }

// // // Print the ArraysList.
// // System.out.print("Your Arrays List: ");
// // for (int i = 0; i < myarrlist.size(); i++) {
// // System.out.printf("%d", myarrlist.get(i));
// // if (i < myarrlist.size() - 1) {
// // System.out.print(", ");
// // }
// // }

// // // Search Elements In Arrays List.
// // System.out.println();
// // System.out.print("Search Number In ArrayList: ");
// // if (myarrlist.contains(input.nextInt())) {
// // System.out.print("Found Element !");
// // } else {
// // System.out.println("Not Found !");
// // }

// // Two Dimension Arrays List.

// // System.out.print("Enter Arrays List Initial Size: ");
// // int size = input.nextInt();
// // ArrayList<ArrayList<String>> myarrlist = new ArrayList<>(size);

// // // Initializing the Two Dimension Arrays List.
// // System.out.print("Enter Row Size: ");
// // int rows = input.nextInt();
// // System.out.print("Enter Column Size: ");
// // int column = input.nextInt();
// // for (int i = 0; i < rows; i++) {
// // myarrlist.add(new ArrayList<>());
// // }

// // // Take Input to the Two Dimension Arrays List.
// // for (int i = 0; i < rows; i++) {
// // for (int j = 0; j < column; j++) {
// // System.out.printf("Enter Element %d,%d: ", (i + 1), (j + 1));
// // myarrlist.get(i).add(input.next());
// // }
// // }

// // // Print the Two Dimension Arrays List.
// // System.out.println("Your Arrays List: ");
// // for (int i = 0; i < myarrlist.size(); i++) {
// // ArrayList<String> ROW = myarrlist.get(i);
// // for (int j = 0; j < ROW.size(); j++) {
// // System.out.print(ROW.get(j));
// // if (j < ROW.size() - 1) {
// // System.out.print(" ");
// // }
// // }
// // System.out.println();
// // }

// // System.out.println();
// // System.out.print(myarrlist);

// } catch (ArrayIndexOutOfBoundsException e) {
// throw e;

// }
// }
// }
