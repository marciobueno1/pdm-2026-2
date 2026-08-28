export function calculateAnoNascText(idade: string) {
  const idadeNum = parseInt(idade);
  if (!isNaN(idadeNum) && idadeNum >= 0) {
    const anoNascNum = new Date().getFullYear() - idadeNum;
    return anoNascNum.toString();
  }
  return '';
}
