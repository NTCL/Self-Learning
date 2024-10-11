import React from 'react';
const ContextA = React.createContext();
const ProviderA = ContextA.Provider;
const ConsumerA = ContextA.Consumer;
export {ProviderA, ConsumerA};
export default ContextA;