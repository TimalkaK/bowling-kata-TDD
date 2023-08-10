# bowling notes

sequence of rolls 

one line of ten-pins

total score 

each game  has 10 turns (frames) for the bowler

each turn, the bowler gets two tries to knock down pins

bowler :  
1(try1, try2) , 
2 (try1, try2),
3(try1, try2) , 
4 (try1, try2),
5(try1, try2) , 
6 (try1, try2),
7(try1, try2) , 
8 (try1, try2),
9(try1, try2) , 
10 (try1, try2),

if 
in two tries:

  bowler fails to knock pins down -> score =  total number of pins knocked down from both tries 

  bowler knocks down all the pins, he gets a 'spare' 
  i.e (try1 = 3, try2 = 7)
  -> score = 10 + total number of pins knocked down in the next throw 
  i.e 
  1(3, 7) , -> 'spare'
  2 (5, 1),

  total score = 10 + 5 = 15
  total score after frame 2 = 15 + 6 = 21

in first try:

  bowler knocks down all pins, it is a 'strike'
  his turn is over -> score = 10 + total of pins knocked down in next two rolls 
  i.e 
  1(10), -> 'strike'
  2(2, 1),

  total score = 10 + 3 = 13


if 
bowler gets 'strike' or 'spare in the 10th frame, he gets to throw 
  one ball  - 'spare'  or two extra balls - 'strike'. 

  if bonus throw knocks all pins down - no more throws 


total of frame scores is the game score 


