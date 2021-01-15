function magicMatrices(mat) {
  let rowSums = []
  let colSums = []
  for (let i = 0; i < mat.length; i++) {
    let row = mat[i]
    let sum = row.reduce((a, b) => (a+b), 0)
    rowSums.push(sum)
  }
  for (let i = 0; i < mat.length; i++) {
    let newRow = []
    for (let y = 0; y < mat.length; y++) {
      newRow.push(mat[mat.length - 1 - y][i])
    }
    let sum = newRow.reduce((a, b) => (a + b), 0)
    colSums.push(sum)
  }
  return rowSums.concat(colSums).every((el, i, mat) => el === mat[0])
}
console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
