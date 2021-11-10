import React, { Component } from 'react'

export class ContactCard extends Component {

    render() {
        let{detailContact}=this.props;
        return (
                  <>                      
                   <div className="container">
                       <div className="rows">
                           <div className="col">
                               <div className="card-header">
                                  <img src={detailContact.picture.large}  /></div>
                               
                               <div className="card-body">
                               <ul className="list-group">
                      <li className="list-group-item">
                        {detailContact.name.first}
                      </li>
                      <li className="list-group-item">
                        {detailContact.email}
                      </li>

                      <li className="list-group-item">
                        {detailContact.dob.age}
                      </li>
                     
                      <li className="list-group-item">
                        {detailContact.location.streetname}
                      </li>
                    </ul>
                               </div>
                           </div>
                           </div>
                   </div>
            
       </> )
    }
}

export default ContactCard;
