/**
* This class defines a string stack
*
* By:      Evan Beaudoin
* Version: 1.0
* Since:   2024-03-07
*/

export class MrCoxallStack {
  // Stack that contains all of the string
  private stackAsList

  // Creates the stack
  public constructor() {
    this.stackAsList = []
  }

  // Pushes the values to the stack
  public push(stringPushed: string) {
    this.stackAsList.push(stringPushed)
  }

  // Returns the stack
  public showStack() {
    let stackItems = this.stackAsList[0]

    for (let counter = 1; counter < this.stackAsList.length; counter++) {
      stackItems = stackItems + ", " + this.stackAsList[counter]
    }

    return stackItems
  }
}
