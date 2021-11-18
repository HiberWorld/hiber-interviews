// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export enum DMStatus {
  Online = 'online',
  Offline = 'offline',
  Busy = 'busy',
  PlayingMultiplayer = 'playing-multiplayer',
}

export type User = {
  id: string;
  jid: string; // jid is the conversation id, in a non group chat it's the same as the user you're chatting with. 
  username: string;
  pictureUrl: string;
  status: DMStatus;
  isTyping: boolean;
};

export type ChatType = 'chat' | 'groupchat';

export type Conversation = {
  type: ChatType;
  title?: string | null;
  subject?: string | null;
  users: User[];
  user: User;
  unreadMessages: number;
  latestMessage?: any | null;
  messages: any[];
  jid: string;
};

type Data = [Conversation];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      jid: "2024@chat.hiber.world",
      latestMessage: {
        from: "2025@chat.hiber.world/7CEDE78BCE68344F1636-702524-788496",
        id: "7613b79b-1655-454f-b797-c79d46ca11a5",
        lang: "en",
        to: "2024@chat.hiber.world",
        alternateLanguageBodies: [{ lang: "en", value: "Very much hi! 😂 " }],
        body: "Very much hi! 😂 ",
        type: "chat",
        chatState: "composing",
        originId: "7613b79b-1655-454f-b797-c79d46ca11a5",
        marker: { type: "markable" },
        createdAt: "2021-11-12T07:42:34.000Z",
        isMine: true,
      },
      messages: [
        {
          from: "2025@chat.hiber.world/54A2597B94C574C41636-644827-666813",
          id: "9c6a8368-f538-4a0c-98f4-d3ea8310d1c5",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "hejhjehjehjshja" }],
          body: "hejhjehjehjshja",
          type: "chat",
          chatState: "composing",
          originId: "9c6a8368-f538-4a0c-98f4-d3ea8310d1c5",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:39:46.000Z",
          isMine: true,
        },
        {
          from: "2024@chat.hiber.world/B105BBD7174D5D391636-644831-724030",
          id: "21b445b1-e808-405c-8519-47e24ef66f85",
          lang: "en",
          to: "2025@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asd" }],
          body: "asd",
          type: "chat",
          chatState: "composing",
          originId: "21b445b1-e808-405c-8519-47e24ef66f85",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:39:56.000Z",
          isMine: false,
        },
        {
          from: "2024@chat.hiber.world/B105BBD7174D5D391636-644831-724030",
          id: "7d5922b9-49a9-49e4-b33c-49bec2d943da",
          lang: "en",
          to: "2025@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasd" }],
          body: "asdasd",
          type: "chat",
          chatState: "composing",
          originId: "7d5922b9-49a9-49e4-b33c-49bec2d943da",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:40:00.000Z",
          isMine: false,
        },
        {
          from: "2025@chat.hiber.world/54A2597B94C574C41636-644827-666813",
          id: "971dedb6-b66c-40bf-8d5e-8593578ed2a8",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "Jtnea" }],
          body: "Jtnea",
          type: "chat",
          chatState: "composing",
          originId: "971dedb6-b66c-40bf-8d5e-8593578ed2a8",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:40:05.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/54A2597B94C574C41636-644827-666813",
          id: "6bf823fc-311e-442c-963c-0afe711b2704",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "tjena" }],
          body: "tjena",
          type: "chat",
          chatState: "composing",
          originId: "6bf823fc-311e-442c-963c-0afe711b2704",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:40:07.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/54A2597B94C574C41636-644827-666813",
          id: "05cfde8d-4946-406c-a313-6ef62aca9cd3",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasd" }],
          body: "asdasd",
          type: "chat",
          chatState: "composing",
          originId: "05cfde8d-4946-406c-a313-6ef62aca9cd3",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:40:42.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/B4F8B6FD9949010D1636-645268-204193",
          id: "97f4e999-39c2-4d94-ae04-0767edd090b0",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdas" }],
          body: "asdas",
          type: "chat",
          chatState: "composing",
          originId: "97f4e999-39c2-4d94-ae04-0767edd090b0",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:41:11.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/B4F8B6FD9949010D1636-645268-204193",
          id: "bb0e4f2f-6347-4b2a-aabf-7e5985c1f8d8",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asd" }],
          body: "asd",
          type: "chat",
          chatState: "composing",
          originId: "bb0e4f2f-6347-4b2a-aabf-7e5985c1f8d8",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:41:47.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/13B5A77EF814078F1636-645571-767056",
          id: "53de132f-4546-4076-9cd2-34a604238431",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasd" }],
          body: "asdasd",
          type: "chat",
          chatState: "composing",
          originId: "53de132f-4546-4076-9cd2-34a604238431",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:47:23.000Z",
          isMine: true,
        },
        {
          from: "2024@chat.hiber.world/5A16EE7CE16BFB911636-645568-339435",
          id: "9a7aaf7c-48db-4d31-b5b3-800690a2e40e",
          lang: "en",
          to: "2025@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasd" }],
          body: "asdasd",
          type: "chat",
          chatState: "composing",
          originId: "9a7aaf7c-48db-4d31-b5b3-800690a2e40e",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:47:30.000Z",
          isMine: false,
        },
        {
          from: "2024@chat.hiber.world/5A16EE7CE16BFB911636-645568-339435",
          id: "1e47604c-788f-4ec2-8cce-58d6ba87d23d",
          lang: "en",
          to: "2025@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasd" }],
          body: "asdasd",
          type: "chat",
          chatState: "composing",
          originId: "1e47604c-788f-4ec2-8cce-58d6ba87d23d",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:47:34.000Z",
          isMine: false,
        },
        {
          from: "2025@chat.hiber.world/13B5A77EF814078F1636-645571-767056",
          id: "25807391-e46e-4a96-979c-abe8c131292f",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasdasd" }],
          body: "asdasdasd",
          type: "chat",
          chatState: "composing",
          originId: "25807391-e46e-4a96-979c-abe8c131292f",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:47:39.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/13B5A77EF814078F1636-645571-767056",
          id: "39f761c5-c567-4d34-bff9-d9dd337e5016",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasdasd" }],
          body: "asdasdasd",
          type: "chat",
          chatState: "composing",
          originId: "39f761c5-c567-4d34-bff9-d9dd337e5016",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:47:41.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/7DC5452A1A73A0991636-645714-499823",
          id: "e79fe2b3-ac84-4a34-a2fd-ba1e9050720b",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasda" }],
          body: "asdasda",
          type: "chat",
          chatState: "composing",
          originId: "e79fe2b3-ac84-4a34-a2fd-ba1e9050720b",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:48:38.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/7DC5452A1A73A0991636-645714-499823",
          id: "7f069027-75a9-4981-8bd4-239e649d24bd",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asda" }],
          body: "asda",
          type: "chat",
          chatState: "composing",
          originId: "7f069027-75a9-4981-8bd4-239e649d24bd",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:48:44.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/7DC5452A1A73A0991636-645714-499823",
          id: "b23c7f40-73ac-4555-befb-8b8374a43308",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asd" }],
          body: "asd",
          type: "chat",
          chatState: "composing",
          originId: "b23c7f40-73ac-4555-befb-8b8374a43308",
          marker: { type: "markable" },
          createdAt: "2021-11-11T15:53:07.000Z",
          isMine: true,
        },
        {
          from: "2025@chat.hiber.world/F55E2069033603DA1636-702613-464578",
          id: "cf6158ca-a259-4108-bce3-f355c8fd3a87",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "asdasdasdasada" }],
          body: "asdasdasdasada",
          type: "chat",
          chatState: "composing",
          originId: "cf6158ca-a259-4108-bce3-f355c8fd3a87",
          marker: { type: "markable" },
          createdAt: "2021-11-12T07:37:01.000Z",
          isMine: true,
        },
        {
          from: "2024@chat.hiber.world/6A562459731FA1881636-702871-806649",
          id: "57042a29-b417-4006-a180-27879b8d4ee4",
          lang: "en",
          to: "2025@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "qweqweq" }],
          body: "qweqweq",
          type: "chat",
          chatState: "composing",
          originId: "57042a29-b417-4006-a180-27879b8d4ee4",
          marker: { type: "markable" },
          createdAt: "2021-11-12T07:41:22.000Z",
          isMine: false,
        },
        {
          from: "2024@chat.hiber.world/6A562459731FA1881636-702871-806649",
          id: "cf05f774-efdf-4f49-9e62-7715112203fa",
          lang: "en",
          to: "2025@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "Hello townhall!" }],
          body: "Hello townhall!",
          type: "chat",
          chatState: "composing",
          originId: "cf05f774-efdf-4f49-9e62-7715112203fa",
          marker: { type: "markable" },
          createdAt: "2021-11-12T07:42:28.000Z",
          isMine: false,
        },
        {
          from: "2025@chat.hiber.world/7CEDE78BCE68344F1636-702524-788496",
          id: "7613b79b-1655-454f-b797-c79d46ca11a5",
          lang: "en",
          to: "2024@chat.hiber.world",
          alternateLanguageBodies: [{ lang: "en", value: "Very much hi! 😂 " }],
          body: "Very much hi! 😂 ",
          type: "chat",
          chatState: "composing",
          originId: "7613b79b-1655-454f-b797-c79d46ca11a5",
          marker: { type: "markable" },
          createdAt: "2021-11-12T07:42:34.000Z",
          isMine: true,
        },
      ],
      unreadMessages: 0,
      type: "chat",
      user: {
        id: "2024",
        username: "ChatTest",
        pictureUrl:
          "https://cdn.hibervr.com/static/images/profile-images/blue.png",
        status: DMStatus.Online,
        jid: "2024@chat.hiber.world",
        isTyping: false,
      },
      users: [],
    },
  ]);
}
