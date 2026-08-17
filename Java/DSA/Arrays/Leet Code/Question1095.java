public class Question1095 {
  
//1095. Find in Mountain Array

 public int findInMountainArray(int target, MountainArray mountainArr) {

    int start = 0;
    int end = mountainArr.length() - 1;

    // find peak index
    while (start < end) {
        int mid = start + (end - start) / 2;

        if (mountainArr.get(mid) > mountainArr.get(mid + 1)) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    int peak = start;

    // search in left (ascending part)
    start = 0;
    end = peak;

    while (start <= end) {
        int mid = start + (end - start) / 2;

        if (mountainArr.get(mid) == target) {
            return mid;
        } else if (mountainArr.get(mid) > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    // search in right (descending part)
    start = peak + 1;
    end = mountainArr.length() - 1;

    while (start <= end) {
        int mid = start + (end - start) / 2;

        if (mountainArr.get(mid) == target) {
            return mid;
        } else if (mountainArr.get(mid) > target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

}
