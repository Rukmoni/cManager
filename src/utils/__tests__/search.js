import {search} from '../search';
import data from '../../mockData/_posts.json';

test('test basic search with empty string', () => {
  let filteredData = search(data);
  expect(filteredData.length).toBe(5);
});
test('test search stringcwhich not available', () => {
  let filteredData = search(data, 'test');
  expect(filteredData.length).toBe(0);
});

test('test  search with name string', () => {
  let filteredData = search(data, 'labore');
  expect(filteredData.length).toBe(1);
});

test('test  search with email string', () => {
  let filteredData = search(data, 'Hayden');
  expect(filteredData.length).toBe(1);
});
test('test  search with both name and email string', () => {
  let filteredData = search(data, 'quo');
  expect(filteredData.length).toBe(4);
});
test('test search with body string', () => {
  let filteredData = search(data, 'molestiae');
  expect(filteredData.length).toBe(1);
});
