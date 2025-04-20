import { Alert, Text } from '@mantine/core';
import { IconFileX } from '@tabler/icons-react';

const NoResults = () => {
  const icon = <IconFileX size={48} />;
  return (
    <Alert
      icon={icon}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Text>
        Sorry, no results found. Try adjusting your search or filter options.
      </Text>
    </Alert>
  );
};

export default NoResults;
