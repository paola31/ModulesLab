export function costCalculator()
{
    const amount = Number(process.argv[3]);
    const fee = 3;
    const interest = amount * 1.01;
    const total = fee + interest;
    return total
}

console.log(costCalculator())







