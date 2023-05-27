import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-5 px-2 bg-indigo-600'>
      <h1 className='text-[42px] text-white font-medium'>TypeScript Project</h1>
      <div className='flex gap-5 px-5'>
        <Link className='italic mt-3 mx-auto font-semibold text-[20px] text-indigo-200 hover:text-indigo-900 transition-colors' to='/favorites'>Перейти к избранным</Link>
        <Link className='mt-3 italic font-semibold text-[20px] text-indigo-200 hover:text-indigo-900 transition-colors' to='/'>Вернуться на главную</Link>
      </div>
    </div>
  )
}