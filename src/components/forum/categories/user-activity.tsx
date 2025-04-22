import { Avatar } from "@heroui/avatar";
import { Card, CardHeader } from "@heroui/card";
import { Badge } from "@heroui/react";
import { Star } from "lucide-react";

export const UserActivityForum = () => {
  return (
    <Card>
      <CardHeader>
        <div>Usuários Mais Ativos</div>
      </CardHeader>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "MarioDIY",
              posts: 283,
              avatar: "https://placehold.co/200/EEE/31343C?text=MD",
              badge: "Expert",
            },
            {
              name: "TechRacer",
              posts: 247,
              avatar: "https://placehold.co/200/EEE/31343C?text=TR",
              badge: "Moderador",
            },
            {
              name: "SimWheel3D",
              posts: 215,
              avatar: "https://placehold.co/200/EEE/31343C?text=SW",
              badge: "Designer",
            },
            {
              name: "ElectroRacer",
              posts: 198,
              avatar: "https://placehold.co/200/EEE/31343C?text=ER",
              badge: "Técnico",
            },
          ].map((user, i) => (
            <div key={i} className="flex items-center gap-3">
              <Avatar src={user.avatar}>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="flex items-center gap-2">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs text-muted-foreground">
                    {user.posts} posts
                  </span>
                </div>
              </div>
              <Badge variant="solid" className="bg-accent/30">
                {user.badge}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
