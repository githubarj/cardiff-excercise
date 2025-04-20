import { IconColorSwatch, IconMapPin } from '@tabler/icons-react';
import { Badge, Flex, HoverCard, Paper, Text, ThemeIcon } from '@mantine/core';
import classes from '../Styles/programs.module.css';
import LocationCard from './LocationCard';

const ProgramCard = ({
  start_time,
  end_time,
  title,
  description,
  location,
  room,
}) => {
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  return (
    <Paper withBorder radius='md' className={classes.card}>
      <Flex className={classes.top}>
        <ThemeIcon
          size='xl'
          radius='md'
          variant='gradient'
          gradient={{ deg: 0, from: 'pink', to: 'red' }}
        >
          <IconColorSwatch size={28} stroke={1.5} />
        </ThemeIcon>

        <Badge size='lg' color='red'>
          {`${formatTime(start_time)} - ${formatTime(end_time)}`}
        </Badge>
      </Flex>

      <Text size='xl' fw={500} mt='md'>
        {title}
      </Text>
      <Text size='sm' mt='sm' c='dimmed'>
        {description}
      </Text>
      <HoverCard width={400} mt='md' withArrow shadow='md'>
        <HoverCard.Target>
          <Text size='xs' c='dimmed' className={classes.location}>
            <IconMapPin size={18} />
            {room}
          </Text>
        </HoverCard.Target>
        <HoverCard.Dropdown  p={0} className={classes.hovercard}>
          <LocationCard {...location} />
        </HoverCard.Dropdown>
      </HoverCard>
    </Paper>
  );
};

export default ProgramCard;
