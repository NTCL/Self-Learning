import React from 'react';
const ContextB = React.createContext({
    c : 3,
    d : 4
});
const ProviderB = ContextB.Provider;
const ConsumerB = ContextB.Consumer;
export {ProviderB, ConsumerB};
export default ContextB;