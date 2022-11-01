import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  ConversationHeader,
  Avatar,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  ExpansionPanel,
  TypingIndicator,
  MessageSeparator
} from "@chatscope/chat-ui-kit-react";

import TextField from '@mui/material/TextField';




export default function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='gunga'
			userSecret='gunga1234'
			projectID='24497fb4-2417-4a5a-b8af-84a0ce034645'

      // Render Custom Components

      //renderNewMessageForm={(creds, chatId) => {SendBox}}
      //renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {lastMessage = Message}} 
      //renderIsTyping={(typers) => {TypingIndicator}}


		/>
	);
}
