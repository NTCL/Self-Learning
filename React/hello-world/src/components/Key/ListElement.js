/**
 * 
 * Warning: ListElement:
 * `key` is not a prop. Trying to access it 
 * will result in `undefined` being returned.
 * If you need to acces the same value
 * within the child component, you should
 * pass it as a different prop.
 * 
 */
// const ListElement = ({element, key}) => <h1>{element.name}</h1>;
const ListElement = ({element}) => <h1>{element.name}</h1>;

export default ListElement;