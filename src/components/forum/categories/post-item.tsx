import { trendingTopics } from "@/config/forum";
import { Card } from "@heroui/card";
import { Badge } from "@heroui/react";
import { Eye, MessageSquare, Pin } from "lucide-react";

export const PostItem = () => {
  return (
    <Card>
      <div className="p-0">
        <div className="divide-y divide-border">
          {trendingTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-4 hover:bg-accent/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {topic.pinned && <Pin className="h-4 w-4 text-primary" />}
                    <h3 className="font-semibold hover:text-primary cursor-pointer">
                      {topic.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="faded" className="bg-accent/30">
                      {topic.category}
                    </Badge>
                    <span className="text-muted-foreground">por</span>
                    <span className="font-medium hover:text-primary cursor-pointer">
                      {topic.author}
                    </span>
                  </div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center justify-end gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{topic.replies}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{topic.views}</span>
                  </div>
                  <div className="text-xs mt-1">{topic.lastActivity}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
