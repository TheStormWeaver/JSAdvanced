function diagonalSums(mat) {
  let mainDiag = 0
  let secDiag = 0
  for (let i = 0; i < mat.length; i++) {
    mainDiag += mat[i][i]
    secDiag += mat[i][mat.length - i - 1]
  }
  return `${mainDiag} ${secDiag}`
 }
console.log(
  diagonalSums([
    [20, 40],
    [10, 60],
  ]));
