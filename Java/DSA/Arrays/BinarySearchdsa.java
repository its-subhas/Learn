public class BinarySearchdsa {
  public static void main(String[] args) { // Binary Search.

    // Linear Search > Binary Search. (half binary search).
    // Without any help.
    // int[] sortedArr = { 2, 4, 6, 8, 10, 12, 14 }; // Sorted Array.
    // int middleElement = ((sortedArr.length - 1) / 2); // Find the middle Index.
    // boolean isFound = false;
    // int targetElement = 4;

    // if (targetElement == sortedArr[middleElement]) {
    // isFound = true;

    // } else if (targetElement > sortedArr[middleElement]) {
    // for (int i = middleElement + 1; i < sortedArr.length; i++) {
    // if (targetElement == sortedArr[i]) {
    // isFound = true;
    // break;
    // }
    // }
    // } else {
    // for (int j = middleElement - 1; j >= 0; j--) {
    // if (targetElement == sortedArr[j]) {
    // isFound = true;
    // break;
    // }
    // }
    // }

    // System.out.println(isFound);

    // System.out.println("Target: " + targetElement);
    // System.out.println("Middle Index: " + middleElement);
    // System.out.println("Middle Element: " + sortedArr[middleElement]);

    // if (targetElement == sortedArr[middleElement]) {
    // // Found in middle element.
    // System.out.println("Target found in Index: " + middleElement);
    // System.out.printf("Value in Index %d is %d\n", middleElement,
    // sortedArr[middleElement]);
    // System.out.printf("Target is the %d number element in the Array.",
    // (middleElement + 1));

    // } else if (targetElement > sortedArr[middleElement]) {
    // // Search in Rigth.
    // for (int i = middleElement + 1; i < sortedArr.length; i++) {
    // if (targetElement == sortedArr[i]) {
    // System.out.println("Target found in Index: " + i);
    // System.out.printf("Value in Index %d is %d\n", i, sortedArr[i]);
    // System.out.printf("Target is the %d number element in the Array.", (i + 1));
    // isFound = true;
    // break;
    // }
    // }
    // if (!isFound) {
    // System.out.println("Target not found in Index !");
    // }

    // } else {
    // // Search in Left.
    // for (int j = middleElement - 1; j >= 0; j--) {
    // if (targetElement == sortedArr[j]) {
    // System.out.println("Target found in Index: " + j);
    // System.out.printf("Value in Index %d is %d\n", j, sortedArr[j]);
    // System.out.printf("Target is the %d number element in the Array.", (j + 1));
    // isFound = true;
    // break;
    // }
    // }
    // if (!isFound) {
    // System.out.println("Target not found in Index !");
    // }
    // }

    // int[] sortedArr = { 2, 4, 6, 8, 10, 12, 14 }; // Sorted Array.
    // int targetElement = 2;
    // boolean isFound = false;
    // int firstElement = 0;
    // int midElement = ((sortedArr.length - 1) / 2);
    // int lastElement = sortedArr.length - 1;

    // if (targetElement < sortedArr[firstElement] || targetElement >
    // sortedArr[lastElement]) {
    // isFound = false;
    // } else if (targetElement == sortedArr[midElement]) {
    // isFound = true;
    // } else if (targetElement > sortedArr[midElement]) {
    // for (int i = midElement + 1; i <= lastElement; i++) {
    // if (targetElement == sortedArr[i]) {
    // isFound = true;
    // break;
    // }
    // }
    // } else {
    // for (int j = midElement - 1; j >= firstElement; j--) {
    // if (targetElement == sortedArr[j]) {
    // isFound = true;
    // break;
    // }
    // }
    // }
    // System.out.println(isFound);

    // BINARY SEARCH !

    // Binary Search Time Complexity.
    // Best Case: O(1)
    // Average Case: O(log n)
    // Worst Case: O(log n)

    // int[] arr = { 2, 4, 6, 8, 12, 14, 16, 18, 20 }; // Ascending

    // boolean isFound = false;
    // int target = 8;
    // int start = 0;
    // int end = arr.length - 1;

    // // Check Size of the Target element as compare to elements present in Array.
    // if (arr[start] > target || arr[end] < target) {
    // isFound = false;
    // } else {

    // while (start <= end) {
    // // int mid = ((start + end) / 2);
    // int mid = (start + ((end - start) / 2)); // minimize large number.

    // if (target > arr[mid]) { // Right Search.
    // start = mid + 1;
    // } else if (target < arr[mid]) { // left Search.
    // end = mid - 1;
    // } else { // Compare Values.
    // // if (arr[mid] == target)
    // System.out.println("Found in index: " + mid);
    // System.out.println((mid + 1) + "th Element of the Array.");
    // isFound = true;
    // break;
    // }
    // }
    // }
    // if (!isFound) {
    // System.out.println("Not Found in Array !");
    // return;
    // }

    // int[] arr = { 22, 20, 18, 16, 14, 12, 10, 8, 2 }; // descending
    // boolean isFound = false;
    // int target = 16;
    // int start = 0;
    // int end = arr.length - 1;

    // // Check Size of the Target element as compare to elements present in Array.
    // if (target > arr[start] || target < arr[end]) {
    // System.out.println("Not Found in Array !");
    // return;
    // } else {

    // while (start <= end) {
    // // int mid = ((start + end) / 2);
    // int mid = (start + ((end - start) / 2)); // minimize large number.

    // if (target < arr[mid]) { // Right Search.
    // start = mid + 1;
    // } else if (target > arr[mid]) { // left Search.
    // end = mid - 1;
    // } else { // Compare Values.
    // // if (arr[mid] == target)
    // System.out.println("Found in index: " + mid);
    // System.out.println((mid + 1) + "th Element of the Array.");
    // isFound = true;
    // break;
    // }
    // }
    // if (!isFound) {
    // System.out.println("Not Found in Array !");
    // return;
    // }
    // }

    // Order Agnostic Binary Search.

    // int[] arrM = { 22, 22, 18, 16, 14, 1, 10, 8, 22 }; // Mixed Element (either
    // all equal or array not sorted.)

    // int[] arrA = { 2, 4, 6, 8, 12, 14, 16, 18, 20 }; // Ascending
    // int[] arrD = { 22, 20, 18, 16, 14, 12, 10, 8, 2 }; // descending
    // int[] aT = arrD;

    // int s = 0;
    // int e = aT.length - 1;

    // if (aT[s] < aT[e]) {
    // System.out.println("Ascending Order !");
    // } else {
    // System.out.println("Descending Order !");
    // } // either all equal or array not sorted.

    // According to Ascending and Descending order choose the Binary Search.
    // int[] arr = { 2, 4, 6, 8, 12, 14, 16, 18, 20 }; // Ascending
    // // int[] arr = { 22, 20, 18, 16, 14, 12, 10, 8, 2 }; // descending
    // boolean isFound = false;
    // int target = 16;
    // int start = 0;
    // int end = arr.length - 1;

    // if (arr[start] < arr[end]) {
    // System.out.println("Ascending Order !");

    // // Check Size of the Target element as compare to elements present in Array.
    // if (arr[start] > target || arr[end] < target) {
    // isFound = false;
    // } else {

    // while (start <= end) {
    // // int mid = ((start + end) / 2);
    // int mid = (start + ((end - start) / 2)); // minimize large number.

    // if (target > arr[mid]) { // Right Search.
    // start = mid + 1;
    // } else if (target < arr[mid]) { // left Search.
    // end = mid - 1;
    // } else { // Compare Values.
    // // if (arr[mid] == target)
    // System.out.println("Found in index: " + mid);
    // System.out.println((mid + 1) + "th Element of the Array.");
    // isFound = true;
    // break;
    // }
    // }
    // }
    // if (!isFound) {
    // System.out.println("Not Found in Array !");
    // return;
    // }

    // } else {
    // System.out.println("Descending Order !");

    // // Check Size of the Target element as compare to elements present in Array.
    // if (target > arr[start] || target < arr[end]) {
    // System.out.println("Not Found in Array !");
    // return;
    // } else {

    // while (start <= end) {
    // // int mid = ((start + end) / 2);
    // int mid = (start + ((end - start) / 2)); // minimize large number.

    // if (target < arr[mid]) { // Right Search.
    // start = mid + 1;
    // } else if (target > arr[mid]) { // left Search.
    // end = mid - 1;
    // } else { // Compare Values.
    // // if (arr[mid] == target)
    // System.out.println("Found in index: " + mid);
    // System.out.println((mid + 1) + "th Element of the Array.");
    // isFound = true;
    // break;
    // }
    // }
    // if (!isFound) {
    // System.out.println("Not Found in Array !");
    // return;
    // }
    // }
    // }

    // Ceiling Search of the number.

    // int[] arr = { 1, 3, 4, 5, 6, 7, 9, 12, 20, 25, 27, 29, 30 };
    // boolean isFound = false;
    // int target = 28;
    // int start = 0;
    // int end = arr.length - 1;

    // if (target > arr[end]) {
    // System.out.println("Not Found Ceiling in Array !");
    // return;
    // }

    // while (start <= end) {
    // int mid = (start + (end - start) / 2);

    // if (target > arr[mid]) {
    // start = mid + 1;
    // } else if (target < arr[mid]) {
    // end = mid - 1;
    // } else {
    // isFound = true;
    // System.out.println("Ceiling of the number: " + arr[mid]);
    // break;
    // }
    // }
    // if (!isFound) {
    // System.out.println("Ceiling of the number: " + arr[start]);
    // }

    // Floor of the number.

    // int[] arr = { 2, 3, 5, 6, 7, 8, 10, 15, 17, 27, 30 };
    // boolean isFound = false;
    // int start = 0;
    // int end = arr.length - 1;
    // int target = 1;

    // if (target < arr[start]) {
    // System.out.println("Cant Find Floor !");
    // return;
    // }

    // while (start <= end) {
    // int mid = start + (end - start) / 2;

    // if (target > arr[mid]) {
    // start = mid + 1;
    // } else if (target < arr[mid]) {
    // end = mid - 1;
    // } else {
    // System.out.println("Floor: " + arr[mid]);
    // isFound = true;
    // break;
    // }
    // }
    // if (!isFound) {
    // System.out.println("Floor: " + arr[end]);
    // }









    // Binary Searching in 2D array

    // int[][] arr = {
    //     { 10, 20, 30, 40 },
    //     { 15, 25, 35, 45 },
    //     { 28, 29, 37, 49 },
    //     { 33, 34, 38, 50 }
    // };

    // int target = 50;
    // int row = 0;
    // int column = arr[0].length - 1;

    // int[] ans = new int[2];
    // boolean found = false;

    // while (row < arr.length && column >= 0) {

    //   if (arr[row][column] == target) {
    //     found = true;
    //     ans[0] = row;
    //     ans[1] = column;
    //     break;
    //   } else if (arr[row][column] < target) {
    //     row++;
    //   } else {
    //     column--;
    //   }
    // }

    // if (found) {
    //   System.out.println("Element found at index: (" + ans[0] + ", " + ans[1] + ")");
    // } else {
    //   System.out.println("Element Not Found !");
    // }


  }
}
