// Listen to messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // onMessage must return "true" if response is async.
  let isResponseAsync = false;

  if (request.popupMounted) {
    console.log('eventPage notified that popup.tsx has mounted.');
  }

  return isResponseAsync;
});

/**
 * Fired when a message is sent from another extension/app
 */
chrome.runtime.onMessageExternal.addListener(
  () => {

  },
);
