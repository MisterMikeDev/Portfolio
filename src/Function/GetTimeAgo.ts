const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
};

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertDate(daysCount: number) {
    let date = daysCount;
    let typeDate = "day";
    let days = Math.floor(daysCount);
    let months = Math.floor(daysCount / 30);
    let years = Math.floor(daysCount / 30 / 12);
    if (days === 1 && months === 0) {
        date = days;
        typeDate = "day";
    }
    if (days > 1 && days < 13 && months === 0) {
        date = days;
        typeDate = "days";
    }
    if (months === 1 && years === 0) {
        date = months;
        typeDate = "month";
    }
    if (months > 1 && months < 13 && years === 0) {
        date = months;
        typeDate = "months";
    }
    if (years === 1) {
        date = years;
        typeDate = "year";
    }
    if (years > 1) {
        date = years;
        typeDate = "years";
    }
    return { date, typeDate };
}

function getUnitAndValueDate(secondsElapsed: number) {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
        if (secondsElapsed >= secondsInUnit || unit === "second") {
            const { date, typeDate } = convertDate(
                Math.floor(secondsElapsed / secondsInUnit)
            );
            return { date, typeDate };
        }
    }
}

function getSecondsDiff(timestamp: number) {
    return (Date.now() - timestamp) / 1000;
}

export const getTimeAgo = (lang: string, timestamp: number) => {
    const rtf = new Intl.RelativeTimeFormat(lang);
    const secondsElapsed = getSecondsDiff(timestamp);
    const { date, typeDate } = getUnitAndValueDate(Number(secondsElapsed)) as {
        date: number;
        typeDate: any;
    };
    return capitalizeFirstLetter(rtf.format(date * -1, typeDate));
};
