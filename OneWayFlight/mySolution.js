const tickets = [
    ['PIT', 'ORD'],
    ['XNA', 'CID'],
    ['SFO', 'BHM'],
    ['FLG', 'XNA'],
    [null, 'LAX'],
    ['LAX', 'SFO'],
    ['CID', 'SLC'],
    ['ORD', null],
    ['SLC', 'PIT'],
    ['BHM', 'FLG'],
  ];

  function reconstructTrip(array) {
    let obj = {};
    array.map(item=> obj[item[0]] = item[1])
    let current = obj[null]
    let answer = [current]
    while(current) {
      answer.push(current)
      current = obj[current]
    }
    return answer
  }

  reconstructTrip(tickets)
