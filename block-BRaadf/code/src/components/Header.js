import {UserConsumer} from '../userContext'

function Header({ isDarkMode }) {
  return (
<UserConsumer>
  {
    (mode)=>{
      return <h1 className={`heading ${{mode} ? "heading-dark" : "heading-light"}`}>
      {mode ? "Dark Mode" : "Light Mode"}
      </h1>
    }
  }

</UserConsumer>

  );
}

export default Header;
