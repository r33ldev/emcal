export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('mcal_events');
    if (serializedState === null) return {};
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('error loading');
    return {};
  }
};

export const saveState = (mcal_events) => {
  try {
    // const stateArray = [mcal_events, ]
    // const currentState = loadState()
    const serializedState = JSON.stringify(mcal_events);
    localStorage.setItem('mcal_events', serializedState);
    return 1;
  } catch (err) {
    console.error('error saving events', err);
    return undefined;
  }
};
