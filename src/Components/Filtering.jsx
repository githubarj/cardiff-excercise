import {
  IconBike,
  IconClock,
  IconDisabled2,
  IconParkingCircle,
  IconSearch,
} from '@tabler/icons-react';
import { ActionIcon, Chip, Flex, TextInput, Tooltip } from '@mantine/core';
import classes from '../Styles/filtering.module.css';

import useSearchStore from '../store/useSearchStore';
import { useLocation } from 'react-router-dom';
import useLocationStore from '../store/useLocationStore';
import { useRef } from 'react';
import { TimeInput } from '@mantine/dates';
import useTimeStore from '../store/useTimeStore';

const Filtering = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const { locationFilter, setLocationFilter } = useLocationStore();
  const { timeQuery, setTimeQuery } = useTimeStore();
 

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const location = useLocation();
  const { filters } = location.state;
  const ref = useRef(null);
  const pickerControl = (
    <ActionIcon
      variant='subtle'
      color='gray'
      onClick={() => ref.current?.showPicker()}
    >
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );
  console.log(timeQuery);

  return (
    <Flex className={classes.container}>
      <TextInput
        radius='xl'
        size='md'
        placeholder='Search'
        value={searchQuery}
        onChange={handleSearch}
        rightSectionWidth={42}
        leftSection={<IconSearch size={18} stroke={1.5} />}
      />
      {filters ? (
        <Flex className={classes.filters}>
          <Chip.Group
            multiple
            value={locationFilter}
            onChange={setLocationFilter}
          >
            <Chip
              className={classes.chip}
              variant='light'
              size='xs'
              value='accessible'
            >
              <IconDisabled2 size={18} /> Accessible
            </Chip>
            <Chip
              className={classes.chip}
              variant='light'
              size='xs'
              value='parking'
            >
              <IconParkingCircle size={18} /> Parking
            </Chip>
            <Chip
              className={classes.chip}
              variant='light'
              size='xs'
              value='bike_parking'
            >
              <IconBike size={18} /> Bike Parking
            </Chip>
          </Chip.Group>

          <Tooltip label='Show events that start at or after this time'>
            <TimeInput
              size='xs'
              ref={ref}
              rightSection={pickerControl}
              value={timeQuery}
              onChange={(value) => setTimeQuery(value.currentTarget.value)}
            />
          </Tooltip>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Filtering;
