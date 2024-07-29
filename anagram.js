let str1 = ["cook", "save", "taste", "aves", "vase", "state", "map"];

function groupOfAnagram(arr) {
  const group = {};

  let sortedAttr = sortArrayAtribute(arr);

  for (let index = 0; index < arr.length; index++) {
    const itemsorted = sortedAttr[index];
    const item = arr[index];
    
    if (!group[itemsorted]) {
      group[itemsorted] = []; // Inisialisasi array jika belum ada
    }
    const currentGroup = group[itemsorted];
    const currentLength = currentGroup.length;
    currentGroup[currentLength] = item;
  }
  // Mengubah objek menjadi array
  const result = [];
  for (let key in group) {
    const groups = group[key];
    // Menggunakan indeks untuk menambahkan elemen ke result
    const resultIndex = result.length;
    result[resultIndex] = groups;
  }

  console.log(result);
}

//sort array
function sortArrayAtribute(arr) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    result[index] = bblSort(arr[index]);
  }

  return result;
}

//bublesort string
function bblSort(str) {
  // Mengubah string menjadi array
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  // Melakukan sorting manual dengan metode buble sort
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Mengubah array kembali menjadi string
  var sortedStr = "";
  for (var i = 0; i < arr.length; i++) {
    sortedStr += arr[i];
  }
  return sortedStr;
}

groupOfAnagram(str1);
