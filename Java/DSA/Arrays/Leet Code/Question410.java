public class Question410 {
  
//410. Split Array Largest Sum

   public int splitArray(int[] nums, int k) {

        int start = 0;
        int end = 0;

        for (int i : nums) {
            start = Math.max(start, i); // max element
            end += i; // total sum
        }

        while (start < end) {
            int mid = start + (end - start) / 2;

            int pieces = 1;
            int sum = 0;

            for (int i : nums) {
                if (sum + i > mid) {
                    pieces++;
                    sum = i;
                } else {
                    sum += i;
                }
            }

            if (pieces > k) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }

        return start;

    }
}
