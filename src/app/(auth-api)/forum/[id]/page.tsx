
// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { useToast } from "@/components/ui/use-toast";
// import { ArrowLeft, ArrowRight, Heart, MessageSquare, Share2, Flag, ThumbsUp, Reply } from "lucide-react";

// // Dados de exemplo para o tópico e as respostas
// const topicData = {
//   id: "1",
//   title: "Como resolver problemas com o reconhecimento do Arduino no Windows 11?",
//   content: `Estou tendo problemas para fazer meu PC com Windows 11 reconhecer meu Arduino Pro Micro quando estou desenvolvendo um volante DIY.

// O dispositivo é reconhecido como "Arduino Leonardo" no gerenciador de dispositivos, mas quando tento fazer upload do sketch recebo o erro: "avrdude: ser_open(): can't open device "\\.\COM3": O sistema não pode encontrar o arquivo especificado."

// Já tentei:
// - Reinstalar os drivers usando o Arduino IDE
// - Usar diferentes portas USB
// - Usar um cabo USB diferente
// - Desinstalar e reinstalar o Arduino IDE

// Alguém já enfrentou um problema semelhante no Windows 11? Alguma sugestão de como resolver isso?`,
//   author: {
//     id: 1,
//     name: "CarlosSim",
//     avatar: "https://placehold.co/200/EEE/31343C?text=CS",
//     reputation: 342,
//     postCount: 87
//   },
//   category: "Suporte Técnico",
//   tags: ["Arduino", "Windows 11", "Hardware", "Problemas de Conexão"],
//   createdAt: "há 2 dias",
//   views: 156,
//   likes: 12,
//   isLocked: false,
//   isPinned: true
// };

// const replies = [
//   {
//     id: 1,
//     content: "Já tive esse problema também! Para mim, o que funcionou foi instalar manualmente os drivers do Arduino usando o Gerenciador de Dispositivos do Windows. Clique com o botão direito no dispositivo, selecione 'Atualizar driver' e depois 'Procurar drivers no meu computador'. Navegue até a pasta 'drivers' na instalação do Arduino IDE e selecione o driver correto para o Pro Micro.",
//     author: {
//       id: 2,
//       name: "TechRacing",
//       avatar: "https://placehold.co/200/EEE/31343C?text=TR",
//       reputation: 521,
//       postCount: 124
//     },
//     createdAt: "há 1 dia",
//     likes: 8,
//     isAnswer: false
//   },
//   {
//     id: 2,
//     content: "No Windows 11, às vezes o problema está relacionado às configurações de segurança. Tente desativar temporariamente o Windows Defender e o SmartScreen para ver se faz diferença. Além disso, verifique se está usando um cabo USB que suporta tanto dados quanto energia - alguns cabos são apenas para carregamento e não funcionam para transferência de dados.",
//     author: {
//       id: 3,
//       name: "ElectroWiz",
//       avatar: "https://placehold.co/200/EEE/31343C?text=EW",
//       reputation: 876,
//       postCount: 278
//     },
//     createdAt: "há 1 dia",
//     likes: 15,
//     isAnswer: true
//   },
//   {
//     id: 3,
//     content: "Uma outra solução que funcionou para mim foi usar o Zadig (https://zadig.akeo.ie/) para substituir os drivers. Às vezes, o Windows 11 tem um problema com os drivers padrão. Com o Zadig, você pode instalar os drivers libusb que funcionam melhor em alguns casos. Mas seja cuidadoso, pois você precisará reverter isso se quiser usar o Arduino IDE normalmente novamente.",
//     author: {
//       id: 4,
//       name: "SimMaster",
//       avatar: "https://placehold.co/200/EEE/31343C?text=SM",
//       reputation: 1253,
//       postCount: 423
//     },
//     createdAt: "há 12 horas",
//     likes: 10,
//     isAnswer: false
//   },
//   {
//     id: 4,
//     content: "Você verificou se o seu Arduino não está com o bootloader danificado? Às vezes isso pode causar problemas de reconhecimento. Se puder, tente fazer um duplo-clique no botão reset (se tiver um) bem no momento em que você inicia o upload do sketch para forçar o modo de programação.",
//     author: {
//       id: 5,
//       name: "ArduinoFan",
//       avatar: "https://placehold.co/200/EEE/31343C?text=AF",
//       reputation: 782,
//       postCount: 152
//     },
//     createdAt: "há 10 horas",
//     likes: 5,
//     isAnswer: false
//   }
// ];

// export default function Page() {
//   const { id } = useParams();
//   const [replyContent, setReplyContent] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();
  
//   // Simula o tópico obtido com base no ID do parâmetro
//   const topic = topicData;
  
//   const handleLike = (replyId?: number) => {
//     toast({
//       title: "Curtida registrada",
//       description: `Você curtiu ${replyId ? 'esta resposta' : 'este tópico'}.`,
//     });
//   };
  
//   const handleShare = () => {
//     // Simular cópia do link para a área de transferência
//     navigator.clipboard.writeText(window.location.href);
    
//     toast({
//       title: "Link copiado!",
//       description: "O link do tópico foi copiado para a área de transferência.",
//     });
//   };
  
//   const handleReport = () => {
//     toast({
//       title: "Tópico reportado",
//       description: "Obrigado por reportar. Nossos moderadores irão analisar.",
//     });
//   };
  
//   const handleSubmitReply = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!replyContent.trim()) {
//       toast({
//         variant: "destructive",
//         title: "Erro ao enviar resposta",
//         description: "O conteúdo da resposta não pode estar vazio.",
//       });
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Simulação de envio
//     setTimeout(() => {
//       toast({
//         title: "Resposta enviada com sucesso!",
//         description: "Sua resposta será exibida após aprovação do moderador.",
//       });
//       setReplyContent("");
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   return (
//     <div className="container py-12">
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
//         <Link to="/forum" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
//           <ArrowLeft className="mr-2 h-4 w-4" />
//           <span>Voltar para os fóruns</span>
//         </Link>
        
//         <div className="flex items-center gap-2">
//           <Badge variant="outline" className="border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400">
//             {topic.category}
//           </Badge>
          
//           {topic.isPinned && (
//             <Badge variant="secondary">
//               Fixado
//             </Badge>
//           )}
          
//           {topic.isLocked && (
//             <Badge variant="destructive">
//               Bloqueado
//             </Badge>
//           )}
//         </div>
//       </div>
      
//       <div className="space-y-8">
//         {/* Tópico Principal */}
//         <Card className="border-blue-200 dark:border-blue-900">
//           <CardHeader className="bg-blue-50 dark:bg-blue-950/30 rounded-t-lg pb-3">
//             <CardTitle className="leading-tight text-xl md:text-2xl">{topic.title}</CardTitle>
//           </CardHeader>
//           <CardContent className="pt-6">
//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Informações do Autor */}
//               <div className="md:w-48 shrink-0 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-4 mb-4 md:mb-0">
//                 <Avatar className="h-10 w-10 md:h-16 md:w-16">
//                   <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
//                   <AvatarFallback>{topic.author.name.substring(0, 2)}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold text-sm md:text-base">{topic.author.name}</p>
//                   <div className="text-xs text-muted-foreground space-y-1">
//                     <p>Posts: {topic.author.postCount}</p>
//                     <p>Reputação: {topic.author.reputation}</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Conteúdo do Tópico */}
//               <div className="flex-1 space-y-4">
//                 <div className="text-sm text-muted-foreground mb-2 flex items-center gap-3">
//                   <span>Publicado {topic.createdAt}</span>
//                   <span>•</span>
//                   <span>{topic.views} visualizações</span>
//                 </div>
                
//                 <div className="prose prose-sm dark:prose-invert max-w-none">
//                   <p className="whitespace-pre-line">{topic.content}</p>
//                 </div>
                
//                 <div className="pt-4 flex flex-wrap gap-2">
//                   {topic.tags.map((tag, index) => (
//                     <Badge key={index} variant="outline" className="bg-slate-100 dark:bg-slate-800">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="border-t bg-slate-50 dark:bg-slate-800/30 rounded-b-lg flex flex-wrap gap-3 justify-between">
//             <div className="flex gap-2">
//               <Button variant="ghost" size="sm" onClick={() => handleLike()}>
//                 <Heart className={`mr-1 h-4 w-4 ${true ? 'fill-primary text-primary' : ''}`} />
//                 <span>{topic.likes}</span>
//               </Button>
//               <Button variant="ghost" size="sm" onClick={handleShare}>
//                 <Share2 className="mr-1 h-4 w-4" />
//                 <span>Compartilhar</span>
//               </Button>
//               <Button variant="ghost" size="sm" onClick={handleReport}>
//                 <Flag className="mr-1 h-4 w-4" />
//                 <span>Reportar</span>
//               </Button>
//             </div>
            
//             <Button variant="outline" size="sm" onClick={() => document.getElementById('reply-section')?.scrollIntoView({ behavior: 'smooth' })}>
//               <Reply className="mr-1 h-4 w-4" />
//               <span>Responder</span>
//             </Button>
//           </CardFooter>
//         </Card>
        
//         {/* Respostas */}
//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-semibold">
//               Respostas <span className="text-muted-foreground">({replies.length})</span>
//             </h2>
//             <div className="text-sm text-muted-foreground">
//               Ordenar por: <span className="font-medium underline cursor-pointer">Mais recentes</span>
//             </div>
//           </div>
          
//           {replies.map((reply) => (
//             <Card key={reply.id} className={reply.isAnswer ? 'border-green-300 dark:border-green-900' : ''}>
//               {reply.isAnswer && (
//                 <div className="bg-green-100 dark:bg-green-900/30 px-4 py-1 text-sm text-green-700 dark:text-green-300 font-medium flex items-center">
//                   <ThumbsUp className="h-4 w-4 mr-2" />
//                   Melhor resposta
//                 </div>
//               )}
//               <CardContent className="pt-6">
//                 <div className="flex flex-col md:flex-row gap-6">
//                   {/* Informações do Autor */}
//                   <div className="md:w-48 shrink-0 flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-4 mb-4 md:mb-0">
//                     <Avatar className="h-10 w-10 md:h-16 md:w-16">
//                       <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
//                       <AvatarFallback>{reply.author.name.substring(0, 2)}</AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <p className="font-semibold text-sm md:text-base">{reply.author.name}</p>
//                       <div className="text-xs text-muted-foreground space-y-1">
//                         <p>Posts: {reply.author.postCount}</p>
//                         <p>Reputação: {reply.author.reputation}</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Conteúdo da Resposta */}
//                   <div className="flex-1 space-y-4">
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <span>Respondido {reply.createdAt}</span>
//                     </div>
                    
//                     <div className="prose prose-sm dark:prose-invert max-w-none">
//                       <p className="whitespace-pre-line">{reply.content}</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter className="border-t bg-slate-50 dark:bg-slate-800/30 flex justify-between">
//                 <div className="flex gap-2">
//                   <Button variant="ghost" size="sm" onClick={() => handleLike(reply.id)}>
//                     <Heart className="mr-1 h-4 w-4" />
//                     <span>{reply.likes}</span>
//                   </Button>
//                   <Button variant="ghost" size="sm" onClick={() => {}}>
//                     <Reply className="mr-1 h-4 w-4" />
//                     <span>Citar</span>
//                   </Button>
//                 </div>
                
//                 <Button variant="ghost" size="sm" onClick={handleReport}>
//                   <Flag className="mr-1 h-4 w-4" />
//                   <span>Reportar</span>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
          
//           {/* Navegação de Paginação */}
//           <div className="flex justify-center mt-8">
//             <div className="flex space-x-2">
//               <Button variant="outline" size="sm" disabled>
//                 <ArrowLeft className="mr-1 h-4 w-4" />
//                 <span>Anterior</span>
//               </Button>
//               <Button variant="outline" size="sm">
//                 <span>Próximo</span>
//                 <ArrowRight className="ml-1 h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
        
//         {/* Formulário de Resposta */}
//         <div id="reply-section" className="pt-6">
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-xl">Sua Resposta</CardTitle>
//             </CardHeader>
//             <form onSubmit={handleSubmitReply}>
//               <CardContent>
//                 <Textarea 
//                   placeholder="Escreva sua resposta aqui..." 
//                   className="min-h-[200px]"
//                   value={replyContent}
//                   onChange={(e) => setReplyContent(e.target.value)}
//                 />
//               </CardContent>
//               <CardFooter className="border-t bg-slate-50 dark:bg-slate-800/30 flex justify-between">
//                 <div className="text-sm text-muted-foreground">
//                   Utilize formatação Markdown para estilizar seu texto
//                 </div>
//                 <Button 
//                   type="submit" 
//                   disabled={isSubmitting || !replyContent.trim()}
//                 >
//                   {isSubmitting ? 'Enviando...' : 'Enviar Resposta'}
//                 </Button>
//               </CardFooter>
//             </form>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };