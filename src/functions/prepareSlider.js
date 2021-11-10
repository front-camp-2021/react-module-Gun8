export const prepareSlider = (data,field, formatValue) => {
    const min = Math.min(...data.map(item => item[field]));
    const max = Math.max(...data.map(item => item[field]));
    return {
        min,
        max,
        selected: {
          from: min,
          to: max
        },
        formatValue: formatValue || (value => value),
        filterName: field.slice(0,1).toUpperCase() + field.slice(1),
    }
};