# Currency Formatter (NGN)
A lightweight TypeScript utility function to format numbers into Nigerian Naira (NGN) currency strings using the native Intl.NumberFormat API.

## Functionality
The formatCurrency2 function takes a numeric input and returns a string formatted with:
- Currency Symbol: ₦ (NGN)
- Locale: English (Nigeria)
- Precision: Guaranteed minimum of 2 decimal places.
- Rounding: Automatically rounds to the nearest cent (e.g., 1000.657 becomes ₦1,000.66).

## Usage
Implementation
TypeScript
const formatCurrency2 = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency: 'NGN'
    }).format(amount)
}
Example
JavaScript
console.log(formatCurrency2(1000.657)); 
// Output: "₦1,000.66"

##Requirements
- Environment: Works in all modern browsers and Node.js environments.
- Language: TypeScript (or JavaScript by removing the : number type annotation).

## Why use Intl.NumberFormat?
Unlike manual string concatenation, the Intl object is built into the JavaScript runtime, ensuring high performance and accurate localization handling without the need for external heavy libraries like Moment.js or Numeral.js. It is widely known as the international standard.
