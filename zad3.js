function range(a,b)
{
    let start = parseInt(a);
    let end = parseInt(b);
    if (start > end)
        return [];
    let arr = [];
    for (let i = start; i <= end; i++)
        arr.push(i);
    return arr;
}
console.log(range(1,10));