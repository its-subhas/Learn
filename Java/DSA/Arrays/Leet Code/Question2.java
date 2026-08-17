
public class Question2 {
  public static void main(String[] args) {

    // Leet Code - (1672. Richest Customer Wealth).

    // Input: accounts = [[1,2,3],[3,2,1]]
    // Output: 6
    // Explanation:
    // 1st customer has wealth = 1 + 2 + 3 = 6
    // 2nd customer has wealth = 3 + 2 + 1 = 6

    int[][] arr = { { 1, 2, 3 }, { 3, 2, 1 } };
    System.out.println((addArraysElements(arr)));
  }

  public static int addArraysElements(int[][] arr) {

    int sum = 0;

    for (int i = 0; i < arr.length; i++) {
      int sumf = 0;
      for (int j = 0; j < arr[i].length; j++) {
        sumf += arr[i][j];
      }
      if (sumf >= sum) {
        sum = sumf;
      }
    }

    return sum;
  }
}
