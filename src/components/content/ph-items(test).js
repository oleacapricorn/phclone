import React, { Component } from 'react';

import Details from '../post';

class Details extends Component {
          render() {
              const links = [
                  {
                      _id: 0,
                      title: 'Not registered? Create account here',
                      onClick: () => history.push('/signup')
                  },
                  {
                      _id: 1,
                      title: 'Forgot account email?',
                      onClick: () => console.log('forgot email')
                  },
                  {
                      _id: 2,
                      title: 'Forgot password?',
                      onClick: () => console.log('forgot password')
                  }
              ]
              return (
                  <div>
                      <Details className='sign-in-form__details' title='QuickLinks' links={links}/>
                  </div>
              )
          }
    }
export default Details; 


