const currencyFormat = new Intl.NumberFormat('en-us', { currency: 'USD', style: 'currency'})

export const currencyFormater = (value) => {
    return currencyFormat.format(value)
}