import { DOMMessage, DOMMessageResponse } from '../types';

// async function getCurrentTabUrl() {
//   const tabs = await chrome.tabs.query({ active: true });
//   return tabs[0].url;
// }

const messagesFromReactAppListener = async (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  const response: DOMMessageResponse = {
    title: document.title,
    headlines: Array.from(document.getElementsByTagName<'h1'>('h1')).map(
      (h1) => h1.innerText
    ),
    url: window.location.toString(),
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
