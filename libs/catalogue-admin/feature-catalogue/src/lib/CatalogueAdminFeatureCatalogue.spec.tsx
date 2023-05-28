import { render } from '@testing-library/react';

import CatalogueAdminFeatureCatalogue from './CatalogueAdminFeatureCatalogue';

describe('CatalogueAdminFeatureCatalogue', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CatalogueAdminFeatureCatalogue />);
    expect(baseElement).toBeTruthy();
  });
});
