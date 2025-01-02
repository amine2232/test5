"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { HelpCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function KnowledgeBaseSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Label>Knowledge Bases</Label>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground">
          A Knowledge Base (KB) stores structured information for queries. Enabling it makes its data usable; disabling excludes it until re-enabled. Only one KB can be active at a time.
        </p>
      </div>

      <div className="space-y-2">
        <Label>Select Knowledge Base:</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose a Knowledge Base" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="empty">No Knowledge Base available</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}