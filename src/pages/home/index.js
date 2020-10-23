import * as React from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = React.useState([]);

React.useEffect(()=>{
    axios({
        method:'GET',
        url: 'https://simple-contact-crud.herokuapp.com/contact'
    }).then(res=>{
        setData(res.data.data);
    })
},[]);
  console.log(data);
  return (
    <React.Fragment>
      <ul>
        {data.map(contact => (
          <li key={contact.id}>
            <p>{contact.firstName}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
