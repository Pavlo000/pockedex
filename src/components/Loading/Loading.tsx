import './Loading.scss';

export const Loading: React.FC = () => {
  return (
    <div className="Loading__gooey">
      <span className="Loading__dot" />
      <div className="Loading__dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
