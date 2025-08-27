const statements = [
  {
    input: 'Matthew.location',
    return: '"Frederick, MD"',
  },
  {
    input: 'Matthew.contact',
    return:
      '["<a href="mailto:mattclew21@gmail.com">mattclew21@gmail.com</a>", "<a rel="noopener" target="_blank" href="https://www.linkedin.com/in/matthew-clewley-79a915140">LinkedIn</a>", "<a rel="noopener" target="_blank" href="https://github.com/MattClewley">GitHub</a>"]',
  },
  {
    input: 'Matthew.resume',
    return:
      '"<a rel="noopener" target="_blank" href="/blank_resume.pdf" target="_blank">blank.pdf</a>"',
  },
  {
    input: 'Matthew.experience',
    return: '["6 years of Full Stack experience developing Drupal web applications."]',
  },
  {
    input: 'Matthew.education',
    return:
      '"B.Sc. Information Science - University of Maryland"',
  },
  {
    input: 'Matthew.skillset',
    return: '["PHP", "React", "Drupal", "Sass", "GraphQL", "Twig", "Tailwind", "NodeJS"]',
  },
];

export default statements;
