import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faLine } from '@fortawesome/free-brands-svg-icons/faLine';

const icons = [
  faFacebookF, faFacebookMessenger, faLine
];

library.add(...icons);
