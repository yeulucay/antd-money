# antd-money

React money/currency input using ant design.

## Usage

```js
<MoneyInput 
    prefix={"$"} 
    commaSeperator={true} 
    onChange={inputChanged} 
/>
```

## Attributes
- **prefix:** Currency sign as string.  e.g. $, £, TRY etc.
- **commaSeperator:** A boolean flag. If true, comma is used as decimal seperator and point is used as thousand seperator.
If false or undefined, point is used as decimal seperator and comma is used as thousand seperator.
- **onChange:** When value is changed, onChange is called with numeric value of the input
e.g  **$1,234.56**  returns within the event handler as **1234.56**

https://github.com/yeulucay/antd-money

