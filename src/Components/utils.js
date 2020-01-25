export const formIterator = event => {
      event.preventDefault();
      const formData = {};
      Object.values(event.target.elements).forEach(element => {
            const value = element.value || element.textContent !== 'Submit';
            if (value && element.hasAttribute('id')) {
                  formData[element.id] = value
            }
            else return null;
      });
      return formData;
};