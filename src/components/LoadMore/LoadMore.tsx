import { useAppDispatch } from '../../app/hooks';
import { loadMore } from './LoadMoreSlice';

import './LoadMore.scss';

export const LoadMore: React.FC = () => {
  const dispath = useAppDispatch();

  return (
    <div className="LoadMore">
      <button
        type="button"
        onClick={() => dispath(loadMore())}
        className="LoadMore__button"
      >
        <h3 className="LoadMore__text">Load More</h3>
      </button>
    </div>
  );
};
