import CoursesCard from '../Components/CoursesCard';
import NoResults from '../Components/NoResults';
import data from '../data.json';
import useSearchStore from '../store/useSearchStore';
import classes from '../Styles/courses.module.css';

const Courses = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const filteredCourses =
    searchQuery != ''
      ? data.topics.filter((topic) =>
          topic.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data.topics;

  const handleCourseClick = () => {
    setSearchQuery('');
  };
  return (
    <div className={classes.courses}>
      {filteredCourses.length > 0 ? (
        filteredCourses.map((topic, index) => (
          <CoursesCard
            key={index}
            cover_image={topic.cover_image}
            description={topic.description}
            name={topic.name}
            id={topic.id}
            onClick={handleCourseClick}
          />
        ))
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default Courses;
