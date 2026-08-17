public class Question4 {
  public static void main(String[] args) {
    // Find the Element in the Sorted Infinite Array.
    // Asked in Amazon Interview.

    int[] arr = { 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25 };
    int target = 7;

    int start = 0;
    int end = 1;
    int ans = -1;

    while (arr[end] < target) {

      int newStart = end + 1;
      end = end + ((end - start + 1) * 2);
      start = newStart;

      // start = end + 1;
      // end = end * 2;

    }

    while (start <= end) {

      int mid = start + ((end - start) / 2);

      if (arr[mid] < target) {
        start = mid + 1;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        ans = mid;
        break;
      }

    }

    if (ans != -1) {
      System.out.println("Element Found in The Array !");
      System.out.println("Result: " + ans);
    } else {
      System.out.println("Element Not Found in The Array !");
      System.out.println("Result: " + ans);
    }

  }
}
