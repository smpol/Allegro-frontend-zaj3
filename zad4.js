function sum(a)
{
    let sum = 0;
    for(let i = 0; i < a.length; i++)
    {
        sum = sum + parseInt(a[i]);
    }
    return sum;
}
console.log(sum([3, 7, 5]))