const getSubElements = (parent) => {
    const result = {};
    const elements = parent.querySelectorAll('[data-element]');

    for (const subElement of elements) {
        const name = subElement.dataset.element;

        result[name] = subElement;
    }

    return result;
};

export default getSubElements;