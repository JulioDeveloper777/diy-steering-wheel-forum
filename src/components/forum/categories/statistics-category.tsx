import { categories } from "@/config/forum";
import { Button } from "@heroui/button";
import { Card, CardFooter, CardHeader } from "@heroui/card";

export const StatisticsCategoryForum = () => {
  return (
    <Card>
      <CardHeader>
        <div>Estatísticas por Categoria</div>
      </CardHeader>
      <div>
        <div className="space-y-4">
          {categories.slice(0, 4).map((category) => (
            <div key={category.id} className="flex items-center gap-4">
              <div className="text-2xl">{category.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-medium">{category.name}</div>
                <div className="h-2 bg-accent/30 rounded-full mt-1">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${(category.posts / 5000) * 100}%` }}
                  />
                </div>
              </div>
              <div className="text-sm font-semibold">
                {category.posts} posts
              </div>
            </div>
          ))}
        </div>
      </div>
      <CardFooter>
        <Button variant="bordered" color="secondary" className="w-full">
          Ver Todas Estatísticas
        </Button>
      </CardFooter>
    </Card>
  );
};
