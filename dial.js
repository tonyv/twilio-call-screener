exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  const dial = twiml.dial();

  // Replace 2345556666 with your phone number
  dial.number("+12345556666", {
    url: `<INSERT_URL_FOR_YOUR_SCREEN_CALL_FUNCTION_HERE>?reason=${event.reason}`,
  });
  callback(null, twiml);
};
