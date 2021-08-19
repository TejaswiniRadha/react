import React from "react";
import Employeelist from "./Employeelist";
class Employee extends React.Component{
    employees=[{"id":1,"first_name":"Caritta","last_name":"Thirsk","email":"cthirsk0@wikia.com","gender":"Agender"},
    {"id":2,"first_name":"Chico","last_name":"Joy","email":"cjoy1@bluehost.com","gender":"Female"},
    {"id":3,"first_name":"Gladys","last_name":"Nickoll","email":"gnickoll2@theguardian.com","gender":"Non-binary"},
    {"id":4,"first_name":"Damien","last_name":"Yesipov","email":"dyesipov3@dion.ne.jp","gender":"Bigender"},
    {"id":5,"first_name":"Amii","last_name":"Fairleigh","email":"afairleigh4@privacy.gov.au","gender":"Genderfluid"},
    {"id":6,"first_name":"Jeth","last_name":"Bruster","email":"jbruster5@auda.org.au","gender":"Male"},
    {"id":7,"first_name":"Dorian","last_name":"Gallacher","email":"dgallacher6@xing.com","gender":"Agender"},
    {"id":8,"first_name":"Miquela","last_name":"Salman","email":"msalman7@istockphoto.com","gender":"Bigender"},
    {"id":9,"first_name":"Lisabeth","last_name":"Diggar","email":"ldiggar8@deviantart.com","gender":"Bigender"},
    {"id":10,"first_name":"Bartholomeo","last_name":"Bonder","email":"bbonder9@gmpg.org","gender":"Non-binary"},
    {"id":11,"first_name":"Grove","last_name":"Gutans","email":"ggutansa@angelfire.com","gender":"Female"},
    {"id":12,"first_name":"Haily","last_name":"Deboo","email":"hdeboob@virginia.edu","gender":"Genderfluid"},
    {"id":13,"first_name":"Ruddie","last_name":"Galway","email":"rgalwayc@berkeley.edu","gender":"Genderqueer"},
    {"id":14,"first_name":"Rafe","last_name":"Flatte","email":"rflatted@addthis.com","gender":"Male"},
    {"id":15,"first_name":"Faythe","last_name":"Dearl","email":"fdearle@house.gov","gender":"Male"},
    {"id":16,"first_name":"Philipa","last_name":"Gajewski","email":"pgajewskif@fema.gov","gender":"Polygender"},
    {"id":17,"first_name":"Brenn","last_name":"Dawson","email":"bdawsong@google.co.jp","gender":"Polygender"},
    {"id":18,"first_name":"Avery","last_name":"Battany","email":"abattanyh@google.de","gender":"Polygender"},
    {"id":19,"first_name":"Aggi","last_name":"Yewen","email":"ayeweni@princeton.edu","gender":"Non-binary"},
    {"id":20,"first_name":"Lombard","last_name":"Lanfare","email":"llanfarej@bluehost.com","gender":"Female"}]
       
        

    render()
    {
        return(
            <div>
                <Employeelist emp={this.employees}  img={this.image}/>
            </div>
        );
    }
}
export default Employee;