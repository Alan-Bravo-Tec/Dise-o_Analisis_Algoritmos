function BubbleSort(arr){
    for (let i=0; i<arr.length -1; i++){        
        for (let j=0; j<arr.length -1; j++) {
            if(arr[j+1]<arr[j]){
                let aux = arr[i];
                arr[j] =arr[j+1];
                arr[j+1] = aux
            }

        }
    }
    return arr;
}