import { DudesBrand } from '..';
import { render } from '@/utils/test-utils';
import * as React from 'react';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<DudesBrand  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<DudesBrand />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
