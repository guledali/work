import PropTypes from 'prop-types';

const Text = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <h3 className="text-lg leading-6 font-medium text-white">
        {heading}
      </h3>
      <p className="mt-4 text-white font-semibold text-3xl text-center">{subHeading}</p>
   </div>
  )
}

Text.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired
};


export default Text
