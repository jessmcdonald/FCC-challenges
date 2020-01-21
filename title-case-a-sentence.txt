function titleCase(str) {
  let arr = str.split(" ");
  let newarr = [];
  let title = "";
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    title = newarr.join(" ");
  }
  return title;
}

console.log(titleCase("I'm a little tea pot"));
