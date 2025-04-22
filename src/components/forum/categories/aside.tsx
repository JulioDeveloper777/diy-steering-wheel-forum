"use client";

import { Card } from "@heroui/card";
import { MessageSquare, Users } from "lucide-react";

export interface AsideForumProps {
  postCount: number;
  usersCount: number;
}

export const AsideForum = ({ postCount, usersCount }: AsideForumProps) => {
  return (
    <div className="space-y-6">
      <Card className="p-5 text-white shadow-md border border-white border-opacity-20 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Estatísticas do Fórum</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare color="red" className="h-5 w-5" />
              <span>Postagens</span>
            </div>
            <span className="font-semibold">{postCount}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Users color="red" className="h-5 w-5" />
              <span>Membros</span>
            </div>
            <span className="font-semibold">{usersCount}</span>
          </div>
          {/* <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Clock color="red" className="h-5 w-5" />
              <span>Última Atividade</span>
            </div>
            <span className="font-semibold">há 2 min</span>
          </div> */}
        </div>
      </Card>

      {/* Search */}
      {/* <Card className="p-5 text-white shadow-md border border-white border-opacity-20 rounded-xl">
        <h6 className="text-xl font-bold mb-4">Busca no Fórum</h6>
        <div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              className="w-full pl-10 pr-4 rounded-xl bg-[#1a1a1a] text-white border-gray-700 placeholder-gray-400"
              placeholder="Buscar tópicos..."
              type="search"
            />
          </div>
          <div className="mt-4">
            <Button
              variant="bordered"
              className="w-full bg-transparent border-gray-700 text-white hover:bg-red-700 hover:border-opacity-10"
            >
              Pesquisar
            </Button>
          </div>
        </div>
      </Card> */}

      {/* <Card className="p-5 text-white shadow-md border border-white border-opacity-20 rounded-xl  ">
        <h5 className="text-lg font-semibold">Atividade Recente</h5>
        <div className="p-0">
          <div className="divide-y divide-gray-700">
            {[
              {
                id: 1,
                user: {
                  name: "MarioDIY",
                  avatar: "https://placehold.co/200/EEE/31343C?text=MD",
                },
                topic: "Problema com shift paddles magnéticos",
                action: "respondeu",
                time: "12 minutos atrás",
                excerpt:
                  "Tente aumentar a distância entre o ímã e o sensor para 2-3mm. Isso deve resolver o problema de acionamento fantasma.",
              },
              {
                id: 2,
                user: {
                  name: "TechRacer",
                  avatar: "https://placehold.co/200/EEE/31343C?text=TR",
                },
                topic: "Compatibilidade com Assetto Corsa Competizione",
                action: "criou tópico",
                time: "45 minutos atrás",
                excerpt:
                  "Alguém pode me ajudar a configurar meu volante DIY com Arduino no ACC? Estou tendo problemas com...",
              },
              {
                id: 3,
                user: {
                  name: "SimWheel3D",
                  avatar: "https://placehold.co/200/EEE/31343C?text=SW",
                },
                topic: "Materiais para impressão 3D de volantes",
                action: "respondeu",
                time: "2 horas atrás",
                excerpt:
                  "O PETG tem sido minha melhor escolha para peças estruturais do volante. É mais resistente que o PLA e não deforma com o calor.",
              },
              {
                id: 4,
                user: {
                  name: "ElectroRacer",
                  avatar: "https://placehold.co/200/EEE/31343C?text=ER",
                },
                topic:
                  "Dúvida: Como emular botões de direção em um joystick analógico",
                action: "respondeu",
                time: "4 horas atrás",
                excerpt:
                  "Você pode usar o MMJoy2 para isso. Configure a calibração do analógico e defina zonas para cada direção...",
              },
              {
                id: 5,
                user: {
                  name: "F1Constructor",
                  avatar: "https://placehold.co/200/EEE/31343C?text=F1",
                },
                topic: "Meu primeiro volante F1 finalizado!",
                action: "criou tópico",
                time: "6 horas atrás",
                excerpt:
                  "Depois de 3 meses de trabalho, finalmente terminei meu volante F1 inspirado no Mercedes W12. Confiram as fotos...",
              },
            ].map((activity) => (
              <div
                key={activity.id}
                className="p-4 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.user.avatar} />
                    <AvatarFallback>
                      {activity.user.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="text-sm">
                      <span className="font-semibold">
                        {activity.user.name}
                      </span>
                      <span className="text-gray-400">{` ${activity.action} em `}</span>
                      <span className="font-medium text-blue-400 hover:underline cursor-pointer">
                        {activity.topic}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {activity.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card> */}
    </div>
  );
};
