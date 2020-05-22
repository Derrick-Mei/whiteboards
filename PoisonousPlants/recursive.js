function poisonousPlants(p) {

  if (p.length < 2) {
      return 0;
  }

  let plants = p;
  let sorted = true;

  let previous = plants[0];
  let tempArr = [plants[0]];

  for (let i = 1; i < plants.length; i++) {
      if (plants[i] <= previous) {
          tempArr.push(plants[i])
      }
      if (plants[i] > previous) {
          sorted = false;
      }
      previous = plants[i];
  }

  if (sorted === true) return 0;

  return 1 + poisonousPlants(tempArr)
}