/*
given an array of random pesticides, plants that have more pesticides
than the one on their left will die

The resulting array will look like a sorted array in descending order

To solve this iteratively, you have a stack of plant objects that
keeps track of the increasing plant sizes and the days they've lived
{
  plant: plant,
  days: daysAlive,
}

Plants on the left must die first (or at the same time) as plants on
the right

As you iterate through the plants, 3 kinds of plants can appear
1. if the new plant is larger than plant on top of the stack: it dies
   on the first day, but we still put it on the stack as there might
   be future plants that are smaller that will outlive that plant
2. if the new plant is smaller/equal than the top (but not smallest): that
   means that the plants that it removed(on the left) died first and
   then it dies 1 day later.
3. If the new plant is the smallest that has appeared thus far,
  it won't be killed.  It will kill/remove all plants in the stack.

*/

function poisonousPlant(plants) {
  var maxDaysAlive = 0;

  // We keep in the stack the plants that will be killed
  var stack = [];

  for (var i = 0; i < plants.length; i++) {
    var daysAlive = 0;

    // remove end of stack until current plant is larger than the end of stack
    while (stack.length > 0 && plants[i] <= stack[stack.length - 1].plant) {
      // current plant lives at least as long as the plants it kills
      daysAlive = Math.max(daysAlive, stack.pop().days);
    }

    // if stack.length === 0, that means current plant is the new low
    // and that plant will not die and is counted as 0
    if (stack.length === 0) {
      daysAlive = 0;
    }

    // if stack isn't empty, that means we found a previous plant that
    // is smaller that will kill the current plant.  We kill it the
    // next day so we add 1 to its days alive (remembering that it
    // lived for as long as the plants it killed)

    // for example, if plants array goes from 1,3,2.  On the first day 1 kills 3, but 3 doesn't kill 2.  One second day 1 kills 2.
    //
    else {
      daysAlive += 1;
    }

    // keep track of the longest lived plant
    maxDaysAlive = Math.max(maxDaysAlive, daysAlive);

    // add plant to stack to keep track
    stack.push({
      plant: plants[i],
      days: daysAlive,
    });
  }

  return maxDaysAlive;
}

poisonousPlant([6, 7, 8, 200, 7, 10, 9, 10, 8.5]);
