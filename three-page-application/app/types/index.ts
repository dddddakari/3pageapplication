export interface Tweet {
    id: string;
    user: string;
    handle: string;
    content: string;
    time: string;
    comments: number;
    retweets: number;
    likes: number;
    liked: boolean;
    retweeted: boolean;
  }

  export interface Notification {
    id: string;
    type: 'like' | 'retweet' | 'reply' | 'quote' | 'follow';
    user: string;
    handle: string;
    text: string;
    time: string;
  }