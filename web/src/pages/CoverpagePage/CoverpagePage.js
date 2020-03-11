const CoverpagePage = () => {
  return (
  // layout
    <div className="mx-auto sm:px-6 lg:px-8 bg-indigo-600 h-screen">

      <div className="flex flex-col justify-center items-center pt-8">
        <h3 className="text-lg leading-6 font-medium text-white">
          Överkropp
        </h3>
        <p className="mt-4 text-white font-semibold text-3xl text-center">Hur stor yta täcker det?</p>
      </div>




      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-indigo-600">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0">
                <div className="rounded-md shadow-sm pb-8">
                  <a href="#" className="flex items-center justify-center px-4 py-4 border border-transparent text-sm leading-5 font-medium rounded-md bg-orange-300 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 rounded-full text-white font-medium text-xl">
                    Vidare
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default CoverpagePage
