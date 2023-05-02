export default function formatMonth(month) {
  const monthFormated = month.replace(/\D/g, '').substr(0, 2);
  if (monthFormated === '') return '';
  if (monthFormated.length === 1) return monthFormated.replace(/^0/, '0');
  if (monthFormated > 12) return '12';
  return monthFormated;
}
