exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  const gather = twiml.gather({
    action: "<INSERT_URL_FOR_YOUR_GATHER_FUNCTION HERE>",
    numDigits: 1,
  });

  gather.say(
    `This is a call about ${event.reason}. Press 1 to accept the call or any other key to decline.`
  );

  return callback(null, twiml);
};
