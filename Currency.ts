const formatCurrency2 = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency: 'NGN'
    }). format(amount)
}

console.log(formatCurrency2(1000.657))