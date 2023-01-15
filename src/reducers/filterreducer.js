export const intialFilterState = {
    filterbygender: [],
    filterbysize:[],
    filterbybrand:[],
    sortBylth: "LOW_TO_HIGH",
}

export function filterReducer(state, action) {
    switch (action.type) {
        case "GENDER":
            if (action.payload.checked) {
                if (state.filterbygender.find(val => val === action.payload.value)) {
                    return {
                        ...state,
                        filterbygender: state.filterbygender
                    }
                } else {
                    return {
                        ...state,
                        filterbygender: [...state.filterbygender, action.payload.value]
                    }
                }
            } else {
                return {
                    ...state,
                    filterbygender: [...state.filterbygender.filter((category) => {
                        return category !== action.payload.value
                    })]
                }
            }


            case "SIZE":
                if (action.payload.checked) {
                    if (state.filterbysize.find(val => val === action.payload.value)) {
                        return {
                            ...state,
                            filterbysize: state.filterbysize
                        }
                    } else {
                        return {
                            ...state,
                            filterbysize: [...state.filterbysize, action.payload.value]
                        }
                    }
                } else {
                    return {
                        ...state,
                        filterbysize: [...state.filterbysize.filter((category) => {
                            return category !== action.payload.value
                        })]
                    }
                }


                case "BRAND":
                    if (action.payload.checked) {
                        if (state.filterbybrand.find(val => val === action.payload.value)) {
                            return {
                                ...state,
                                filterbybrand: state.filterbybrand
                            }
                        } else {
                            return {
                                ...state,
                                filterbybrand: [...state.filterbybrand, action.payload.value]
                            }
                        }
                    } else {
                        return {
                            ...state,
                            filterbybrand: [...state.filterbybrand.filter((category) => {
                                return category !== action.payload.value
                            })]
                        }
                    }



        case "HIGH_TO_LOW":
            return {
                ...state,
                sortBylth: action.payload

            }
        case "LOW_TO_HIGH":
            return {
                ...state,
                sortBylth: action.payload
            }
    }
}