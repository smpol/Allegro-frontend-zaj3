function palindrom(arg) {
    if (arg.length === 1) {
        return true;
    }
    if (arg.length === 0) {
        return true;
    }
    if (arg[0] === arg[arg.length - 1]) {
        return palindrom(arg.slice(1, arg.length - 1));
    }
}

console.log(palindrom('kajak'));