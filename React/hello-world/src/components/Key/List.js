import ListElement from './ListElement';

const List = () => {
    const elements = [
        {
            id : 1,
            name : 'a'
        },
        {
            id : 2,
            name : 'b'
        },
        {
            id : 3,
            name : 'c'
        }
    ];
    // Warning: Each child in a list should have a unique "key" prop.
    // const list = elements.map(element => <ListElement element={element} />);
    const list = elements.map(element => 
        <ListElement key={element.id} element={element} />
    );
    // Index as key
    // const list = elements.map((element, index) =>
    //     <ListElement key={index} element={element} />
    // );

    return <div>{list}</div>;
}

export default List;