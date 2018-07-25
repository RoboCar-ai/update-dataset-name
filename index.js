/**
 * GCP funtion tiggered from a message on a Cloud Pub/Sub topic dataset-name.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.handler = (event, context) => {
  const pubsubMessage = event.data;
  console.log(Buffer.from(pubsubMessage, 'base64').toString());
};
