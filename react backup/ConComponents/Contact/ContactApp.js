import React from "react";
//import ContactList from "./ConComponents/Contact/ContactList";
//import ContactCard from "./ConComponents/Contact/ContactCard";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

class ContactApp extends React.Component{
    constructor(props){
               super(props);
        console.log("constructor-first");
        this.state={
            contacts:[],
            errMessage:null,
selectedContact:{},
        };
           }
    pullData = (contact) => {
       // console.log( contact.name.first);
        this.setState({
          selectedContact: contact });
      };
    
    componentDidMount(){
        console.log("third component did mount will execute");
        let URL =
    "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(URL)
    .then((response)=>{this.setState({ contacts: response.data,});
    })
    .catch(() => {});
    //console.log("3rd Component Did Mount ");
  }
    render(){
       // console.log("second-render");
        return(<React.Fragment>
            <h1>ReactContactApp</h1>
            <div className="container ">
                <div className="rows">
                    <div className="col-md-8">
                        <ContactList  contacts={this.state.contacts} pullData={this.pullData}/>

                    </div>
                    <div className="col-md-4">
                        {
                            Object.keys(this.state.selectedContact).length>0?
                            (
                            <> <ContactCard  detailContact={this.state.selectedContact}/></>):null
                        }
                         
                                                 </div>
                </div>
            </div>
        </React.Fragment>);
    }
}
export default ContactApp;