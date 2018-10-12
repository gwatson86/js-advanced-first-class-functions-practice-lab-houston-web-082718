function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
    })
}

function logDriversByHometown(drivers, city) {
    drivers.forEach(function(driver) {
        if (driver.hometown === city) {
            console.log(driver.name);
        }
    })
}

function driversByRevenue(drivers) {
    let revenueSortedDrivers = [...drivers];
    return revenueSortedDrivers.sort(function(a, b) {
        return a.revenue - b.revenue;
    })
}

function driversByName(drivers) {
    let nameSortedDrivers = [...drivers];
    return nameSortedDrivers.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    })
}

function totalRevenue(drivers) {
    return drivers.reduce(function(agg, driver) {
        return agg += driver.revenue;
    }, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}