function sumNumbers(...numbers: number[]): number {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }
  
  let result = sumNumbers(1, 2, 3, 4, 5);
  console.log(result); // Kết quả: 15
  