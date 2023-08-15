
export const splitByFours = (string: string) => {
    const array = string.match(/.{1,4}/g) ?? [];
    return array
}

export const formatMonth = (month: number) => {
    if (month < 10) {
        return "0" + month
    }
    return month
}

export const onlyNumberKey = (event: any) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    if (/^[A-Z@~`!@#$%^&*()_=+\\';:"\/?>.<,-]*$/i.test(keyValue)) {
        event.preventDefault()
    }
}
