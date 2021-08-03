import {UserConsumer} from '../userContext'

function Title({ text}) {
  return (
    <UserConsumer>
      {
         (mode)=>{
          <h2
          className={`heading ${mode} ? "sub-heading-dark" : "sub-heading-light"
          `}
        >
      
          {text}
        </h2>
         }
         
      }
   
    </UserConsumer>

  );
}

export default Title;
