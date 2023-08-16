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
    expect(bowlingScore(arr)).toBe(13);
  }); 
});