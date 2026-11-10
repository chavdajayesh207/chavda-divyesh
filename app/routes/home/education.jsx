import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './education.module.css';

export const Education = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.education}
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
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Education
                </div>
              </div>
              <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
                Academic background
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l" as="p">
                My education in sociology has equipped me with a deep analytical lens to understand social systems, structures, and communities.
              </Text>
            </div>
            <div className={styles.column}>
              <div className={styles.eduList} data-visible={visible}>
                <div className={styles.eduItem}>
                  <div className={styles.eduHeader}>
                    <Heading level={4} as="h3" className={styles.eduTitle}>
                      Bachelor of Arts (BA) in Sociology
                    </Heading>
                    <span className={styles.eduDuration}>Graduated</span>
                  </div>
                  <Heading level={5} as="h4" className={styles.eduInstitution}>
                    Bhakta Kavi Narsinh Mehta University (BKNMU)
                  </Heading>
                  <ul className={styles.eduDetails}>
                    <li>
                      <Text as="span">Majored in Sociology with an emphasis on research methodologies and data collection.</Text>
                    </li>
                    <li>
                      <Text as="span">Conducted studies on community development, demographics, and social welfare programs.</Text>
                    </li>
                    <li>
                      <Text as="span">Participated in community volunteer programs and field research projects in the Gujarat region.</Text>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
