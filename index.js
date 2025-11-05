require('dotenv').config();
const sendSMS = async () => {
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const destination = process.env.RECEPIENT;
  const source = process.env.SENDERID;
  const message = 'Hello World!';
  const dlr = 1; // delivery report
  const type = 0; // 0 for plain text

  const url = `${process.env.SERVER_URL}?username=${username}&password=${password}&type=${type}&dlr=${dlr}&destination=${destination}&source=${source}&message=${encodeURIComponent(message)}`;
  
  try {
    const response = await fetch(url, { method: 'GET' });
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.error(error);
    //http://rslr.connectbind.com:8080/bulksms/bulksms?username=pser-***&password=****12&type=0&dlr=0&destination=233540999072&source=TEST&message=SSSSSS
  }
};

sendSMS();
