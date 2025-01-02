"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function FunctionsSettings() {
  const [transferToHuman, setTransferToHuman] = useState(false);
  const [webhook, setWebhook] = useState(false);
  const [bookMeeting, setBookMeeting] = useState(false);

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Enable your agent with capabilities such as calendar bookings, call termination...
      </p>
      <p className="text-sm text-muted-foreground">
        No actions added. Click "Add" to create a new action.
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Label>Transfer to Human</Label>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="h-8">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
            <Switch
              checked={transferToHuman}
              onCheckedChange={setTransferToHuman}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Label>Webhook</Label>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="h-8">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
            <Switch
              checked={webhook}
              onCheckedChange={setWebhook}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Label>Book A Meeting</Label>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">Beta</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="h-8">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
            <Switch
              checked={bookMeeting}
              onCheckedChange={setBookMeeting}
            />
          </div>
        </div>
      </div>
    </div>
  );
}