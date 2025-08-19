const statements = [
  {
    input: 'Matthew.location',
    return: '"San Jose, CA"',
  },
  {
    input: 'Matthew.contact',
    return:
      '["<a href="mailto:mattclew21@gmail.com">mattclew21@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/matthew-clewley-79a915140">LinkedIn</a>", "<a rel="noopener" href="https://github.com/MattClewley">github</a>"]',
  },
  {
    input: 'Matthew.resume',
    return:
      '"<a rel="noopener" href="/blank_resume.pdf" target="_blank">blank.pdf</a>"',
  },
  {
    input: 'Matthew.interests',
    return: '["design", "basketball", "cooking", "traveling"]',
  },
  {
    input: 'Matthew.education',
    return:
      '"B.Sc. Structural Engineering - University of California, San Diego"',
  },
  {
    input: 'Matthew.languages',
    return: '["Typescript", "React", "Go", "Python"]',
  },
];

export default statements;
