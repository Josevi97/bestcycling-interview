export const formatDate = (seconds) => {

    const formatter = new Intl.DateTimeFormat('es', { day: "numeric", month: "short", year: "numeric" });
    const time = formatter.format(new Date(seconds));

    return time
        .split(' ')
        .map((word, index) => index === 1 ? `${word[0].toUpperCase()}${word.substring(1)}` : word)
        .join(' ');

}
