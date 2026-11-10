import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './experience.module.css';

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.experience}
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
                  Experience
                </div>
              </div>
              <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
                Industrial Experience
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l" as="p">
                Over the past 5 years, I have worked in highly precise manufacturing environments, operating and setting up advanced CNC/VMC machinery to produce orthopedic, medical, and pharmaceutical components.
              </Text>
            </div>
            <div className={styles.column}>
              <div className={styles.jobList} data-visible={visible}>
                <div className={styles.jobItem}>
                  <div className={styles.jobHeader}>
                    <Heading level={4} as="h3" className={styles.jobTitle}>
                      VMC Machine Operator &amp; VMC Setter
                    </Heading>
                    <span className={styles.jobDuration}>5 Years</span>
                  </div>
                  <Heading level={5} as="h4" className={styles.jobCompany}>
                    Sharma Orthology Pvt. Ltd.
                  </Heading>
                  <ul className={styles.jobDetails}>
                    <li>
                      <Text as="span">Operated and set up Vertical Machining Centers (VMC) for high-precision surgical implants and pharmaceutical parts.</Text>
                    </li>
                    <li>
                      <Text as="span">Managed complex electrical discharge machining operations using high-accuracy Wire Cut EDM.</Text>
                    </li>
                    <li>
                      <Text as="span">Interpreted technical drawings and blueprints to configure machining parameters and tool offsets.</Text>
                    </li>
                    <li>
                      <Text as="span">Utilized precision measuring instruments (micrometers, Vernier calipers) to maintain strict tolerances and quality control.</Text>
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
