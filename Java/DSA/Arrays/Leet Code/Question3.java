public class Question3 {
  // 744. Find Smallest Letter Greater Than Target.

  public static void main(String[] args) {
    char[] letters = { 'a', 'c', 'd', 'f', 'g', 'h' };
    char target = 'a';
    char ans = nextGreatestLetter(letters, target);
    System.out.println("Output: " + ans);
  }

  public static char nextGreatestLetter(char[] letters, char target) {

    int start = 0;
    int end = letters.length - 1;

    while (start <= end) {
      int mid = (start + (end - start) / 2);

      if (target < letters[mid]) {
        end = mid - 1;

      } else {
        start = mid + 1;
      }
    }

    return letters[start % letters.length];
  }
}
