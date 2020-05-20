function poisonousPlants(p) {

  if (p.length < 2) {
    return 0;
  }

  let plants = p;
  let days = 0;
  let sorted = false;

  while (sorted === false) {
    let previous = plants[0];
    let tempArr = [plants[0]];
    sorted = true;
    for (let i = 1; i < plants.length; i++) {
      if (plants[i] <= previous) {
        tempArr.push(plants[i])
      }
      if (plants[i] > previous) {
        if(sorted === true) days++;
        sorted = false;
      }
      previous = plants[i];
    }
    console.log(tempArr)
    plants = tempArr;
    setTimeout(() => { }, 1000)
  }

  return days;
}