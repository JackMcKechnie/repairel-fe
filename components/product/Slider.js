import PropTypes from 'prop-types';

const Slider = ({ images }) => {
  const slider = images.map((item) => {
    return (
      <img
        style={{ maxWidth: '70%', marginRight: '.5rem', maxHeight: '500px' }}
        src={item.url}
        alt={item.alternativeText}
        key={item.id}
      />
    );
  });
  return <div style={{ display: 'flex', overflow: 'scroll' }}>{slider}</div>;
};

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
