"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HelpCircle } from "lucide-react";

export function SpeechSettings() {
  const [speechRate, setSpeechRate] = useState(15);
  const [noResponseLimit, setNoResponseLimit] = useState(22);
  const [reEngageCount, setReEngageCount] = useState(2);
  const [allowInterruption, setAllowInterruption] = useState(false);
  const [reEngage, setReEngage] = useState(false);
  const [reEngageMessage, setReEngageMessage] = useState(
    "Sorry, I didn't get any response from you, are you still there?"
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Label>Speech Rate</Label>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <span className="text-sm text-muted-foreground">({speechRate})</span>
        </div>
        <Slider
          value={[speechRate]}
          onValueChange={([value]) => setSpeechRate(value)}
          max={30}
          step={1}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Label>Assistant's Response Behavior</Label>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </div>
        <Select defaultValue="rapid">
          <SelectTrigger>
            <SelectValue placeholder="Select behavior" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rapid">Rapid Response</SelectItem>
            <SelectItem value="thoughtful">Thoughtful Response</SelectItem>
            <SelectItem value="balanced">Balanced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Label>Allow Assistant Interruption</Label>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              If turned on, we are allowing callers to interrupt the assistant while speaking.
            </p>
          </div>
          <Switch
            checked={allowInterruption}
            onCheckedChange={setAllowInterruption}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Label>No Response Time Limit</Label>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <span className="text-sm text-muted-foreground">({noResponseLimit} seconds)</span>
        </div>
        <Slider
          value={[noResponseLimit]}
          onValueChange={([value]) => setNoResponseLimit(value)}
          max={60}
          step={1}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Label>Re-engage</Label>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Enable this setting to allow the assistant to re-engage with the user if there is no response.
            </p>
          </div>
          <Switch
            checked={reEngage}
            onCheckedChange={setReEngage}
          />
        </div>
      </div>

      {reEngage && (
        <>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Label>Re-engage Count</Label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">({reEngageCount})</span>
            </div>
            <Slider
              value={[reEngageCount]}
              onValueChange={([value]) => setReEngageCount(value)}
              max={5}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Label>Re-engage Message</Label>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              value={reEngageMessage}
              onChange={(e) => setReEngageMessage(e.target.value)}
              placeholder="Enter re-engage message"
            />
          </div>
        </>
      )}
    </div>
  );
}