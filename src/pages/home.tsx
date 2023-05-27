import {Link} from "react-router-dom";
import {useSearchUsersQuery} from "../store/github/github.api";

export const Home = () => {
  const {isLoading, isError, data} = useSearchUsersQuery('kirill')
  return (
    <div className='flex flex-col items-center mt-3'>
      <h1 className='text-[42px] text-center'>Home page</h1>
    </div>
  )
}