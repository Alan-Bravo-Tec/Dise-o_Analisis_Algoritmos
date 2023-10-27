function Dominantes(A) {
    let Dom = [];
    let j = 0;

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] > 1000 || A[i] < -100) {
            console.log("El número en la posición " + i + " es menor a -1000 o mayor que 1000");
        } else {
            if (A[i] > A[i + 1]) {
                Dom[j] = A[i];
                j++;
            }
        }
    }

    Dom[j] = A[A.length];
    return Dom;
}

const A = [1, 21, 4, 7, 5];

