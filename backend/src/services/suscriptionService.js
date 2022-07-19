const processMins = (mins) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + mins);

    return Math.floor(date.getTime() / 1000);
}

module.exports = {
    processMins
}
