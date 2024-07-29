import java.util.*;

public class Anagram {

    public static void main(String[] args) {
        String[] str1 = {"cook", "save", "taste", "aves", "vase", "state", "map"};
        groupOfAnagram(str1);
    }

    public static void groupOfAnagram(String[] arr) {
        Map<String, List<String>> group = new HashMap<>();

        String[] sortedAttr = sortArrayAttribute(arr);

        for (int index = 0; index < arr.length; index++) {
            String itemsorted = sortedAttr[index];
            String item = arr[index];

            group.putIfAbsent(itemsorted, new ArrayList<>());
            List<String> currentGroup = group.get(itemsorted);
            currentGroup.add(item);
        }

        // Convert map to list of lists
        List<List<String>> result = new ArrayList<>(group.values());

        // Print the result
        System.out.println(result);
    }

    public static String[] sortArrayAttribute(String[] arr) {
        String[] result = new String[arr.length];
        for (int index = 0; index < arr.length; index++) {
            result[index] = bubbleSort(arr[index]);
        }
        return result;
    }

    public static String bubbleSort(String str) {
        char[] arr = str.toCharArray();
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements
                    char temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        return new String(arr);
    }
}