import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware, software, and tools I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of software, instrumentation, hardware, and machinery that I use on a daily basis for social research, CNC operation, and photography."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Social Research & Writing</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    For quantitative data analysis and cross-tabulation of demographics, I use **SPSS** (Statistical Package for the Social Sciences). It provides excellent statistical modeling capabilities for survey results.
                  </ListItem>
                  <ListItem>
                    **Google Workspace** is my primary environment for designing census spreadsheets, creating questionnaires, and compiling qualitative interview logs.
                  </ListItem>
                  <ListItem>
                    For drafting research papers, project reports, and academic reviews, I rely on Markdown editors and Google Docs, allowing collaborative editing with peers.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Machining & Metrology</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    For CNC setup, I program and dry-run G-code and M-code directly on the Fanuc and Siemens controller panels of VMC and Wire Cut EDM machines.
                  </ListItem>
                  <ListItem>
                    To check CAD files and plan cutting coordinates, I use basic CAD/CAM drawing viewers to inspect toolpath trajectories before machining.
                  </ListItem>
                  <ListItem>
                    For precision dimensions, I use professional-grade **digital micrometers** and **Vernier calipers** to ensure finished parts stay within the required micro-tolerances.
                  </ListItem>
                  <ListItem>
                    To maintain strict ISO guidelines, I use dial test indicators and precision height gauges to inspect workpiece offsets and flatness.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Creative & Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Camera Body</TableHeadCell>
                    <TableCell>DSLR Camera for high-resolution photography</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Lenses</TableHeadCell>
                    <TableCell>Prime lenses (50mm f/1.8) and standard zoom lenses</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Editing Software</TableHeadCell>
                    <TableCell>Adobe Lightroom & Photoshop for color grading</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>CNC Controllers</TableHeadCell>
                    <TableCell>Fanuc, Haas, or Siemens CNC interface systems</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Measurement Kit</TableHeadCell>
                    <TableCell>Mitutoyo digital calipers, micrometers, and thread gauges</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating System</TableHeadCell>
                    <TableCell>Linux (for dev) / Windows (for machining CAD interfaces)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
