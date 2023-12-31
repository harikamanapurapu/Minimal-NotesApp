//App.js 

import React, {useState} from 'react';
import Groups from './Components/Groups';

function App() {

  //Groups is the container for the groupNames and groupColor entered by the user
  const [groups,setGroups]=useState(localStorage.groups ? JSON.parse(localStorage.groups) : [])
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('');
  //Popup container state to create a group name
  const [isPopUpVisible,setIsPopUpVisible]=useState(false)

  //Group creating Function
  const createGroup = () => {
    setIsPopUpVisible(false);
    if(groupName!== ""){
    const newGroup = {
      id: Date.now(),
      name: groupName,
      color: groupColor,
      notes: []
    };
    setGroups([...groups, newGroup]);
    
    }};
  //Group name is saved with this function
  const handleGrpNameChange = (e) => {
    setGroupName(e.target.value);
  };

  //Sets the group color
  const handleChangeColor = (color) => {
    setGroupColor(color);
  };

  return (
    <>
      {/* Passing necessary props to groups component to access them */}
      <Groups groups={groups}
      setGroups={setGroups}
      setIsPopUpVisible={setIsPopUpVisible}
      isPopUpVisible={isPopUpVisible}
      createGroup={createGroup}
      />
      {/*Pop up container as the groups are created when it is visible*/}
      {isPopUpVisible && 
        <div className="pop-up-container">
          <h1 className="popup-header">Create New Notes group </h1>
          <label for="grpNameINput" className="label">Group Name</label>
          <input type="text" placeholder="Enter your group name..." id="grpNameInput" name="name" value={groupName} onChange={handleGrpNameChange} />
          <p className="color-choose">Choose colour</p>
          <button onClick={()=>handleChangeColor('#B38BFA')} className="btn1"></button>
          <button onClick={()=>handleChangeColor('#FF79F2')} className="btn2"></button>
          <button onClick={()=>handleChangeColor('#43E6FC')} className="btn3"></button>
          <button onClick={()=>handleChangeColor('#F19576')} className="btn4"></button>
          <button onClick={()=>handleChangeColor('#0047FF')} className="btn5"></button>
          <button onClick={()=>handleChangeColor(' #6691FF')} className="btn6"></button>
          <button className="create-btn" onClick={createGroup}>Create</button>
        </div>
      }
    </>
  );
}

export default App;
