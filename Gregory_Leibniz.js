function Gregory_Leibniz (Pi,n, sum){
    sum=0


    for (let i=0; i<n; i++ ){
      sum=[((-1)^i)/(2*i)+1]+sum
    }
    Pi=sum/4
    console.log(Pi)
}