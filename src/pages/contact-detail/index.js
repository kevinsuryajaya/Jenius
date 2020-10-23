import * as React from "react";
import axios from "axios";

export default function ContactDetail(props) {
  const [data, setData] = React.useState([]);
  const [id_contact, set_id_contact] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      axios({
        method: "GET",
        url: `https://simple-contact-crud.herokuapp.com/contact/${props.match.params.id}`,
      }).then((res) => {
        // console.log(res.data)
        setData(res.data.data);
      });
    }
    fetchData();
    set_id_contact(props.match.params.id);
  }, []);

  console.log(data);
  return (
    <React.Fragment>
      <p>{data.firstName}</p>
    </React.Fragment>
  );
}
