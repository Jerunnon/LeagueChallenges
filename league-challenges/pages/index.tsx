import dynamic from 'next/dynamic';
import * as React from 'react';

import { Card } from '../components';

function index() {

  const [ mounted, setMounted ] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;

  return (
    <React.Fragment>
      <Card width="w-96">
        <Card.Body align="text-center">
          <Card.Image src="https://placeimg.com/400/225/arch" alt="test" className='rounded-xl'/>
          <Card.Heading title='CardHeader' />
          <Card.Actions text='test' variant='btn-primary' />
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default index;