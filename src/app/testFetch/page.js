const fetcher = (...args) => fetch(...args).then(res => res.json());

import useSWR from 'swr';

function Profile() {
  const { data, error, isLoading } = useSWR('https://dummyjson.com/products', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return <div>hello {data.products}!</div>;
}

export default Profile;