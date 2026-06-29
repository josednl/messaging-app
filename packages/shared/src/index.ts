// Shared utility functions and constants
export const APP_NAME = 'Messaging App';

export function formatMessage(user: string, text: string): string {
  return `[${new Date().toLocaleTimeString()}] ${user}: ${text}`;
}
