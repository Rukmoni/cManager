import {search} from '../search';
const sum=(a,b)=>a+b;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

test('test basic search with empty string',()=>{
    let data=search();
    expect(data.length).toBe(5);
})
test('test search stringcwhich not available',()=>{
    let data=search('test');
    expect(data.length).toBe(0);
})

test('test  search with name string',()=>{
    let data=search('labore');
    expect(data.length).toBe(1);
})

test('test  search with email string',()=>{
    let data=search('Hayden');
    expect(data.length).toBe(1);
})
test('test  search with both name and email string',()=>{
    let data=search('quo');
    expect(data.length).toBe(4);
})
test('test search with body string',()=>{
    let data=search('molestiae');
    expect(data.length).toBe(1);
})