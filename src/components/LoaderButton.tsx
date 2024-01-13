type Props = {
    loading: boolean
}

function LoaderButton(props: Props) {
  return (
    <>
        {        
            props.loading?
     
                 <div className="ml-1 animate-spin inline-block w-4 h-4 border-[3px] border-gray-200 border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
   
            :null
        }
    </>
  )
}

export default LoaderButton