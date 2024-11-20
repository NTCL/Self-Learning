import './App.css';
// import UseState from './components/UseState/UseState';
// import UseReducer from './components/UseReducer';
// import ReferenceUseState from './components/UseState/ReferenceUseState';
// import Parent from './components/UseState/Parent';
// import ChildrenPropsParent from './components/ChildrenProps/Parent';
// import ChildrenPropsChild from './components/ChildrenProps/Child';
// import MemoParent from './components/Memo/Parent';
// import IncorrectMemoParent from './components/IncorrectMemo/Parent';
import UseContextParent from './components/UseContext/Parent';
import UseContextChild from './components/UseContext/Child';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ReferenceUseState /> */}
      {/* <Parent /> */}
      {/* <ChildrenPropsParent>
        <ChildrenPropsChild />
      </ChildrenPropsParent> */}
      {/* <MemoParent/> */}
      {/* <IncorrectMemoParent /> */}
      <UseContextParent>
        <UseContextChild />
      </UseContextParent>
    </div>
  );
}

export default App;
