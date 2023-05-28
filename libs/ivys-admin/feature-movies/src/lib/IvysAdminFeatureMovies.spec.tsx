import { render } from '@testing-library/react';

import IvysAdminFeatureMovies from './IvysAdminFeatureMovies';

describe('IvysAdminFeatureMovies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IvysAdminFeatureMovies />);
    expect(baseElement).toBeTruthy();
  });
});
