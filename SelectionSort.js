function SelectionSort(arr){
    for (let i=0; i<arr.length -1; i++){  
        let min=i;      
        for (let j=0; j<arr.length; j++) {
            if(arr[j+1]<arr[min]){
               min = j;
            }

        }
        let aux = arr[i];
        arr[i] =arr[min];
        arr[min] = aux;
    }
    return arr;
}