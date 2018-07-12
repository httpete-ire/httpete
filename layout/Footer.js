import glamorous from 'glamorous';
import { mediaQueries } from './../config';

const styles = {
  background: '#3B3B3B',
  padding: '25px 0 25px 0',
  [mediaQueries.small]: {
    padding: '25px 30px 25px 30px',
  },
};

export default glamorous.section(styles);
