import { Button, Card, Group, Image, Text } from '@mantine/core';
import classes from '../Styles/courses.module.css';
import { Link } from 'react-router-dom';

const CoursesCard = ({ id, name, cover_image, description, onClick }) => {
  const linkProps = {
    to: `/${name}`,
    state: { id: id, filters: true },
  };

  return (
    <Card withBorder radius='md' className={classes.card}>
      <Card.Section>
        <Link {...linkProps} onClick={onClick}>
          <Image src={cover_image} height={180} />
        </Link>
      </Card.Section>

      <Link {...linkProps} onClick={onClick}>
        <Text className={classes.title} fw={500}>
          {name}
        </Text>
      </Link>

      <Text fz='sm' c='dimmed' lineClamp={4}>
        {description}
      </Text>

      <Group justify='space-between' className={classes.footer}>
        <Link {...linkProps} onClick={onClick}>
          <Button variant='filled'>Programs</Button>
        </Link>
      </Group>
    </Card>
  );
};

export default CoursesCard;
