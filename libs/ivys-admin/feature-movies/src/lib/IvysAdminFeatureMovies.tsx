import { Button } from '@nx-monorepo-workshop/shared/ui';
import styles from './IvysAdminFeatureMovies.module.css';

/* eslint-disable-next-line */
export interface IvysAdminFeatureMoviesProps {}

export function IvysAdminFeatureMovies(props: IvysAdminFeatureMoviesProps) {
  return (
    <div className={styles['container']}>
      <h1>iVys specific functionality</h1>
      <Button />
    </div>
  );
}

export default IvysAdminFeatureMovies;
