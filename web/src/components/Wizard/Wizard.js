import { Link } from '@redwoodjs/router'
import PropTypes from 'prop-types';

const Wizard = ({ route }) => {
  return (
  <div className="fixed inset-x-0 bottom-0">
    <div className="bg-indigo-600">
      <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0">
            <div className="rounded-md shadow-sm pb-8">
              <Link to={route} className="flex items-center justify-center px-4 py-4 border border-transparent text-sm leading-5 font-medium rounded-md bg-orange-300 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 rounded-full text-white font-medium text-xl">Vidare</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

Wizard.propTypes = {
  route: PropTypes.string.isRequired,
};


export default Wizard
