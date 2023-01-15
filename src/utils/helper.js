export const sortBygender = (prevProduct, filtergender) => {
    if (filtergender.length !== 0) {
        if (prevProduct.length > 0) {
            return prevProduct.filter((item) => {
                return filtergender.indexOf(item.gender) > -1;
            });
        } else {
            return prevProduct;
        }
    } else {
        return prevProduct;
    }
};

export const sortBysize = (prevProduct, filtersize) => {
    if (filtersize.length !== 0) {
        if (prevProduct.length > 0) {
            return prevProduct.filter((item) => {
                return filtersize.indexOf(item.size) > -1;
            });
        } else {
            return prevProduct;
        }
    } else {
        return prevProduct;
    }
};

export const sortByBrand = (prevProduct, filterbrand) => {
    if (filterbrand.length !== 0) {
        if (prevProduct.length > 0) {
            return prevProduct.filter((item) => {
                return filterbrand.indexOf(item.brandname) > -1;
            });
        } else {
            return prevProduct;
        }
    } else {
        return prevProduct;
    }
};

export function sortedByPrice(prevProduct, sortBylth) {
    if (sortBylth && sortBylth === "HIGH_TO_LOW") {
        return [...prevProduct.sort((a, b) => (b.MRP) - (a.MRP))];
    }
    if (sortBylth && sortBylth === "LOW_TO_HIGH") {
        return [...prevProduct.sort((a, b) => (a.MRP) - (b.MRP))];
    }
    return prevProduct;
}