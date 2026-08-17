public class Recursion {

  public static void main(String[] args) {

   

  }

  public static int feb(int n) {
    if (n == 0)
      return 0; // base case
    if (n == 1)
      return 1; // base case

    return feb(n - 1) + feb(n - 2); // recursion
  }


  public static int binarySearch(int arr[], int s, int e, int target) {
    if (s > e) return -1;

    int mid = s + (e - s) / 2;

    if (arr[mid] == target) return mid;

    if (arr[mid] < target)
        return binarySearch(arr, mid + 1, e, target);
    else
        return binarySearch(arr, s, mid - 1, target);
}

}
