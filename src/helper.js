export const twelveHoursList = () => {
    const hours = [];
    for (let index = 0; index < 12; index++) {
        hours.push(index + 1);
    }
    return hours;
}
export const twentyFourHoursList = () => {
    const hours = [];
    for (let index = 0; index < 24; index++) {
        hours.push(index);
    }
    return hours;
}

export const minutesList = () => {
    const minutes = [];
    for (let index = 0; index < 60; index++) {
        minutes.push(index.toString().padStart(2, '0'));
    }
    return minutes;
}

export const calculateCountdown = (monthUntilCount, dateUntilCount) => {
    const currentDate = new Date();
    let targetDate = new Date(
        currentDate.getFullYear(),
        monthUntilCount - 1,
        dateUntilCount
    );
    if (targetDate < currentDate) {
        targetDate.setFullYear(currentDate.getFullYear() + 1);
    }
    const diff = targetDate - currentDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);


    return { days, hours, minutes, seconds };
};