import {
  IconBike,
  IconDisabled2,
  IconLocation,
  IconParkingCircle,
} from '@tabler/icons-react';
import {
  Badge,
  Card,
  Center,
  Group,
  Image,
  Text,
  Tooltip,
} from '@mantine/core';
import classes from '../Styles/location.module.css';

const LocationCard = ({
  title,
  description,
  address,
  postcode,
  cover_image,
  website,
  parking,
  accessible,
  bike_parking,
  latitude,
  longitude,
}) => {
  const linkProps = {
    href: website,
    target: '_blank',
    rel: 'noopener noreferrer',
  };
  const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <Card withBorder radius='md' className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={cover_image} height={180} />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant='gradient'
        gradient={{ from: 'yellow', to: 'red' }}
      >
        {postcode}
      </Badge>

      <Text className={classes.title} fw={500} component='a' {...linkProps}>
        {title}
      </Text>

      <Text fz='sm' c='dimmed' lineClamp={4}>
        {description}
      </Text>

      <Group justify='space-between' className={classes.footer}>
        <Center>
          <IconLocation size={14} />
          <Text fz='sm' inline ml={5}>
            <a href={mapsLink} target='_blank' rel='noopener noreferrer'>
              {address}
            </a>
          </Text>
        </Center>

        <Group gap={8} mr={0} c='dimmed'>
          {accessible ? (
            <Tooltip
              label='
            Accessible'
            >
              <IconDisabled2 />
            </Tooltip>
          ) : null}
          {parking ? (
            <Tooltip label='Parking'>
              <IconParkingCircle />
            </Tooltip>
          ) : null}
          {bike_parking ? (
            <Tooltip label='Bike Parking'>
              <IconBike />
            </Tooltip>
          ) : null}
        </Group>
      </Group>
    </Card>
  );
};

export default LocationCard;
