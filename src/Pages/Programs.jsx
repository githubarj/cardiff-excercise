import { useLocation, useNavigate, useParams } from 'react-router-dom';
import data from '../data.json';
import ProgramCard from '../Components/ProgramsCard';
import classes from '../Styles/programs.module.css';
import { IconArrowLeft } from '@tabler/icons-react';
import { Flex } from '@mantine/core';
import useSearchStore from '../store/useSearchStore';
import useLocationStore from '../store/useLocationStore';
import useTimeStore from '../store/useTimeStore';
import NoResults from '../Components/NoResults';

const Programs = () => {
  const location = useLocation();
  const { id } = location.state;
  const { course } = useParams();
  const navigate = useNavigate();

  const { searchQuery, setSearchQuery } = useSearchStore();
  const programs = data.topics.filter((topic) => topic.id === id)[0].programs;
  const { locationFilter, setLocationFilter } = useLocationStore();
  const { timeQuery, setTimeQuery } = useTimeStore();

  const goBack = () => {
    setSearchQuery('');
    setLocationFilter([]);
    setTimeQuery(null);
    navigate(-1);
  };

  const filteredPrograms = programs.filter((program) => {
    const matchesSearchQuery =
      searchQuery != ''
        ? program.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

    const matchesLocationFilter =
      locationFilter.length > 0
        ? locationFilter.every((feature) => program.location[feature] === 1)
        : true;

    const matchesTimeQuery = timeQuery
      ? (() => {
          const programStartTime = new Date(program.start_time);
          const filterTime = timeQuery.split(':');

          const programHours = programStartTime.getHours();
          const programMinutes = programStartTime.getMinutes();

          const filterHours = parseInt(filterTime[0], 10);
          const filterMinutes = parseInt(filterTime[1], 10);

          return (
            programHours > filterHours ||
            (programHours === filterHours && programMinutes >= filterMinutes)
          );
        })()
      : true;

    return matchesSearchQuery && matchesLocationFilter && matchesTimeQuery;
  });

  return (
    <div className={classes.container}>
      <Flex gap={20} align={'center'} className={classes.header}>
        <IconArrowLeft
          size={32}
          onClick={goBack}
          style={{ cursor: 'pointer' }}
        />{' '}
        <h1>{course}</h1>
      </Flex>
      {filteredPrograms.length > 0 ? (
        filteredPrograms.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default Programs;
