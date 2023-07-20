"use client";

import { useChat } from "ai/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  console.log(messages);

  return (
    <Card className="w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat IA</CardTitle>
        <CardDescription>Chat bot using Vercel SDK</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-4 text-slate-600 text-sm">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>EM</AvatarFallback>
                  <AvatarImage src="https://github.com/emeps.png" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>AD</AvatarFallback>
                  <AvatarImage src="https://github.com/adaptiOficial.png" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-600">
                  {message.role === "user" ? "You" : "AI"}
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
