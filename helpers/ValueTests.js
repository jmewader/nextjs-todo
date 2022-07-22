export const IsIsset = (/** @type {unknown} */ value) => Boolean(value)
export const IsSet = IsIsset

export const IsNumber = (/** @type {string | number} */ value) =>
    value + "" == "" ||
    (!isNaN(parseFloat(value)) && isFinite(parseFloat(value)))

export const IsEmail = (/** @type {string | string[]} */ value) =>
    value + "" == "" || value.indexOf("@") > -1

export const IsFunction = (/** @type {boolean} */ value) =>
    IsIsset(value) &&
    ["[object Function]", "[object AsyncFunction]"].includes(
        {}.toString.call(value)
    )

export const IsArray = (/** @type {any[]} */ value) =>
    IsIsset(value) && {}.toString.call(value) === "[object Array]"

export const IsObject = (
    /** @type {boolean | (import("query-string").ParsedQuery<string | number | boolean> & import("query-string").ParsedQuery<string | boolean> & import("query-string").ParsedQuery<string | number> & import("query-string").ParsedQuery<string>)} */ value
) => IsIsset(value) && {}.toString.call(value) === "[object Object]"

export const IsTrue = (/** @type {boolean} */ value) => value === true

export const IsFalse = (/** @type {boolean} */ value) => value === false

export const IsRegexp =
    (/** @type {{ test: (arg0: string) => any; }} */ regexp) =>
    (/** @type {any} */ value) =>
        regexp.test(`${value}`)

export const IsNotRegexp =
    (/** @type {{ test: (arg0: string) => any; }} */ regexp) =>
    (/** @type {any} */ value) =>
        !regexp.test(`${value}`)

export const IsString = (/** @type {string} */ value) =>
    typeof value === "string"

export const IsStringMaxLenght =
    (/** @type {number} */ length) => (/** @type {string} */ value) =>
        IsString(value) && value.length <= length

export const IsStringMinLenght =
    (/** @type {number} */ length) => (/** @type {string} */ value) =>
        IsString(value) && value.length >= length

export const IsStringMinMaxLenght =
    (/** @type {number} */ min_length, /** @type {number} */ max_length) =>
    (/** @type {string} */ value) =>
        IsString(value) &&
        value.length >= min_length &&
        value.length <= max_length

export const IsNotEmptyArray = (/** @type {any[]} */ value) =>
    IsArray(value) && value.length > 0

export const IsNotEmptyObject = (/** @type {{}} */ value) =>
    IsObject(value) && Object.keys(value).length > 0

export const IsNotEmptyString = (val) => IsString(val) && val.trim() !== ""

export const IsNotEmpty = (/** @type {any} */ value) =>
    IsIsset(value) &&
    (!IsString(value) || IsNotEmptyString(value)) &&
    (!IsArray(value) || IsNotEmptyArray(value)) &&
    (!IsObject(value) || IsNotEmptyObject(value))

export const IsPhone = (/** @type {string} */ value) => {
    const phoneFilterExp = /[^\+\d]/gim
    const phoneValidateExp = /^\+\d{7,}/gim

    value = value.replace(phoneFilterExp, "")

    if (value[0] == "8") {
        value = `+7${value.substring(1)}`
    } else if (value[0] == "7") {
        value = `+7${value.substring(1)}`
    }

    return phoneValidateExp.test(value)
}

export const EmailOrPhone = (/** @type {any} */ value) => {
    if (IsEmail(value)) {
        return true
    } else if (IsPhone(value)) {
        return true
    }

    return false
}

export const IsYear = (/** @type {any} */ value) => {
    if (IsNumber(value) && `${value}`.length === 4) {
        return true
    }

    return false
}

export const ArrayValue =
    (/** @type {any[]} */ tests) => (/** @type {any[]} */ value) => {
        return tests.every((/** @type {(arg0: any) => any} */ test) =>
            value.every((/** @type {any} */ val) => test(val))
        )
    }

export const ObjectValue =
    (/** @type {string} */ keyName, /** @type {any[]} */ tests) =>
    (/** @type {{ [x: string]: any; }} */ value) => {
        if (!IsObject(value)) {
            console.error(
                "[Tests][ObjectValue][Error: value is not an object]",
                value
            )

            return false
        }

        const val = value[keyName]

        return tests.every((/** @type {(arg0: any) => any} */ test) =>
            test(val)
        )
    }

export const Or =
    (/** @type {any[]} */ tests) => (/** @type {any} */ value) => {
        return tests.some((/** @type {(arg0: any) => any} */ test) =>
            test(value)
        )
    }

export const HasOwnProperty = (
    /** @type {{}} */ obj,
    /** @type {string | string[]} */ val
) => Object.prototype.hasOwnProperty.call(obj, val)
