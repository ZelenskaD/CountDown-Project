function calculateTaxes(income) {
  if (income > 30000) {
    return income * 0.25;
  } else {
    return income * 0.15;
  }
}

function removeDupes(array) {
  const arr = [...new Set(array)];
  if (typeof values === "string") return arr.join("");
  return arr;
}
