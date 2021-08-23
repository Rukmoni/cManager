//import data from '../mockData/_posts';

export function search(data,query) {
  if (query) {
    const newData = data.filter(function (item) {
      const nameField = item.name ? item.name.toUpperCase() : '';
      const emailField = item.email ? item.email.toUpperCase() : '';
      const bodyField = item.body ? item.body.toUpperCase() : '';
      const queryField = query.toUpperCase();
      return (
        nameField.indexOf(queryField) > -1 ||
        emailField.indexOf(queryField) > -1 ||
        bodyField.indexOf(queryField) > -1
      );
    });
    return newData;
  }
  return data;
}
