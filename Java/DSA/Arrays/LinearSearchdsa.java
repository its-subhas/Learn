// import java.util.Arrays;

public class LinearSearchdsa {
  public static void main(String[] args) { // Linear Search.

    // Linear Search Time Complexity.
    // Best Case: O(1)
    // Average Case: O(n)
    // Worst Case: O(n)

    // 1. Linear Search Start.
    // declare Array and Targer Element.

    // int[] num = { 90, 77, 55, 22 };
    // int target = 77;
    // System.out.println("Element: " + linearSearch(num, target));

    // String my = "SUBHAS BISWAS";
    // char target = 'M';
    // System.out.println(searchCharInString(my, target));

    // 1. Linear Search End.

    // // 2. Search in Range Start.

    // int[] range = { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 };
    // // index - 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    // int target = 14;
    // int start = 6;
    // int end = 7;
    // System.out.println(myrange(range,target,start,end));

    // // 2. Search in Range End.

    // // 3. Find Minimum or Maximum Start.
    // // Minimum
    // int[] min = { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, -7 };
    // System.out.println("Minimum: " + min(min));
    // // Maximum
    // int[] max = { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 77 };
    // System.out.println("Maximum: " + max(max));
    // // 3. Find Minimum or Maximum End.

    // 4. Search in Two Dimension Arrays Start.

    // // Searching Start.
    // int[][] arr = { { 2, 3, 4 },
    // { 5, 6, 7 },
    // { 8, 9, 10 },
    // { 11, 12, 13 }
    // };

    // int target = 13;
    // int[] ans = tdsearch(arr, target);
    // System.out.println(Arrays.toString(ans));
    // // Searching End.

    // // Minimum Start.
    // int[][] min = { { 2, 3, 4 },
    // { 5, 6, -7 },
    // { 8, 9, 10 }
    // };

    // System.out.println("Minimum: " + min(min));
    // // Minimum End.

    // // Maximum Start.
    // int[][] max = { { 2, 3, 4 },
    // { 5, 6, -7 },
    // { 8, 90, 10 }
    // };

    // System.out.println("Maximum: " + max(max));
    // // Maximum End.

    // 4. Search in Two Dimension Arrays End.

  }

  // 4. Search in Two Dimension Arrays Start.

  // // Minimum Start.

  // public static int min(int[][] arr) {
  // int min = arr[0][0];
  // for (int i = 0; i < arr.length; i++) {
  // for (int j = 0; j < arr[i].length; j++) {
  // if (min > arr[i][j]) {
  // min = arr[i][j];
  // }
  // }
  // }
  // return min;
  // }
  // // Minimum End.

  // // Maximum Start.
  // public static int max(int[][] arr) {
  // int max = arr[0][0];
  // for (int[] i : arr) {
  // for (int j : i) {
  // if (max < j) {
  // max = j;
  // }
  // }
  // }
  // return max;
  // }
  // // Maximum End.

  // // Searching Start.
  // public static int[] tdsearch(int[][] arr, int target) {

  // if (arr.length == 0) {
  // return new int[] { -1, -1 };
  // }

  // for (int i = 0; i < arr.length; i++) {
  // for (int j = 0; j < arr[i].length; j++) {
  // if (arr[i][j] == target) {
  // return new int[] { i, j }; // i = Row & j = Column.
  // }
  // }
  // }

  // return new int[] { -1, -1 };

  // }
  // // Searching End.

  // 4. Search in Two Dimension Arrays End.

  // // 3. Find Minimum or Maximum Start.

  // // Minimum
  // public static int min(int[] arr) {
  // int min = arr[0];

  // if (arr.length == 0) {
  // return -1;
  // }

  // for (int i = 1; i < arr.length; i++) {
  // if (min > arr[i]) {
  // min = arr[i];
  // }
  // }
  // return min;

  // }

  // // Maximum
  // public static int max(int[] arr) {
  // int max = arr[0];

  // if (arr.length == 0) {
  // return -1;
  // }

  // for (int i = 1; i < arr.length; i++) {
  // if (max < arr[i]) {
  // max = arr[i];
  // }
  // }
  // return max;

  // }

  // // 3. Find Minimum or Maximum End.

  // // 2. search in Range Start.
  // public static int myrange(int[] arr, int target, int start, int end) {
  // if (arr.length == 0) {
  // return -1;
  // }

  // for (int i = start - 1; i <= end -1; i++) {
  // int search = arr[i];
  // if (search == target) {
  // return (i+1); // want count star from index one so add (i+1).
  // }
  // }
  // return -1;
  // }
  // // 2. Search in Range End.

  // 1. Linear Search Start.

  // public static int linearSearch(int[] arr, int targetelement) {

  // // check array's length should not zero.
  // if (arr.length == 0) {
  // System.out.println("Can not Search because Array's length is zero.");
  // return targetelement; // return -1;
  // }

  // // initializing search in arrays.

  // for (int i = 0; i < arr.length; i++) {
  // int search = arr[i];
  // if (search == targetelement) {
  // System.out.printf("Element Found in Array at Index: %d\n", (i));
  // return targetelement;
  // }
  // }

  // System.out.println("Element not Found in Array !");
  // return targetelement; // return -1;

  // }

  // Linear search Logic.
  // public static int linearSearch(int[] arr, int targetelement) {

  // // check array's length should not zero.
  // if (arr.length == 0) {
  // return -1;
  // }

  // // initializing search in arrays.
  // for (int i = 0; i < arr.length; i++) {
  // int search = arr[i];
  // if (search == targetelement) {
  // return i;
  // }
  // }

  // return -1;

  // }

  // public static boolean searchCharInString(String str, char target) {

  // if (str.length() == 0) {
  // System.out.println("Can not Search !");
  // return false;
  // }

  // for (int i = 0; i < str.length(); i++) {
  // if (target == str.charAt(i)) { // str.charAt(i) use to access the String
  // Index.

  // System.out.println("Found !");
  // return true;
  // }

  // // for (char ch : str.toCharArray()) {
  // // if (target == ch) { // str.toCharArray() use to make String into Character
  // // Array.
  // // return true;
  // // }

  // }
  // System.out.println("Not Found !");
  // return false;
  // }

  // 1. Linear Search End.

}
