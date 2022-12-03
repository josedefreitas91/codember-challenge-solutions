function survivor(users) {
  const queue = [...users].map((name, id) => ({ id, name }));

  while (queue.length > 1) {
    const win = queue.shift();
    queue.shift();
    queue.push(win);
  }

  console.log("***** SOLUTION *****");
  console.log(`submit ${queue[0].name}-${queue[0].id}`);
}

survivor(users);
