import './Styles.css'

function StyleSheet(props) {
    let className = props.red ? 'red' : '';
    return (
        <div>
            <h1 className={`${className} large`}>StyleSheet</h1>
        </div>
    );
}

export default StyleSheet;