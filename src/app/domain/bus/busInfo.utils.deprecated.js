export function predictTime(busStation, busRoute, data) {
    if (!Array.isArray(data)) {
        console.error('data is not an array:', data);
        return null;
    }

    const filtered = data.filter(item =>
        item.busStation === busStation &&
        item.bus[busRoute]
    );

    if (filtered.length === 0) return null;

    const minPredictTimeItem = filtered.reduce((minItem, currentItem) => {
        const currentPredictTime = parseInt(currentItem.bus[busRoute].predictTime);
        const minPredictTime = parseInt(minItem.bus[busRoute].predictTime);

        if (isNaN(currentPredictTime) || isNaN(minPredictTime)) {
            console.log('Failed to parse predictTime:', currentItem.bus[busRoute].predictTime, minItem.bus[busRoute].predictTime);
            return minItem;
        }

        return currentPredictTime < minPredictTime ? currentItem : minItem;
    }, filtered[0]);

    const predictTime = parseInt(minPredictTimeItem.bus[busRoute].predictTime);
    if (isNaN(predictTime)) {
        return minPredictTimeItem.bus[busRoute].predictTime;
    } else {
        return predictTime + "분 후";
    }
}


export function prevMin(busStation, busRoute,data) {
    if (!Array.isArray(data)) {
        console.error('data is not an array:', data);
        return null;
    }

    const filtered = data.filter(item =>
        item.busStation === busStation &&
        item.bus[busRoute]
    );

    return (filtered.length > 0) ? filtered[filtered.length - 1].bus[busRoute].prevMin : null;
}

export function leftStation(busStation, busRoute, data) {
    if (!Array.isArray(data)) {
        console.error('data is not an array:', data);
        return null;
    }

    const filtered = data.filter(item =>
        item.busStation === busStation &&
        item.bus[busRoute]
    );

    if (filtered.length === 0) return null;

    const minLocationNoItem = filtered.reduce((minItem, currentItem) => {
        const currentLocationNo = parseInt(currentItem.bus[busRoute].locationNo);
        const minLocationNo = parseInt(minItem.bus[busRoute].locationNo);

        if (isNaN(currentLocationNo) || isNaN(minLocationNo)) {
            console.log('Failed to parse locationNo:', currentItem.bus[busRoute].locationNo, minItem.bus[busRoute].locationNo);
            return minItem;
        }

        return currentLocationNo < minLocationNo ? currentItem : minItem;
    }, filtered[0]);

    const locationNo = parseInt(minLocationNoItem.bus[busRoute].locationNo);
    if (isNaN(locationNo)) {
        return minLocationNoItem.bus[busRoute].locationNo;
    } else {
        return locationNo + "번째 전";
    }
}



export function prevTime(busStation, busRoute,data) {
    if (!Array.isArray(data)) {
        console.error('data is not an array:', data);
        return null;
    }

    const filtered = data.filter(item =>
        item.busStation === busStation &&
        item.bus[busRoute]
    );

    return (filtered.length > 0) ? filtered[filtered.length - 1].bus[busRoute].prevMin : null;
}

export function beforeTime(busStation, busRoute,data) {
    if (!Array.isArray(data)) {
        console.error('data is not an array:', data);
        return null;
    }

    const filtered = data.filter(item =>
        item.busStation === busStation &&
        item.bus[busRoute]
    );

    return (filtered.length > 0) ? filtered[filtered.length - 1].bus[busRoute].beforeTime : null;
}

export function nextTime(busStation, busRoute,data) {
    if (!Array.isArray(data)) {
        console.error('data is not an array:', data);
        return null;
    }

    const filtered = data.filter(item =>
        item.busStation === busStation &&
        item.bus[busRoute]
    );

    return (filtered.length > 0) ? filtered[filtered.length - 1].bus[busRoute].nextTime : null;
}
