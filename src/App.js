import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard'
const App = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);

    

    
  };
  
  async function f(){
  var edt=await document.getElementsByTagName("input");

  edt[0].placeholder="Search for your EMOJI"

}
f();

 function al(){
  alert("Emoji Copied to Clipboard");
}



  return (
    
    <><div className="box">

      <Picker onEmojiClick={onEmojiClick} />

    </div><div className="txt">
        {chosenEmoji ? (
          <span>You chose: {chosenEmoji.emoji}</span>
        ) : (
          <span>Emoji Search App</span>
        )}
       



       <CopyToClipboard text={chosenEmoji?chosenEmoji.emoji:"a"}>
  <button className="cpy" onClick={al}> <i className="fa fa-clipboard" aria-hidden="true"></i></button>
</CopyToClipboard>





      </div>
      
      
      
      </>


          

  );
};
export default App;
