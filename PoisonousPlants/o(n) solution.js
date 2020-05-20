function poisonousPlant(plants) {

  var maxDaysAlive = 0;
  var stack = [];
  // We keep in the stack the possible killers

  for (var i = 0; i < plants.length; i++) {
    // Number of days the plant[i] will survive
    var daysAlive = 0;

    // If the stack of plants isn't empty and current plant is smaller than top of stack,
    while (stack.length > 0 && plants[i] <= stack[stack.length - 1].plant) {
      // remove top of stack until it's the smallest and find longest daysAlive
      daysAlive = Math.max(daysAlive, stack.pop().days);
    }
    // The daysAlive for plant[i] is the max
    // days of all the plants greater than plant[i]
    // that are in the stack (possible killers) because
    // they all need to die before plant[i] dies.
    // Later we add 1 because it dies after the
    // other plants have died.


    // if stack.length === 0, that means current plant is the new low
    if (stack.length === 0) { daysAlive = 0; }


    // plant[i] will die, because it exited the while
    // loop and a lower plant was found
    else { daysAlive += 1; }

    maxDaysAlive = Math.max(maxDaysAlive, daysAlive);

    // plant[i] is a possible killer because there
    // may be plants greater than this that we have
    // not seen yet
    stack.push({
      plant: plants[i],
      days: daysAlive
    });

    console.log(stack)
  }
  console.log(maxDaysAlive);
  return maxDaysAlive
}

poisonousPlant([6, 5, 8, 200, 7, 10, 9, 10, 8.5])

/*
essentially plants that are consequtively smaller stay alive
so what we can do is make a stack
as we loop over the plants, it keeps track of the lowest value at the bottom of the stack
when we encounter a lower value we can remove all larger values as they no longer matter

when we encounter a plant that is larger, push it to top of stack
since it is larger, it means the plant dies in 1 day

when we encounter a plant that is smaller, remove till it's the smallest on the stack.
if it's not the absolute smallest, that means for it to die, the plants on the left die first
then it dies, therefore that plant's lifeSpan is the previous life +1 as it dies immediately afterwards
*/