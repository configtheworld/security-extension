import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListItems from './components/ListItems';
import { DOMMessage, DOMMessageResponse } from './types';

function App() {
  const [pageTitle, setPageTitle] = React.useState('');
  const [pageUrl, setPageUrl] = React.useState("");

  React.useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs && chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      chrome.tabs.sendMessage(
        tabs[0].id || 0,
        { type: 'GET_DOM' } as DOMMessage,
        (response: DOMMessageResponse) => {
          console.log(response);
          setPageUrl(response.url);
          setPageTitle(response.title);
        });
    });
  },[]);

  return (
    <div className="App">
      <div className="App"> <header className="App-header"> <Header /> <ListItems pageTitle={pageTitle}/> <Footer /> </header> </div>
    </div>
  );
}

export default App;

