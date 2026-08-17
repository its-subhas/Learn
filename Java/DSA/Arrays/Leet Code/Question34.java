public class Question34 {
  public static void main(String[] args) {

    // 34. Find First and Last Position of Element in Sorted Array.
    //Asked in Facebook Interview.

  }

  public int[] searchRange(int[] nums, int target) {
    int first = findFirst(nums, target);
    int last = findLast(nums, target);
    return new int[] { first, last };
  }

  // Find first occurrence
  private int findFirst(int[] nums, int target) {
    int start = 0, end = nums.length - 1;
    int ans = -1;
    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (nums[mid] == target) {
        ans = mid;
        end = mid - 1; // move left
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return ans;
  }

  // Find last occurrence
  private int findLast(int[] nums, int target) {
    int start = 0, end = nums.length - 1;
    int ans = -1;
    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (nums[mid] == target) {
        ans = mid;
        start = mid + 1; // move right
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return ans;
  }

}
