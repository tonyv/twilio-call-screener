exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();

  if (event.Digits !== 1) {
    twiml.hangup();
  }

  return callback(null, twiml);
};
