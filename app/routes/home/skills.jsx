import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './skills.module.css';

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  const skillsData = [
    {
      title: 'Precision Machining',
      items: [
        'VMC Setup & Operation',
        'Wire Cut EDM Operation',
        'CNC Programming (G-code/M-code)',
        'Engineering Blueprints Reading',
        'Micrometer & Caliper Measurement',
        'Industrial Safety Standards',
      ],
    },
    {
      title: 'Sociology & Social Research',
      items: [
        'Social Structures Analysis',
        'Community-Level Social Surveys',
        'Qualitative Data Collection',
        'Demographics & Social Metrics',
        'Volunteer Outreach Programs',
        'Community Development Planning',
      ],
    },
    {
      title: 'Interpersonal & Creative',
      items: [
        'Photography & Visual Arts',
        'Team Collaboration & Leadership',
        'Technical Problem Solving',
        'Active Reading & Critical Analysis',
        'Effective Communication',
      ],
    },
  ];

  return (
    <Section
      className={styles.skills}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.columnFull}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Skills
                </div>
              </div>
              <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
                Professional Skills
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l" as="p">
                A unique blend of industrial engineering execution and human-centric social science analysis.
              </Text>

              <div className={styles.skillsGrid} data-visible={visible}>
                {skillsData.map((category, catIndex) => (
                  <div key={catIndex} className={styles.skillCategory}>
                    <Heading level={4} as="h3" className={styles.categoryTitle}>
                      {category.title}
                    </Heading>
                    <ul className={styles.skillList}>
                      {category.items.map((skill, itemIndex) => (
                        <li key={itemIndex} className={styles.skillItem}>
                          <Text as="span">{skill}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
