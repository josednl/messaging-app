import { APP_NAME, formatMessage } from '@messaging-app/shared';

const message = formatMessage('Client', 'Ready to connect to the server!');
console.log(`[${APP_NAME}]`, message);

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = `<h1>Welcome to ${APP_NAME}</h1><p>${message}</p>`;
}
