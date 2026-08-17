import java.util.Arrays;

public class BubbleSort {

  public static void main(String[] args) {

    int[] arr = { 2, 5, 3, 6, 4, 1, 7 };
    bubbleSort(arr);
    System.out.println(Arrays.toString(arr));
  }

  public static void bubbleSort(int[] arr) {

    for (int i = 0; i < arr.length; i++) {

      boolean swaped = false;

      for (int j = 1; j < arr.length - i; j++) {

        if (arr[j] < arr[j - 1]) {

          int temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;

          swaped = true;

        }

      }

      if (!swaped) {
        break;
      }

    }

    System.out.println("Sorting Completed !");

  }

}
