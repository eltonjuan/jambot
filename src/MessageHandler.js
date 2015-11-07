  export function handler(msg) {
    let text = msg.text;

    if (isUrl(text)) {
      // strip off the <> 
      text = text.replace('<', '');
      text = text.replace('>', '');

      // slack does weird things with partial URLs
      if (text.includes('|')) {
        text = text.split('|')[0];
      }

      return {
        text,
        user: msg.user,
        ts: msg.ts,
        channel: msg.channel
      };
    } else {
      return false;
    }
  }

  export function isUrl(text) {
    const urlRegexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return urlRegexp.test(text);
  }

  export function reactor(parsedMsg, slack) {
    slack._apiCall('reactions.add', {
      name: 'thumbsup',
      channel: parsedMsg.channel,
      timestamp: parsedMsg.ts
    }, () => {
      slack._apiCall('reactions.add', {
        name: 'thumbsdown',
        channel: parsedMsg.channel,
        timestamp: parsedMsg.ts
      });
    });
  }
