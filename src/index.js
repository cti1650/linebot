import { Action, LineContext, LineEvent } from 'bottender';
import { router, line } from 'bottender/router';
import { AnyContext } from 'bottender/dist/types';

const messageContext = line.message(async (context) => {
  const event = context.event;

  switch (event.message?.type) {
    case 'text':
      await context.replyText(event.message.text);
      break;
    case 'image':
      const imageBuffer = await context.getMessageContent();
      await context.replyText('画像を受け取りました');
      break;
    default:
      await context.replyText('テキストを送ってください。');
      break;
  }
});

const FollowContext = line.follow(async (context) => {
  await context.replyText('フォローありがとうございます。');
});

const AnyContext = line.any(async (context) => {
  await context.replyText('おっけー');
});

export default async function App() {
  return router([messageContext, FollowContext, AnyContext]);
}
