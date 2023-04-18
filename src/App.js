
import ReactMarkdown from "react-markdown";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faKeyboard, faTerminal, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const boxStyle = ' flex-none shrink m-1 basis-6/12 text-left p-3 rounded border border-solid border-2 border-black flex gap-3 flex-col';
const headerStyle = 'flex items-center gap-4  border-3 border-black border-b uppercase font-bold pb-3';
const expandStyle = 'flex-1 text-right cursor-pointer'
const fullExpansStyle = 'w-100';
const initial = "# Welcome to the Land of Wonders\n\n## Discover the mysteries of the unknown...\n### And unravel the secrets of the ages:\n\nJourney to the land of wonders, where the impossible becomes possible and the unseen becomes visible. Explore the landscapes and the seascapes, and discover the hidden treasures of the earth.\n\n\`Find the hidden treasures\` is a common task for adventurers.\n\n\```\\n\// Unravel the secrets of the ages:\n\nfunction findTreasure(location) {\nif (location == 'mountain') {\nreturn 'You found a hidden cave with gold and diamonds!';\n} else if (location == 'ocean') {\nreturn 'You found a sunken ship with a chest full of jewels!';\n} else {\nreturn 'Sorry, try another location.';\n}\n}\n\n```\n\n\nYou will encounter fierce **dragons**, guarding their hoards of treasure.\nOr _mischievous fairies_, leading you astray with their enchanting songs.\nAnd if you're brave enough, you might even find the legendary **_Fountain of Youth_**.\n\nTake a chance, and visit the [Land of Wonders](https://en.wikipedia.org/wiki/Fantasy_land).\nWho knows what mysteries you might uncover?\n\n> The road to discovery is never easy, but the rewards are great.\n\n- Pack your sense of adventure and come explore the Land of Wonders.\n\t- Who knows what secrets you might uncover?\n\t- And remember, the truth is always stranger than fiction.\n\n![Land of Wonders](https://pibig.info/uploads/posts/2022-12/1670377985_5-pibig-info-p-bolshoe-mudroe-derevo-vkontakte-5.jpg)";

function App() {

   const [textValue, setTextValue] = useState(initial);
   const [expand, setExpand] = useState(false);

   function expandHandler(e) {
      let fuck = document.querySelectorAll('.flex-none.shrink');
      let wrap = document.querySelector('.wrapper');
      wrap.classList.toggle('active');
      fuck[0].classList.toggle('active');
      fuck[1].classList.toggle('active');
      setExpand(prev => !prev);
   }
   function changeHandler(e) {
      setTextValue(e.target.value);
      console.log(e.target.value);
   }
   return (
      <>
         <p className="title mt-4 text-3xl uppercase font-thin tracking-wide">Markdown preview</p>
         <div className="wrapper flex p-4 ">
            <Editor onclick={expandHandler} onchange={changeHandler} Value={textValue} isExpanded={expand} />
            <Preview Value={textValue} />
         </div>
         <footer className="title mt-2 font-mono text-0.5xl font-light tracking-wide">coded by LeJulienne</footer>
      </>
   );
}

function Preview(props) {
   return (
      <div className={boxStyle}>
         <div className={headerStyle}>
            <p className='header_icon'>
               <div className="spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </p>
            <p className='header_title'>Preview</p>
         </div>
         <div className="bg-white h-full p-4 rounded">
            <ReactMarkdown ReactMarkdown>{props.Value}</ReactMarkdown>
         </div>

      </div>
   );
}

function Editor(props) {
   return (
      <div className={boxStyle}>
         <div className={headerStyle}>
            <p className='header_icon'>
               <button className="cssbuttons-io">
                  <span>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z">
                        </path>
                     </svg> Code</span>
               </button>
            </p>
            <p className='header_title'>Editor</p>
            <div className={expandStyle} onClick={props.onclick} >
               <FontAwesomeIcon icon={props.isExpanded == false ? faExpand : faCompress}></FontAwesomeIcon>
            </div>

         </div>
         <textarea className='w-none h-100' value={props.Value} onChange={props.onchange} />
      </div>
   );
}

export default App;
