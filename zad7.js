function isHappyNumber(arg)
{
    let temp_string = arg.toString();
    console.log(temp_string);
    let temp_number = 0;
    for (let i = 0; i < temp_string.length; i++)
    {
        temp_number += Math.pow(parseInt(temp_string[i]), 2);
    }
    if (temp_number == 1)
    {
        return true;
    }
    else
    {
        return isHappyNumber(temp_number);
    }
}

console.log(isHappyNumber(19));