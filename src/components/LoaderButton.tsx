type Props = {
  loading: boolean,
  value: string
}

function LoaderButton(props: Props) {
  return (
    <button type="submit" 
      className={
        !props.loading?
          "flex justify-center items-center w-full p-3 text-center bg-sky-600 hover:bg-sky-700 transition-colors duration-200 text-gray-100 cursor-pointer rounded"
          :
          "flex justify-center items-center w-full p-3 text-center bg-blue-400 transition-colors duration-200 text-gray-100 rounded cursor-not-allowed"
        }
    >
        {      
            props.loading?
                <>
                  <b>{ props.value }</b>

                  <div className="ml-1 animate-spin inline-block w-4 h-4 border-[3px] border-gray-200 border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                  </div>
                </>
            : <b>{ props.value }</b>
        }
    </button>
  )
}

export default LoaderButton