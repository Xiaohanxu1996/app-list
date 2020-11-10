import React from 'react';
import { Store } from '@store';
import { AppList } from '@views';

function App() {
  return (
    <Store>
      <AppList />
    </Store>
  );
}

export default App;
