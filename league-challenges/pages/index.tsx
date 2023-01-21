
import * as React from 'react';
import Link from 'next/link';

import { supabase } from '@/lib/superbaseClient.js'

import { AnimatePresence, motion } from 'framer-motion';

import { IUser } from '@/lib/Types/user'
 
function index({ users }: {users: IUser}) {

  React.useEffect(() => {
    console.log(users);
  }, []);

  const [ searchValue, setSearchValue ] = React.useState<string>('');
  return (
    <React.Fragment>
     <section id="hero" className='h-full'>
      <div className="hero-container p-2 flex flex-col justify-center items-center h-full">
        <div className="hero-container-content w-full flex flex-col justify-center items-center">         
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span>Search a player</span>
            </label>
           <div className="input-with-icon flex flex-row justify-center items-center">
            <input type="search" placeholder="Type here" className="input placeholder:text-white text-whit input-bordered w-full" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            
           </div>
           <AnimatePresence>
             <motion.div
                className={`${searchValue != "" ? 'block' : 'hidden'} dropdown-content menu bg-white text-space mt-2 rounded-lg w-full`}>
              <ul>
               {users.filter(user => {
                if(searchValue === '') {
                  return users;
                } else if (user.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                  return users;
                }
               }).map((user) => (
                <li key={user.id}>
                  <Link href={`user/${user.id}`}>{user.name}</Link>
                </li>
               ))
               }
              </ul>
            </motion.div>
           </AnimatePresence>
          </div>
        </div>
      </div>
     </section>
    </React.Fragment>
  )
}

export async function getServerSideProps() {
  let { data } = await supabase
  .from('users')
  .select('id, name')
  .order('id', {ascending: true})
  .then(data => data);

  return {
    props: {
      users: data
    },
  }
}

export default index;

