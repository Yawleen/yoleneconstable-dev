import Section from '../layout/Section';
import { projects } from '../../data/projects';
import SelectedProject from '../SelectedProject';

const Projects = () => {
  return (
    <Section subtitle="Projets sélectionnés">
      {projects.map((project) => (
        <SelectedProject
          key={project.title}
          title={project.title}
          images={project.images}
          date={project.date}
          category={project.category}
          status={project.status}
          description={project.description}
          goal={project.goal}
          stack={project.stack}
          versions={project.versions}
          projectUrl={project.projectUrl}
        />
      ))}
    </Section>
  );
};

export default Projects;
