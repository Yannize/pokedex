function addLeadingZeros(nbr) {
    const str = nbr.toString()

    if (str.length === 1) {
        return '00' + str
    }

    if (str.length === 2) {
        return '0' + str
    }

    return str
}

module.exports = addLeadingZeros