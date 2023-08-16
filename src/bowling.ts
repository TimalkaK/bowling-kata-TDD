 // if (!arr) throw new Error ("arr is required!");

 export function bowlingScore(arr : Array<number>){

  //console.log(arr.length);

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

    //console.log(i);
    //console.log (i + " " + sum);

    if(sum === 10 && i < 18){
      count += arr[i + 2];
      
    }
    // currently, score of next throw to total score if there is a spare
    // carry out spare logic except in the last frame
  }

  console.log(count);
  return count;

 }


