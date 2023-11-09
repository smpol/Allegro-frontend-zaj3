function fibonnaci(arg)
{
    if (arg==0)
        return 0;
    if (arg==1)
        return 1;
    return fibonnaci(arg-1)+fibonnaci(arg-2);
};

function addFibbonaci(argument)
{
    let array = [];
    for (let i = 0; i < argument; i++)
    {
        array.push(fibonnaci(i));
    }
    return array;
}

console.log(addFibbonaci(9));
