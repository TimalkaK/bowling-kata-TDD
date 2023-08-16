 // if (!arr) throw new Error ("arr is required!");

 export function bowlingScore(arr : Array<number>){

  if(arr.length === 0){
    return 0;
  }

    //loop through tries 
    // if a pair of tries = 10
    // add the next try to 10
    // continue adding up scores 

  let count : number = 0;
  let sum = 0;

  const aFrame = 2;
  for (let i = 0; i < arr.length; i += aFrame) {
    const frames = arr.slice(i, i + aFrame);

    sum = frames.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    count += sum;

    if(sum === 10){
       count += arr[i + 2];
    }
  }

  console.log(count);
  return count;

 }


