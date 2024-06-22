enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);



enum Direction{
    Up, 
    Down,
    Right,
    Left
}


enum UserResponse{
    No=0,
    Yes=1
}

function respond(recipient: string, message: UserResponse): void {
    // ...
  }
   
  respond("Princess Caroline", UserResponse.Yes);



  //String Enums

  enum Direction_string{
    Up="UP", 
    Down="DOWN",
    Right="RIGHT",
    Left=324
}


console.log(Direction_string.Down + " "+ Direction_string.Up+ " "+Direction_string.Right + " "+ Direction_string.Left)











