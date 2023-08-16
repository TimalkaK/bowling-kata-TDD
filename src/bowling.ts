 // if (!arr) throw new Error ("arr is required!");

 export function bowlingScore(arr : Array<number>){

  if(arr.length === 0){
    return 0;
  }

  let count : number = 0;

  arr.forEach(tries => {
    // const frames = arr.length / 2;
    // for (let a = 0; a < frames; a++){
    //   if (arr[a] + arr[a + 1] === 10){
    //     console.log(arr[a] + arr[a + 1]);
    //   }

    // }


    count += tries;

  })

  return count;


 }
