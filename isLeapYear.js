// This program check if a year is leap year or not
function isLeapYear(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }
}