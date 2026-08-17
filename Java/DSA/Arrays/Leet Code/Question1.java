public class Question1 {
  public static void main(String[] args) {

    // Leet Code question Number (1295).
    int[] nums = { 12, 345, 2, 6, 7896 };

    int even = findNumbers(nums);
    System.out.println(even);

  }

  public static int findNumbers(int[] nums) {

    // First Method;

    // int count = 0;

    // for (int i = 0; i < nums.length; i++) {
    // String num = "" + nums[i];

    // if (num.length() % 2 == 0) {
    // count++;
    // }

    // }
    // return count;

    // Second Method.
    int counts = 0;

    for (int i = 0; i < nums.length; i++) {
      int num = nums[i];
      int digitscount = 0;
      while (num > 0) {
        digitscount++;
        num = num / 10;
      }

      if (digitscount % 2 == 0) {
        counts++;
      }

    }

    return counts;
  }

}
