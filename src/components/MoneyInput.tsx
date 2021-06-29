import React, { useState, useEffect } from "react";
import { Input } from "antd";

interface MoneyInputProps {
	style: any
	/**
	 * Currency sign as string. e.g  $, £ ...
	 * or currency codes TRY, USD ...
	 */
	prefix?: string
	/**
	 * If true, comma is used as decimal seperator and point is used as thousand seperator
	 * If false or undefined, point is used as decimal seperator and comma is used as thousand seperator
	 */
	commaSeperator?: boolean
	/**
	 * When value is changed, onChange event is called with numeric value of the input.
	 * e.g  $1,234.56 returns within the event handler as 1234.56 
	 */
	onChange?: Function
	/**
     * Default value of the input
     * e.g. 1234.50 or 10.5 
     */
	 defaultValue?: number
}

const MoneyInput: React.FC<MoneyInputProps> = (props: MoneyInputProps) => {

	const pad = "000";
	const [value, setValue] = useState("");

	useEffect(() => {
		if(props.defaultValue) {
			inputChanged(props.defaultValue.toFixed(2).toString());
		}
	},[props.defaultValue]);

	const getPlaceholder = () => {
		const ds = props.commaSeperator ? "," : "."; // decimal seperator
		return (props.prefix || "") + `0${ds}00`;
	}

	const inputChanged = (val: string) => {

		var reg = new RegExp(/^\d+$/);
		const ds = props.commaSeperator ? "," : "."; // decimal seperator
		const ts = props.commaSeperator ? "." : ","; // decimal seperator
		const p = props.prefix || "";

		val = val.replaceAll(ts, "");
		val = val.replaceAll(ds, "");
		val = p ? val.replaceAll(p, "") : val;

		if (reg.test(val)) {
			var str = pad.substring(0, pad.length - val.length) + val

			if (str.length > 3) {
				for (let i = 0; i < str.length - 3; i++) {
					if (str[i] === "0") {
						str = str.substring(1);
					}
				}
			}

			const dec = str.substring(str.length - 2);
			str = str.substring(0, str.length - 2);

			if (props.onChange) {
				const n = Number.parseFloat(`${str}.${dec}`);
				props.onChange(n.toFixed(2));
			}

			var fStr = "" // formatted str

			var t = 0
			for (let i = 0; i < str.length; i++) {
				const last = str[str.length - i - 1];
				if (t > 1) {
					fStr = ts + last + fStr;
					t = 0
				} else {
					fStr = last + fStr
					t++
				}
			}

			fStr = (props.prefix || "") + (fStr[0] === ts ? fStr.substring(1) : fStr) + ds + dec;
			setValue(fStr);
		}
	}

	return (
		<Input
			className={"money-input-field"}
			style={{...props.style, textAlign: 'right' }}
			value={value}
			placeholder={getPlaceholder()}
			onChange={(e) => { inputChanged(e.target.value) }} />
	)
}

export default MoneyInput