import React, { useEffect } from 'react';
import AOS from 'aos';
import { Store } from '@store';
import { AppList } from '@views';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Store>
      <AppList />
    </Store>
  );
}

export default App;
