import '@mantine/core/styles.css';
import { Checkbox, MantineProvider } from '@mantine/core';
import { useState } from 'react';

function App() {

  const [isChecked, setChecked] = useState(false);

  const handleChange = ({ currentTarget }) => {
    const { checked } = currentTarget;
    setChecked(checked);
  }

  return (
    <MantineProvider>
      <Checkbox
        checked={isChecked}
        onChange={handleChange}
        label="Hello mantine"
      />
    </MantineProvider>
  )
}

export default App
