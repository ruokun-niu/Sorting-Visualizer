export const mergeSortoriginal = (array, animations = []) => {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0,middle));
  const rightHalf = mergeSort(array.slice(middle));
  const sortedArray = [];
  let i =0;
  let j = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      sortedArray.push(leftHalf[i]);
      i++
    } else {
      sortedArray.push(rightHalf[j]);
      j++;
    } 
  }
  while (i < leftHalf.length) {
    sortedArray.push(leftHalf[i]);
    i++;
  }
  while (j < rightHalf.length) {
    sortedArray.push(rightHalf[j]);
    j++;
  }
  return sortedArray;
}


export function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) {
    return array;
  }
  const arrCopy = array.slice();
  mergeSortHelper(array, 0, array.length - 1, arrCopy, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxArray, animations) {
  if (startIdx === endIdx) {
    return;
  }
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxArray, middleIdx + 1, endIdx, mainArray, animations);
}


function doMerge(mainArray, startIdx, middleIdx, endIdx, auxArray, animations) {
   let k = startIdx;
   let i = startIdx;
   let j = middleIdx + 1;
   
}
/*const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
  left = mergeSort(arr.slice(0, mid)),
  right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    };
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
  };


*/