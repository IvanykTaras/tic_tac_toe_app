export type TypeForRules = Array<number[]>;

export const rules: Array<TypeForRules> = [
  //horizontal

  [[0,0],[0,1],[0,2]],
  [[1,0],[1,1],[1,2]],
  [[2,0],[2,1],[2,2]],

  //vertical
  [[0,0],[1,0],[2,0]],
  [[0,1],[1,1],[2,1]],
  [[0,2],[1,2],[2,2]],

  //cross
  [[0,0],[1,1],[2,2]],
  [[0,2],[1,1],[2,0]]

]

