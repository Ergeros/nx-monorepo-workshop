import { Button } from '@nx-monorepo-workshop/shared/ui';
import styles from './CatalogueAdminFeatureCatalogue.module.css';

/* eslint-disable-next-line */
export interface CatalogueAdminFeatureCatalogueProps {}

export function CatalogueAdminFeatureCatalogue(
  props: CatalogueAdminFeatureCatalogueProps
) {
  return (
    <div className={styles['container']}>
      <h1>Catalogue specific functionality</h1>
      <Button />
    </div>
  );
}

export default CatalogueAdminFeatureCatalogue;
