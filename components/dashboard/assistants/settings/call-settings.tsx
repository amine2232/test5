"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { HelpCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CallSettings() {
  const [voicemailDetection, setVoicemailDetection] = useState(false);
  const [voicemailAction, setVoicemailAction] = useState("hangup");
  const [maxCallDuration, setMaxCallDuration] = useState(13);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Label>Voicemail</Label>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Detects answering machines or voicemails and disconnects the call without deducting minutes from your quota.
            </p>
          </div>
          <Switch
            checked={voicemailDetection}
            onCheckedChange={setVoicemailDetection}
          />
        </div>
      </div>

      {voicemailDetection && (
        <div className="space-y-4 pl-6">
          <RadioGroup value={voicemailAction} onValueChange={setVoicemailAction}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hangup" id="hangup" />
              <Label htmlFor="hangup">Hang up if reaching voicemail</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="leave-message" id="leave-message" />
              <Label htmlFor="leave-message">Leave a message if reaching voicemail</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Label>Max Call Duration</Label>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </div>
          <span className="text-sm text-muted-foreground">({maxCallDuration} minutes)</span>
        </div>
        <Slider
          value={[maxCallDuration]}
          onValueChange={([value]) => setMaxCallDuration(value)}
          max={30}
          step={1}
        />
      </div>
    </div>
  );
}