export default function formatDay(day) {
  const dayFormated = day.replace(/\D/g, '').substr(0, 2);
  if (dayFormated === '') return '';
  if (dayFormated.length === 1) return dayFormated.replace(/^0/, '0');
  if (dayFormated > 31) return '31';
  return dayFormated;
}
