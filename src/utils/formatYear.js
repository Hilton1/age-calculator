export default function formatYear(year) {
  const currentYear = new Date().getFullYear();
  const formattedYear = year.replace(/\D/g, '').substr(0, 4);
  if (formattedYear === '') return '';
  if (formattedYear > currentYear) return currentYear.toString();
  return formattedYear;
}
