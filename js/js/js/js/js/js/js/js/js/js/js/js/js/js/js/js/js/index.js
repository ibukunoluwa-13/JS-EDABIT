function whichIsLarger(f, g) {
    const fResult = f();
    const gResult = g();
  
    if (fResult > gResult) {
      return "f";
    } else if (gResult > fResult) {
      return "g";
    } else {
      return "neither";
    }
  }
  
  // Examples
  console.log(whichIsLarger(() => 5, () => 10)); // ➞ "g"
  console.log(whichIsLarger(() => 25, () => 25)); // ➞ "neither"
  console.log(whichIsLarger(() => 505050, () => 5050)); // ➞ "f"
  