import {bowlingScore} from '../src/bowling'

describe("bowlingScore function", () => {
  it("tests an empty array, returns 0", () => {
    const arr : Array<number> = [];
    expect(bowlingScore(arr)).toBe(0);
  }); 
  it("tests an array with no scores, returns 0", () => {
    const arr : Array<number> = [
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
    ];
    expect(bowlingScore(arr)).toBe(0);
  }); 

  it("tests an array with no spares or strikes, returns count", () => {
    const arr : Array<number> = [
      2,3,
      0,0,
      1,0,
      0,0,
      0,0,
      1,0,
      0,0,
      0,0,
      0,0,
      0,1,
    ];
    expect(bowlingScore(arr)).toBe(8);
  }); 

  it("tests an array with spares, returns count", () => {
    const arr : Array<number> = [
      7,3,
      1,1,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
    ];

    const arr1 : Array<number> = [
      7,0,
      1,9,
      1,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
    ];
    expect(bowlingScore(arr)).toBe(13);
    expect(bowlingScore(arr1)).toBe(19);
  }); 

  it("tests an array with a spare on the 10th frame, returns count", () => {
    const arr : Array<number> = [
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      9,1,3
    ];

    const arr1 : Array<number> = [
      0,0,
      0,0,
      5,5,
      1,0,
      0,0,
      0,0,
      0,0,
      0,0,
      0,0,
      5,5,2
    ];

    const arr2 : Array<number> = [
      1,0,
      1,0,
      5,5,
      1,0,
      0,0,
      3,7,
      0,0,
      0,0,
      0,0,
      5,5,2
    ];
    expect(bowlingScore(arr)).toBe(13);
    expect(bowlingScore(arr1)).toBe(24);
    expect(bowlingScore(arr2)).toBe(36);
  }); 

});