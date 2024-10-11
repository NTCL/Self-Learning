import ReactDOM from 'react-dom';

const Portal = () => ReactDOM.createPortal(
    <div>
        <h1>Portal</h1>
    </div>,
    document.getElementById('portal-root')
);

export default Portal;